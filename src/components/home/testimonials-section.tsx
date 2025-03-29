"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "I've ordered multiple handcrafted home decor pieces and each one has exceeded my expectations. The quality and attention to detail are remarkable.",
    author: "Sarah Johnson",
    context: "Home Decor Enthusiast"
  },
  {
    id: 2,
    quote: "The custom name sign I ordered for my daughter's room is absolutely stunning. PoojaviCraft turned my vision into a beautiful reality.",
    author: "Michael Thomas",
    context: "Happy Customer"
  },
  {
    id: 3,
    quote: "I've been purchasing corporate gifts from PoojaviCraft for three years now. Our clients love receiving these unique handmade items that stand out from typical corporate gifts.",
    author: "Emma Rodriguez",
    context: "Corporate Client"
  }
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 1;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-900">
          Customers are loving our handcrafted products
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Testimonial Cards */}
          {currentTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex-1 border-0 shadow-lg">
              <CardContent className="p-8 bg-orange-50 rounded-xl relative">
                {/* Quote mark */}
                <div className="absolute -top-5 left-8 text-5xl text-orange-300 font-serif">
                  "
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-800 mb-6">
                  {testimonial.quote}
                </blockquote>

                <footer>
                  <cite className="not-italic font-medium text-gray-900">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.context}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array(totalPages).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                currentPage === i ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation - Only visible on larger screens */}
        <div className="hidden md:flex justify-between mt-8">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
