
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
    price: 1999,
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860",
    description: "A comfortable and stylish t-shirt featuring vibrant tech-inspired graphics. Perfect for casual wear or making a statement about your passion for technology.",
    category: "Clothing"
  },
  {
    id: 2,
    name: "Developer Hoodie",
    price: 2599,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Stay warm and comfortable while coding with this premium quality hoodie. Features a modern design that every developer will love.",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Premium Ergonomic Chair",
    price: 18999,
    image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70fb",
    description: "An ergonomically designed chair that provides exceptional comfort and support for long working hours. Features adjustable height, armrests, and lumbar support.",
    category: "Furniture"
  },
  {
    id: 4,
    name: "Adjustable Standing Desk",
    price: 24999,
    image: "https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8",
    description: "Transform your workspace with this height-adjustable standing desk. Alternate between sitting and standing positions for better health and productivity.",
    category: "Furniture"
  },
  {
    id: 5,
    name: "Smart Home Assistant",
    price: 8999,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "A voice-controlled smart home assistant that helps you manage your day, control smart devices, play music, and answer questions. Seamlessly integrates with your digital life.",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 5999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    description: "Experience crystal clear sound with these premium wireless earbuds. Features noise cancellation and long battery life for uninterrupted listening.",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Noise-Cancelling Headphones",
    price: 14999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Premium noise-cancelling headphones with exceptional sound quality. Enjoy your music without any external distractions. Features wireless connectivity and long battery life.",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Minimalist Desk Lamp",
    price: 3499,
    image: "https://images.unsplash.com/photo-1534189236535-8f203e9ce3fa",
    description: "A sleek, adjustable desk lamp with multiple brightness settings and color temperatures. Perfect for your workspace or bedside table.",
    category: "Home Decor"
  },
  {
    id: 9,
    name: "Indoor Plant Set",
    price: 1899,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    description: "Add a touch of nature to your workspace with this set of low-maintenance indoor plants. Improves air quality and creates a calming environment.",
    category: "Home Decor"
  },
  {
    id: 10,
    name: "Waterproof Fitness Tracker",
    price: 6499,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
    description: "Track your fitness goals, heart rate, sleep patterns, and more with this waterproof fitness tracker. Syncs with your smartphone for comprehensive health monitoring.",
    category: "Fitness"
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 1299,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
    description: "Premium non-slip yoga mat for comfortable home workouts. Eco-friendly material with excellent grip and cushioning for all types of exercises.",
    category: "Fitness"
  }
];
