
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  model: string;
  color: string;
  material: string;
  description: string;
  features: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Matte Black Armor',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=400&fit=crop',
    model: 'iPhone 14 Pro',
    color: 'Black',
    material: 'Polycarbonate',
    description: 'Ultra-durable matte black case with military-grade protection. Perfect for everyday use and professional environments.',
    features: ['Drop protection up to 10ft', 'Scratch-resistant surface', 'Wireless charging compatible', 'Precise camera cutouts'],
    images: [
      'https://images.unsplash.com/photo-1601593346740-925612772716?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Crystal Clear Pro',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop',
    model: 'iPhone 14',
    color: 'Clear',
    material: 'TPU',
    description: 'Crystal clear case that showcases your iPhone\'s original design while providing excellent protection.',
    features: ['100% transparent', 'Anti-yellowing technology', 'Shock absorption', 'Easy installation'],
    images: [
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1601593346740-925612772716?w=800&h=800&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Leather Executive',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    model: 'iPhone 13 Pro Max',
    color: 'Brown',
    material: 'Genuine Leather',
    description: 'Premium genuine leather case for professionals. Elegant design with card holder functionality.',
    features: ['Genuine leather construction', 'Card slot design', 'Magnetic closure', 'Ages beautifully'],
    images: [
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'Ocean Blue Gradient',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=400&fit=crop',
    model: 'iPhone 14 Plus',
    color: 'Blue',
    material: 'Silicone',
    description: 'Beautiful ocean-inspired gradient design with premium silicone construction for comfortable grip.',
    features: ['Gradient color design', 'Soft-touch silicone', 'Enhanced grip', 'Dust resistant'],
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=800&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'Rose Gold Elite',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
    model: 'iPhone 13',
    color: 'Rose Gold',
    material: 'Aluminum',
    description: 'Sleek rose gold aluminum case with premium finish. Perfect blend of style and protection.',
    features: ['Anodized aluminum', 'Precise fit', 'Heat dissipation', 'Fingerprint resistant'],
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'Forest Green Eco',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop',
    model: 'iPhone 12',
    color: 'Green',
    material: 'Recycled Plastic',
    description: 'Eco-friendly case made from recycled materials. Sustainable protection without compromise.',
    features: ['100% recycled materials', 'Biodegradable packaging', 'Carbon neutral shipping', 'Durable protection'],
    images: [
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=800&fit=crop'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByModel = (model: string): Product[] => {
  return products.filter(product => product.model.includes(model));
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3);
};
