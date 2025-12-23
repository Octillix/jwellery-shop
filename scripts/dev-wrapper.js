#!/usr/bin/env node

// Wrapper script to handle Next.js trace file permission errors on Windows
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Patch fs module BEFORE anything else loads it
const Module = require('module');
const originalRequire = Module.prototype.require;
const fs = require('fs');

// Store original fs methods
const originalCreateWriteStream = fs.createWriteStream;
const originalOpen = fs.open;
const originalOpenSync = fs.openSync;
const originalUnlinkSync = fs.unlinkSync;
const originalUnlink = fs.unlink;

// Patch createWriteStream to handle trace file errors
fs.createWriteStream = function(path, options) {
  if (typeof path === 'string' && path.includes('.next/dev/trace')) {
    // Create a dummy writable stream that does nothing
    const { Writable } = require('stream');
    const dummyStream = new Writable({
      write(chunk, encoding, callback) {
        callback();
      }
    });
    // Handle errors gracefully
    dummyStream.on('error', (err) => {
      if (err.code === 'EPERM' || err.code === 'EACCES') {
        console.warn('⚠ Skipping trace file write due to Windows permissions');
      }
    });
    return dummyStream;
  }
  return originalCreateWriteStream.call(this, path, options);
};

// Patch openSync
fs.openSync = function(path, flags, mode) {
  if (typeof path === 'string' && path.includes('.next/dev/trace')) {
    try {
      return originalOpenSync.call(this, path, flags, mode);
    } catch (err) {
      if (err.code === 'EPERM' || err.code === 'EACCES') {
        console.warn('⚠ Skipping trace file open due to Windows permissions');
        // Return a dummy file descriptor (won't be used anyway)
        return 999;
      }
      throw err;
    }
  }
  return originalOpenSync.call(this, path, flags, mode);
};

// Patch open
fs.open = function(path, flags, mode, callback) {
  if (typeof path === 'string' && path.includes('.next/dev/trace')) {
    // Call original but handle error in callback
    return originalOpen.call(this, path, flags, mode, (err, fd) => {
      if (err && (err.code === 'EPERM' || err.code === 'EACCES')) {
        console.warn('⚠ Skipping trace file open due to Windows permissions');
        if (callback) callback(null, 999); // Return dummy fd
        return;
      }
      if (callback) callback(err, fd);
    });
  }
  return originalOpen.call(this, path, flags, mode, callback);
};

// Patch unlinkSync
fs.unlinkSync = function(path) {
  if (typeof path === 'string' && path.includes('.next/dev/trace')) {
    try {
      return originalUnlinkSync.call(this, path);
    } catch (err) {
      if (err.code === 'EPERM' || err.code === 'EACCES') {
        console.warn('⚠ Skipping trace file deletion due to Windows permissions');
        return;
      }
      throw err;
    }
  }
  return originalUnlinkSync.call(this, path);
};

// Patch unlink
fs.unlink = function(path, callback) {
  if (typeof path === 'string' && path.includes('.next/dev/trace')) {
    return originalUnlink.call(this, path, (err) => {
      if (err && (err.code === 'EPERM' || err.code === 'EACCES')) {
        console.warn('⚠ Skipping trace file deletion due to Windows permissions');
        if (callback) callback(null);
        return;
      }
      if (callback) callback(err);
    });
  }
  return originalUnlink.call(this, path, callback);
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  if (err.code === 'EPERM' && err.path && err.path.includes('.next/dev/trace')) {
    console.warn('⚠ Warning: Could not access trace file due to Windows permissions. Continuing anyway...');
    return; // Don't exit
  }
  // Re-throw other errors
  throw err;
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  if (reason && reason.code === 'EPERM' && reason.path && reason.path.includes('.next/dev/trace')) {
    console.warn('⚠ Warning: Could not access trace file due to Windows permissions. Continuing anyway...');
    return;
  }
  console.error('Unhandled Rejection:', reason);
});

// Now start Next.js
require('next/dist/bin/next');

