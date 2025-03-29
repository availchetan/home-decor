"use client";

import Link from "next/link";
import {
  Home,
  Gift,
  Heart,
  Users,
  ShoppingBag,
  Star
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

function FeatureCard({ icon, title, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
        {icon}
      </div>
      <span className="text-center font-medium text-gray-800">{title}</span>
    </Link>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          What kind of crafts are you looking for?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse our carefully curated selection of handmade items for every space and occasion
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          <FeatureCard
            icon={<Home className="w-8 h-8 text-orange-500" />}
            title="Home Decor"
            href="/category/home-decor"
          />
          <FeatureCard
            icon={<Gift className="w-8 h-8 text-orange-500" />}
            title="Unique Gifts"
            href="/category/gifts"
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-orange-500" />}
            title="Wellness Products"
            href="/category/wellness"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-orange-500" />}
            title="Corporate Gifts"
            href="/category/corporate"
          />
          <FeatureCard
            icon={<ShoppingBag className="w-8 h-8 text-orange-500" />}
            title="Eco-Friendly"
            href="/category/eco-friendly"
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-orange-500" />}
            title="Custom Orders"
            href="/custom-orders"
          />
        </div>
      </div>
    </section>
  );
}
