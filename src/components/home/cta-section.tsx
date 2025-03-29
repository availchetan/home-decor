"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-400 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be kind to your home
        </h2>

        <div className="max-w-2xl mx-auto mb-10">
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Access our full collection of 500+ handcrafted items for every room and space</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Enjoy complimentary personalization on selected items</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Make artisanal products a part of your daily lifestyle with our exclusive monthly subscription</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium">
            Get your first order
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg font-medium">
            Explore our plans
          </Button>
        </div>
      </div>
    </section>
  );
}
