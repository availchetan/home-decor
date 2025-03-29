"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-amber-50 py-16 lg:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900">
              Everything your home needs
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Feel the warmth of handcrafted items with our beautiful collection of artisanal home decor, eco-friendly products, and unique gifts.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg font-medium h-auto">
              Explore our collection
            </Button>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-8 w-32 h-32 bg-amber-300 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute top-20 -right-16 w-40 h-40 bg-orange-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-12 left-12 w-24 h-24 bg-amber-400 rounded-full opacity-60"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-crafts.png"
                alt="Beautiful handmade crafts"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 lg:-mr-24 w-64 h-64 bg-orange-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-12 w-80 h-80 bg-amber-100 rounded-full opacity-70"></div>
    </section>
  );
}
