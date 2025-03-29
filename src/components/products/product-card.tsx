"use client";

import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-60 overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </Link>
      </div>

      <CardContent className="pt-4 flex-grow">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-lg mb-1 hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0) ? "fill-amber-400" : "fill-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="font-bold text-lg text-gray-900">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
