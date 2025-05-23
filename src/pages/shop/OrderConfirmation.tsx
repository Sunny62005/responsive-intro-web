
import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ShareButton from "@/components/ShareButton";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;
  
  useEffect(() => {
    // If there are no order details, redirect to shop
    if (!orderDetails) {
      navigate("/shop");
    }
    
    // Log the order (this would normally go to an analytics service)
    console.log("Order completed:", orderDetails);
    
  }, [orderDetails, navigate]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  if (!orderDetails) {
    return null; // Will redirect
  }
  
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-500" />
          </div>
          <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
          <p className="text-muted-foreground">Thank you for your purchase</p>
          <p className="mt-2 font-medium">Order #{orderNumber}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Order Summary</h3>
            <div className="space-y-3">
              {orderDetails.items.map((item: any) => (
                <div key={item.product.id} className="flex justify-between">
                  <div>
                    <p>{item.product.name} <span className="text-muted-foreground">x{item.quantity}</span></p>
                  </div>
                  <p>{formatPrice(item.product.price * item.quantity)}</p>
                </div>
              ))}
              
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(orderDetails.total)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Shipping Details</h3>
            <div className="text-muted-foreground">
              <p>{orderDetails.shippingAddress.name}</p>
              <p>{orderDetails.shippingAddress.address}</p>
              <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}</p>
              <p>{orderDetails.shippingAddress.zipCode}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Payment Method</h3>
            <p className="text-muted-foreground capitalize">{orderDetails.paymentMethod}</p>
          </div>
          
          <div className="rounded-lg bg-teal-50 dark:bg-teal-950/30 p-4">
            <p className="text-sm">
              A confirmation email has been sent to your email address. 
              Please keep the order information for your reference.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button onClick={() => navigate("/shop")} variant="outline">
            Continue Shopping
          </Button>
          
          <ShareButton
            title="I just made a purchase!"
            text="I just bought some awesome products. Check out this store!"
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
