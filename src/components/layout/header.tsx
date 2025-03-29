"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            PoojaviCraft
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/for-you" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            For You
          </Link>
          <Link href="/our-products" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            Our Products
          </Link>
          <Link href="/our-story" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            Our Story
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-orange-500">
            Log in
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Try for free
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/for-you"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  For You
                </Link>
                <Link
                  href="/our-products"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Our Products
                </Link>
                <Link
                  href="/our-story"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  href="/resources"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="pt-4 border-t">
                  <Link
                    href="/login"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                </div>
                <Button
                  className="bg-orange-500 hover:bg-orange-600 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Try for free
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
