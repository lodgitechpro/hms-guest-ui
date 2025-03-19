import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useBooking } from "../contexts/BookingContext";
import MarketingCard from "../components/MarketingCard";
import { LogIn, PlusCircle } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();
  const { setActiveStep } = useBooking();

  const handleCheckInClick = () => {
    setActiveStep(0);
    navigate("/check-in");
  };
  
  const handleNewBookingClick = () => {
    setActiveStep(0);
    navigate("/new-booking");
  };

  return (
    <>
      <div className="bg-white rounded-lg p-8 mb-8 elevation-1">
        <h2 className="text-3xl font-bold text-primary-dark mb-4">Welcome to HMS Hotel</h2>
        <p className="text-gray-700 text-lg mb-6">Experience a seamless stay with our self-service tablet. Check in, book a room, or explore our services - all at your fingertips.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-primary hover:bg-primary-dark text-white px-6 py-6 rounded-md text-lg font-medium transition-all flex items-center justify-center h-auto"
            onClick={handleCheckInClick}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Check In
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-md text-lg font-medium transition-all flex items-center justify-center h-auto"
            onClick={handleNewBookingClick}
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            New Booking
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MarketingCard
          title="Special Offers"
          description="Exclusive deals for our guests. Book directly for best rates guaranteed."
          imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800&h=400"
          ctaText="View Offers"
        />
        
        <MarketingCard
          title="Luxury Amenities"
          description="Spa, fitness center, and swimming pool available for all guests."
          imageUrl="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800&h=400"
          ctaText="Explore Amenities"
        />
        
        <MarketingCard
          title="Fine Dining"
          description="Award-winning restaurants and 24-hour room service available."
          imageUrl="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800&h=400"
          ctaText="View Restaurants"
        />
      </div>
    </>
  );
}
