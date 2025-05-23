
import React, { useState } from "react";
import { products as allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ShareButton from "@/components/ShareButton";

const Shop = () => {
  const { items, addItem, removeItem, total } = useCartStore();
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const filteredProducts = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts;
    
  const categories = Array.from(new Set(allProducts.map(product => product.category)));
  
  const handleAddToCart = (productId: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      addItem(product);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };
  
  const handleRemoveFromCart = (productId: number) => {
    removeItem(productId);
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  // Format price in Indian Rupee format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    setShowCart(false);
    navigate("/shop/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Tech & Lifestyle Shop</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover premium products for tech enthusiasts and modern lifestyles.
          </p>
          <div className="mt-6">
            <ShareButton 
              title="Check out this amazing tech shop!"
              text="I found this awesome tech and lifestyle shop. Check it out!"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Featured Products</h2>
          
          <div className="flex flex-wrap gap-3 mb-4 md:mb-0 justify-center">
            <ToggleGroup type="single" value={category || ""} onValueChange={(value) => setCategory(value || null)}>
              <ToggleGroupItem value="" aria-label="All products">
                All
              </ToggleGroupItem>
              {categories.map((cat) => (
                <ToggleGroupItem key={cat} value={cat} aria-label={cat}>
                  {cat}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          <Button 
            variant="outline" 
            className="relative"
            onClick={() => setShowCart(!showCart)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-teal-600 font-semibold">{formatPrice(product.price)}</p>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button 
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link to={`/product/${product.id}`}>View Details</Link>
                </Button>
                <Button 
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-teal-600 hover:bg-teal-700"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-background shadow-xl border-l animate-slide-in-right overflow-auto">
            <div className="sticky top-0 bg-background z-10 p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowCart(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 py-4 border-b">
                      <div className="w-16 h-16 overflow-hidden rounded">
                        <img 
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">Qty: {item.quantity}</span>
                            <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                          </div>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-8 w-8 p-0" 
                            onClick={() => handleRemoveFromCart(item.product.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">{formatPrice(total)}</span>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={items.length === 0}
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setShowCart(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
