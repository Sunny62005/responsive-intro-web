
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import ShareButton from "@/components/ShareButton";
import { ArrowLeft } from "lucide-react";

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCartStore();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    upiId: ""
  });
  
  const [step, setStep] = useState(1);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  
  const validateStep2 = () => {
    if (!formData.address || !formData.city || !formData.state || !formData.zipCode) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  
  const validateStep3 = () => {
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvv) {
        toast({
          title: "Missing payment information",
          description: "Please fill in all card details",
          variant: "destructive"
        });
        return false;
      }
    } else if (formData.paymentMethod === "upi") {
      if (!formData.upiId) {
        toast({
          title: "Missing payment information",
          description: "Please enter your UPI ID",
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };
  
  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep3()) {
      // Process order
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase!"
      });
      
      // Clear cart and redirect to confirmation
      clearCart();
      navigate("/shop/confirmation", { 
        state: { 
          orderDetails: {
            items,
            total,
            shippingAddress: {
              name: formData.fullName,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              zipCode: formData.zipCode
            },
            paymentMethod: formData.paymentMethod
          }
        }
      });
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Your cart is empty</CardTitle>
            <CardDescription>Add some items to your cart before checkout</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => navigate("/shop")}>Return to Shop</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={() => navigate("/shop")} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Button>
        <ShareButton 
          title="Check out this amazing store!"
          text="I'm shopping at this great online store. Check it out!" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Checkout</CardTitle>
              <CardDescription>Complete your purchase</CardDescription>
              
              <div className="mt-4 flex justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1</div>
                  <span className="text-xs mt-1">Personal</span>
                </div>
                <div className="flex-1 border-t mt-4 mx-2"></div>
                <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2</div>
                  <span className="text-xs mt-1">Shipping</span>
                </div>
                <div className="flex-1 border-t mt-4 mx-2"></div>
                <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>3</div>
                  <span className="text-xs mt-1">Payment</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name*</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder="John Doe"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address*</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="john@example.com"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="91XXXXXXXXXX"
                        required 
                      />
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address*</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange}
                        placeholder="123 Main St"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="city">City*</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="state">State*</Label>
                        <Select 
                          value={formData.state} 
                          onValueChange={(value) => handleSelectChange("state", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode">Postal Code*</Label>
                        <Input 
                          id="zipCode" 
                          name="zipCode" 
                          value={formData.zipCode} 
                          onChange={handleInputChange}
                          placeholder="400001"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label>Payment Method*</Label>
                      <RadioGroup 
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent mt-2">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI Payment</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-accent mt-2">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {formData.paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number*</Label>
                          <Input 
                            id="cardNumber" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">Expiration Date*</Label>
                            <Input 
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="cardCvv">CVV*</Label>
                            <Input 
                              id="cardCvv"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formData.paymentMethod === "upi" && (
                      <div>
                        <Label htmlFor="upiId">UPI ID*</Label>
                        <Input 
                          id="upiId"
                          name="upiId"
                          value={formData.upiId}
                          onChange={handleInputChange}
                          placeholder="name@bank"
                        />
                      </div>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePreviousStep}
                >
                  Back
                </Button>
              )}
              
              {step < 3 ? (
                <Button 
                  type="button" 
                  className="ml-auto"
                  onClick={handleNextStep}
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  type="submit"
                  className="ml-auto"
                  onClick={handleSubmit}
                >
                  Place Order
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p>{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <span>Shipping</span>
                    <span>{total > 10000 ? "Free" : formatPrice(499)}</span>
                  </div>
                  
                  <div className="flex justify-between mt-2 font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total > 10000 ? total : total + 499)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
