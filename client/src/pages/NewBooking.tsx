import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { ArrowLeft, Calendar, User, Phone, Mail, Home, CreditCard } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewBooking() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roomTypes = [
    { id: "standard", name: "Standard Room", price: "$159.00" },
    { id: "deluxe", name: "Deluxe Room", price: "$199.00" },
    { id: "suite", name: "Executive Suite", price: "$329.00" },
    { id: "family", name: "Family Room", price: "$279.00" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Booking Created",
        description: "Your booking has been created successfully. Your booking number is B98765.",
      });
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg p-8 elevation-1">
      <h2 className="text-2xl font-medium mb-6">Create a New Booking</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Guest Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" />
              Guest Information
            </h3>
            
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter your first name" required />
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" required />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <Input id="phone" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5 text-gray-400" />
                <Textarea id="address" placeholder="Enter your address" className="min-h-[80px]" />
              </div>
            </div>
          </div>
          
          {/* Booking Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Booking Details
            </h3>
            
            <div>
              <Label htmlFor="checkInDate">Check-in Date</Label>
              <Input id="checkInDate" type="date" required />
            </div>
            
            <div>
              <Label htmlFor="checkOutDate">Check-out Date</Label>
              <Input id="checkOutDate" type="date" required />
            </div>
            
            <div>
              <Label htmlFor="roomType">Room Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map(room => (
                    <SelectItem key={room.id} value={room.id}>
                      {room.name} - {room.price} per night
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea 
                id="specialRequests" 
                placeholder="Any special requests or preferences?"
                className="min-h-[80px]"
              />
            </div>
          </div>
        </div>
        
        {/* Payment Information */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium flex items-center mb-4">
            <CreditCard className="mr-2 h-5 w-5 text-primary" />
            Payment Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="Enter name as shown on card" />
            </div>
            
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            
            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="XXX" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between pt-6">
          <Button 
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-primary hover:bg-gray-100"
            type="button"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <Button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : null}
            Complete Booking
          </Button>
        </div>
      </form>
    </div>
  );
}