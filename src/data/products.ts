export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'home-decor' | 'gifts' | 'eco-friendly' | 'custom';
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  // Home Decor
  {
    id: 'hd-001',
    name: 'Handcrafted Bamboo Wall Art',
    description: 'Beautiful wall art made from sustainable bamboo featuring traditional designs. Each piece is hand-painted by skilled artisans.',
    price: 89.99,
    image: '/home-decor.png',
    category: 'home-decor',
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'hd-002',
    name: 'Macramé Wall Hanging',
    description: 'Elegant macramé wall hanging made with 100% cotton rope. Adds texture and warmth to any room.',
    price: 59.99,
    image: '/eco-friendly.png',
    category: 'home-decor',
    rating: 4.7,
    reviews: 93
  },
  {
    id: 'hd-003',
    name: 'Hand-carved Wooden Tray',
    description: 'Beautifully carved wooden serving tray with intricate details. Perfect for serving or as a decorative piece.',
    price: 74.99,
    image: '/custom.png',
    category: 'home-decor',
    rating: 4.9,
    reviews: 57
  },
  {
    id: 'hd-004',
    name: 'Ceramic Vase Set',
    description: 'Set of 3 handmade ceramic vases in complementary colors. Each piece is unique with slight variations in glazing.',
    price: 110.00,
    image: '/gifts.png',
    category: 'home-decor',
    rating: 4.6,
    reviews: 42
  },
  {
    id: 'hd-005',
    name: 'Embroidered Cushion Covers',
    description: 'Set of 2 hand-embroidered cushion covers featuring traditional motifs. Made from organic cotton.',
    price: 65.99,
    image: '/hero-crafts.png',
    category: 'home-decor',
    rating: 4.5,
    reviews: 78
  },

  // Gifts
  {
    id: 'g-001',
    name: 'Personalized Name Sign',
    description: 'Custom wooden name sign perfect for nurseries, kids rooms, or as a special gift. Choose your wood type and finish.',
    price: 49.99,
    image: '/gifts.png',
    category: 'gifts',
    featured: true,
    rating: 5.0,
    reviews: 89
  },
  {
    id: 'g-002',
    name: 'Handmade Soap Gift Box',
    description: 'Set of 4 artisanal soaps made with natural ingredients and essential oils. Beautifully packaged in a gift box.',
    price: 34.99,
    image: '/eco-friendly.png',
    category: 'gifts',
    rating: 4.8,
    reviews: 112
  },
  {
    id: 'g-003',
    name: 'Embroidered Sunflower Decoration',
    description: 'Hand-embroidered sunflower hanging decoration. Vibrant colors and detailed stitching make this a special gift.',
    price: 29.99,
    image: '/gifts.png',
    category: 'gifts',
    rating: 4.7,
    reviews: 65
  },
  {
    id: 'g-004',
    name: 'Brass Gramophone Showpiece',
    description: 'Handcrafted brass gramophone decoration piece. Perfect vintage-inspired gift for music lovers.',
    price: 120.00,
    image: '/custom.png',
    category: 'gifts',
    rating: 4.9,
    reviews: 48
  },
  {
    id: 'g-005',
    name: 'Hand-painted Ceramic Mugs',
    description: 'Set of 2 hand-painted ceramic mugs with unique designs. Microwave and dishwasher safe.',
    price: 42.99,
    image: '/home-decor.png',
    category: 'gifts',
    rating: 4.6,
    reviews: 92
  },

  // Eco-friendly
  {
    id: 'eco-001',
    name: 'Recycled Paper Journal Set',
    description: 'Set of 3 handmade journals crafted from recycled paper. Each cover features unique pressed flowers.',
    price: 38.99,
    image: '/eco-friendly.png',
    category: 'eco-friendly',
    featured: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 'eco-002',
    name: 'Jute Market Bag',
    description: 'Durable and stylish market bag handwoven from sustainable jute. Features comfortable cotton handles.',
    price: 32.99,
    image: '/eco-friendly.png',
    category: 'eco-friendly',
    rating: 4.9,
    reviews: 104
  },
  {
    id: 'eco-003',
    name: 'Bamboo Utensil Set',
    description: 'Eco-friendly bamboo utensil set including fork, knife, spoon, and chopsticks in a cotton travel pouch.',
    price: 24.99,
    image: '/hero-crafts.png',
    category: 'eco-friendly',
    rating: 4.7,
    reviews: 88
  },
  {
    id: 'eco-004',
    name: 'Upcycled Fabric Coasters',
    description: 'Set of 6 colorful coasters handmade from upcycled fabric scraps. Machine washable and heat resistant.',
    price: 28.99,
    image: '/home-decor.png',
    category: 'eco-friendly',
    rating: 4.6,
    reviews: 52
  },
  {
    id: 'eco-005',
    name: 'Macramé Plant Hangers',
    description: 'Set of 2 handcrafted macramé plant hangers made from organic cotton rope. Perfect for indoor plants.',
    price: 45.99,
    image: '/eco-friendly.png',
    category: 'eco-friendly',
    rating: 4.8,
    reviews: 67
  },

  // Custom
  {
    id: 'c-001',
    name: 'Custom Family Portrait',
    description: 'Handcrafted wooden family portrait made to order. Send us your photo and we\'ll create a unique keepsake.',
    price: 149.99,
    image: '/custom.png',
    category: 'custom',
    featured: true,
    rating: 5.0,
    reviews: 42
  },
  {
    id: 'c-002',
    name: 'Personalized Wedding Gift',
    description: 'Custom wooden sign with names and wedding date. Choose from multiple wood types and finishes.',
    price: 89.99,
    image: '/gifts.png',
    category: 'custom',
    rating: 4.9,
    reviews: 63
  },
  {
    id: 'c-003',
    name: 'Custom Embroidery Hoop Art',
    description: 'Personalized embroidery hoop art designed to your specifications. Perfect for nurseries or as a special gift.',
    price: 69.99,
    image: '/gifts.png',
    category: 'custom',
    rating: 4.8,
    reviews: 37
  },
  {
    id: 'c-004',
    name: 'Bespoke Jewelry Box',
    description: 'Custom-made wooden jewelry box with your choice of compartments, lining, and optional engraving.',
    price: 120.00,
    image: '/home-decor.png',
    category: 'custom',
    rating: 4.7,
    reviews: 28
  },
  {
    id: 'c-005',
    name: 'Corporate Gift Packages',
    description: 'Custom gift packages for corporate clients. Work with our team to create branded items for your business.',
    price: 299.99,
    image: '/custom.png',
    category: 'custom',
    rating: 4.9,
    reviews: 19
  }
];
