"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Subscription */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-4">Stay in the loop</h3>
          <p className="text-gray-600 mb-4">Be the first to get updates on our latest creations and offers</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-white"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-4">Get some PoojaviCraft</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Our content</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">About us</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Support</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">My PoojaviCraft</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Get the app</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Handmade crafts</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Home decor</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Gifts</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Corporate gifting</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Customized items</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">All articles</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Stories</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Design inspiration</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Craft guides</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Careers</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Press</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Partners</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Terms & conditions</Link></li>
              <li><Link href="/" className="text-sm text-gray-600 hover:text-orange-500">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 PoojaviCraft Inc. All rights reserved.</p>
            </div>

            <div className="flex space-x-4">
              <Link href="/" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-orange-500" />
              </Link>
              <Link href="/" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-orange-500" />
              </Link>
              <Link href="/" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-orange-500" />
              </Link>
              <Link href="/" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-500 hover:text-orange-500" />
              </Link>
              <Link href="/" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-500 hover:text-orange-500" />
              </Link>
            </div>

            <div className="mt-4 md:mt-0">
              <select className="text-xs text-gray-500 border border-gray-300 rounded-md py-1 px-2 bg-white">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
