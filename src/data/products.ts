
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Tech T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "A comfortable and stylish t-shirt featuring vibrant tech-inspired graphics. Perfect for casual wear or making a statement about your passion for technology.",
    category: "Clothing"
  },
  {
    id: 2,
    name: "Premium Ergonomic Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "An ergonomically designed chair that provides exceptional comfort and support for long working hours. Features adjustable height, armrests, and lumbar support.",
    category: "Furniture"
  },
  {
    id: 3,
    name: "Smart Home Assistant",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "A voice-controlled smart home assistant that helps you manage your day, control smart devices, play music, and answer questions. Seamlessly integrates with your digital life.",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    description: "Premium noise-cancelling headphones with exceptional sound quality. Enjoy your music without any external distractions. Features wireless connectivity and long battery life.",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    description: "A sleek, adjustable desk lamp with multiple brightness settings and color temperatures. Perfect for your workspace or bedside table.",
    category: "Home Decor"
  },
  {
    id: 6,
    name: "Waterproof Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    description: "Track your fitness goals, heart rate, sleep patterns, and more with this waterproof fitness tracker. Syncs with your smartphone for comprehensive health monitoring.",
    category: "Fitness"
  }
];
