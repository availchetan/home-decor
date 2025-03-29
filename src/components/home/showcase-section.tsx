"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "home-decor", label: "Home Decor",
    description: "Beautiful handcrafted items to enhance your living space",
    image: "/home-decor.png" },
  { id: "gifts", label: "Gifts Collection",
    description: "Unique handmade gifts for every occasion and celebration",
    image: "/gifts.png" },
  { id: "eco-friendly", label: "Eco-friendly Products",
    description: "Sustainable and environmentally conscious handcrafted goods",
    image: "/eco-friendly.png" },
  { id: "custom", label: "Custom Orders",
    description: "Personalized creations tailored to your specific needs",
    image: "/custom.png" },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const currentTab = TABS.find(tab => tab.id === activeTab) || TABS[0];

  return (
    <section className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          The artisanal collection for every space
        </h2>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {currentTab.label}
            </h3>
            <p className="text-gray-700 mb-6">
              {currentTab.description}
            </p>
            <p className="text-gray-700 mb-8">
              Every piece in our collection is carefully handcrafted by skilled artisans using traditional techniques and high-quality materials. Our commitment to excellence ensures that each item is not only beautiful but also durable and unique.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Explore {currentTab.label}
            </Button>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={currentTab.image}
              alt={currentTab.label}
              width={600}
              height={450}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
