"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is PoojaviCraft?",
    answer: "PoojaviCraft is a premium handcrafted home decor and gifts brand. We specialize in creating beautiful, artisanal items made with traditional techniques and sustainable materials. Every piece is carefully crafted by skilled artisans to bring warmth and character to your space."
  },
  {
    question: "Are all products handmade?",
    answer: "Yes, all our products are handcrafted by skilled artisans. We take pride in preserving traditional crafting techniques while incorporating modern designs. This ensures that each piece is unique and made with attention to detail and quality."
  },
  {
    question: "Do you offer customization options?",
    answer: "Absolutely! We offer customization on many of our products. Whether you want a specific color, size, or personalized text, we can work with you to create the perfect piece. Please check the product description or contact our customer service team for customization options on specific items."
  },
  {
    question: "What materials do you use?",
    answer: "We use a variety of high-quality, sustainable materials including natural woods, recycled metals, organic fabrics, and eco-friendly dyes. We're committed to ethical sourcing and prioritize materials that are environmentally responsible and safe for your home."
  },
  {
    question: "How much does shipping cost?",
    answer: "Shipping costs vary depending on your location and the size of your order. We offer free shipping on orders over $75 within the United States. International shipping rates will be calculated at checkout. We also offer expedited shipping options for an additional fee."
  },
  {
    question: "Do you offer corporate gifting solutions?",
    answer: "Yes, we specialize in corporate gifting solutions! Our unique handcrafted items make memorable and meaningful corporate gifts. We can customize products with your company logo or create bespoke gift sets that align with your brand. Contact our corporate sales team for more information on bulk orders and custom options."
  },
  {
    question: "What is your return policy?",
    answer: "We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return unused, undamaged items within 30 days of delivery for a full refund or exchange. Custom and personalized items are non-returnable unless there's a defect in craftsmanship."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <a href="/faq" className="text-orange-500 font-medium hover:underline">
            View all FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
