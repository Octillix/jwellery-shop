import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Gem, Heart, Star, ShoppingBag, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-16 sm:pt-20">
        {/* Background Image - starts after header */}
        <div className="absolute top-16 sm:top-20 left-0 right-0 z-0 w-full h-[125%]">
        <Image
            src="/lan1.png"
            alt="Exquisite Jewellery Collection"
            fill
          priority
            quality={100}
            unoptimized={false}
            className="object-cover w-full h-full animate-fade-in-scale [animation-delay:0.1s]"
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
          />
          {/* Overlay for better text readability - minimal on mobile to show image, stronger on desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-[60%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-gradient-to-r from-background/40 via-background/10 to-transparent sm:from-background sm:via-background/85 md:via-background/70 lg:via-background/60"></div>
        </div>

        <div className="container relative z-10 px-5 sm:px-6 md:px-8 mx-auto w-full">
          <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            {/* Mobile-First Text Content */}
            <div className="flex flex-col space-y-5 sm:space-y-6 md:space-y-7 text-center sm:text-left py-8 sm:py-0">
              {/* Badge - Mobile Optimized */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 backdrop-blur-md text-primary border border-primary/30 shadow-sm w-fit sm:mx-0 mx-auto animate-fade-in-up [animation-delay:0.2s]">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold">Exquisite Handcrafted Jewellery</span>
              </div>

              {/* Main Heading - Mobile Optimized */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] sm:leading-[1.2]">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up [animation-delay:0.4s] inline-block animate-gradient block mb-1">
                  Timeless Elegance
                </span>
                <span className="text-foreground animate-fade-in-up [animation-delay:0.6s] inline-block block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  For Every Moment
                </span>
          </h1>

              {/* Description - Mobile Optimized */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed max-w-full sm:max-w-lg animate-fade-in-up [animation-delay:0.8s] font-normal">
                Discover our curated collection of premium jewellery, meticulously crafted with precision and passion. 
                From stunning engagement rings to elegant necklaces, find the perfect piece that reflects your unique style and celebrates life's precious moments.
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 md:justify-start justify-center animate-fade-in-up [animation-delay:1s]">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 w-full sm:w-auto rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
                >
                  <Link href="/collections" className="flex items-center justify-center">
                    Explore Collections
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 w-full sm:w-auto rounded-lg font-semibold border-2 hover:bg-accent/10 transition-all duration-300"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              {/* Trust Indicators - Mobile Optimized */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-5 md:pt-6 animate-fade-in-up [animation-delay:1.2s]">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="font-medium">Certified Quality</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="font-medium">Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors duration-300">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="font-medium">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Collections Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-scale">
            <p className="text-xs sm:text-sm md:text-base text-primary/70 font-serif mb-2 uppercase tracking-wider">
              Elegance & Luxury
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Our Latest Collections
            </h2>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                name: "Aura",
                subtitle: "Diamond Collection",
                description: "Exquisite diamond pieces that capture timeless elegance",
                image: "/1.png",
                delay: "0.1s"
              },
              {
                name: "Heritage",
                subtitle: "Traditional Collection",
                description: "Classic designs inspired by traditional craftsmanship",
                image: "/2.png",
                delay: "0.2s"
              },
              {
                name: "Forge",
                subtitle: "Collection",
                description: "Bold and modern pieces for the contemporary wearer",
                image: "/4.png",
                delay: "0.3s"
              },
            ].map((collection, index) => (
              <div
                key={collection.name}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] cursor-pointer animate-slide-in-bottom hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: collection.delay }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={collection.image}
                    alt={`${collection.name} Collection`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90 transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  {/* Brand Logo */}
                  <div className="mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <span className="text-primary font-bold text-lg sm:text-xl">💎</span>
                      </div>
                      <span className="text-white font-bold text-sm sm:text-base">Jewellery</span>
                    </div>
                  </div>

                  {/* Collection Name */}
                  <div className="mb-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                      {collection.name}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 uppercase tracking-wider">
                      {collection.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {collection.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit text-white border-white/30 hover:bg-white hover:text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                  >
                    Explore Collection
                  </Button>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegance Begins Here Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Side - Bangles Image (40%) */}
            <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in-scale">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Placeholder for bangles - you can replace with actual bangle image */}
                <div className="relative w-full h-full max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float">
                      <Gem className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-primary/50" />
                    </div>
                  </div>
                  {/* Decorative circles representing bangles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-primary/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-accent/30 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content (60%) */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8 animate-fade-in-up [animation-delay:0.2s]">
              {/* Subtitle */}
              <div>
                <p className="text-sm sm:text-base md:text-lg text-primary/70 font-sans uppercase tracking-widest mb-4">
                  Elegance Begins Here
                </p>
                
                {/* Decorative Swirly Line */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-transparent mb-6"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent mb-6"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Looking for the Perfect Jewellery?
              </h2>

              {/* Body Text */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Ravi Jewellers is a premier destination for exquisite gold, silver and platinum pieces, crafted to add elegance to your everyday moments and celebrate life's milestones with style.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-base sm:text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section - Necklaces & Earrings */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background w-full">
        <div className="w-full px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
            {/* Left Section - Luxury Necklace */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-8 sm:p-10 md:p-12 lg:p-16 min-h-[300px] sm:h-[600px] md:h-[400px] lg:h-[400px] animate-fade-in-scale hover:shadow-xl transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/7.jpg"
                  alt="Luxury Necklace Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  sizes="50vw"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base text-white/90 uppercase tracking-wider mb-2">
                  Luxury Necklace
                </p>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  Best Friend Jewelry
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 flex-grow">
                  A wide range of exquisite earrings
                </p>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-fit bg-white/10 backdrop-blur-sm hover:bg-white hover:text-foreground border-2 border-white/30 hover:border-white text-white transition-all duration-300"
                >
                  <Link href="/collections/necklaces">Shop Now</Link>
                </Button>
              </div>
            </div>

            {/* Right Section - Diamond Stud Earrings */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-  amber-100 p-8 sm:p-10 md:p-12 lg:p-16 min-h-[300px] sm:h-[600px] md:h-[400px] lg:h-[400px] animate-fade-in-scale [animation-delay:0.2s] hover:shadow-xl transition-all duration-500 w-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
            <Image
                  src="/8.jpg"
                  alt="Diamond Stud Earrings Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  sizes="50vw"
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base text-white/90 uppercase tracking-wider mb-2">
                  Our Earrings
                </p>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  Diamond Stud Earrings
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 flex-grow">
                  A wide range of exquisite earrings
                </p>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-fit bg-white/10 backdrop-blur-sm hover:bg-white hover:text-foreground border-2 border-white/30 hover:border-white text-white transition-all duration-300"
                >
                  <Link href="/collections/earrings">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Best Sellers Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 overflow-hidden w-full">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in-scale px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Our Best Sellers
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our jewelry is made by the finest artists and carefully selected to reflect your style and personality
            </p>
          </div>

          {/* Auto Carousel - No Scrollbar - Full Width */}
          <div className="relative overflow-hidden w-full">
            <div className="flex gap-3 sm:gap-4 md:gap-6 animate-scroll">
              {/* Duplicate items for seamless loop */}
              {[
                ...Array(2).fill([
                  {
                    category: "PEARLES",
                    name: "Diamond Lou Helium Ring",
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    category: "RINGS",
                    name: "14k Gold Rose Ring",
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    category: "EARRINGS",
                    name: "Gorgeous Aluminum Earrings",
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    category: "GIFTS SET",
                    name: "Classic Eternity Ring Sets",
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    category: "NECKLACES & PENDANTS",
                    name: "Everyday Forever Band",
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    category: "RINGS",
                    name: "14k Gold Bespoke Signet Ring",
                    rating: 5,
                    reviews: 5,
                  },
                ])
              ].flat().map((product, index) => {
                // Alternate between the two images
                const imageSrc = index % 2 === 0 ? "/222.jpg" : "/333.jpg"
                
                return (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px]"
                >
                  {/* Product Image */}
                  <div className="h-32 sm:h-36 md:h-40 relative overflow-hidden bg-muted">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 220px"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <CardContent className="p-2 sm:p-3">
                    {/* Category */}
                    <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                      {product.category}
                    </p>

                    {/* Product Name */}
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </CardContent>
                </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
