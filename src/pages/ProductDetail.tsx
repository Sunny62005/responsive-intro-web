
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/cartStore";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCartStore();
  
  const product = products.find(p => p.id === Number(id));

  // Format price in Indian Rupee format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  if (!product) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/shop")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/shop")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-xl font-semibold text-teal-600 mb-4">
              {formatPrice(product.price)}
            </div>
            
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-sm">
                {product.category}
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
