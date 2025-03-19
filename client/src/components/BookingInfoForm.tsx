import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useBooking } from "../contexts/BookingContext";
import { verifyBooking, getBillingDetails } from "../lib/mockData";
import { ArrowLeft, Search } from "lucide-react";
import { useLocation } from "wouter";

export default function BookingInfoForm() {
  const [bookingNumberInput, setBookingNumberInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const [, navigate] = useLocation();
  
  const { 
    setBookingNumber, 
    setBookingDetails, 
    setBillingDetails,
    setActiveStep
  } = useBooking();

  const handleLookupBooking = () => {
    if (!bookingNumberInput.trim()) {
      setError("Please enter a booking number");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call with a timeout
    setTimeout(() => {
      const bookingData = verifyBooking(bookingNumberInput);
      
      if (bookingData) {
        setBookingNumber(bookingNumberInput);
        setBookingDetails(bookingData);
        setBillingDetails(getBillingDetails(bookingNumberInput));
        setError("");
        toast({
          title: "Booking found",
          description: "Your booking details have been loaded successfully.",
        });
      } else {
        setError("Invalid booking number. Please try again.");
        toast({
          variant: "destructive",
          title: "Error",
          description: "We couldn't find a booking with that number.",
        });
      }
      
      setIsLoading(false);
    }, 600);
  };

  const handleNext = () => {
    setActiveStep(1);
  };

  const { bookingDetails } = useBooking();

  return (
    <div className="bg-white rounded-lg p-8 elevation-1">
      <h2 className="text-2xl font-medium mb-6">Enter Your Booking Information</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-number">
          Booking Number
        </label>
        <div className="flex">
          <Input 
            id="booking-number" 
            value={bookingNumberInput}
            onChange={(e) => setBookingNumberInput(e.target.value)}
            placeholder="Enter your booking number"
            className="appearance-none"
          />
          <Button 
            onClick={handleLookupBooking}
            className="ml-2 bg-primary hover:bg-primary-dark"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      
      {bookingDetails && (
        <div className="border border-gray-200 rounded-md p-6 mb-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Room Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Room Type</p>
                  <p className="font-medium">{bookingDetails.roomType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Room Number</p>
                  <p className="font-medium">{bookingDetails.roomNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Night Rate</p>
                  <p className="font-medium">{bookingDetails.nightRate}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Guest Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Booked On</p>
                  <p className="font-medium">{bookingDetails.bookedOn}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{bookingDetails.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{bookingDetails.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-between">
        <Button 
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-primary hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        {bookingDetails && (
          <Button 
            onClick={handleNext}
            className="bg-primary hover:bg-primary-dark"
          >
            Next: Billing Details
          </Button>
        )}
      </div>
    </div>
  );
}
