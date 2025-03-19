import { Button } from "@/components/ui/button";
import { useBooking } from "../contexts/BookingContext";
import { useLocation } from "wouter";
import { CheckCircle, Info } from "lucide-react";

export default function CheckInSuccess() {
  const { bookingDetails } = useBooking();
  const [, navigate] = useLocation();

  if (!bookingDetails) {
    navigate("/");
    return null;
  }

  return (
    <div className="bg-white rounded-lg p-8 elevation-1 text-center">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center">
          <CheckCircle className="text-green-600 h-10 w-10" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Check-In Complete!</h2>
      <p className="text-gray-700 mb-8">Welcome to Grand Palace Hotel. Your room is now ready.</p>
      
      <div className="mb-8 max-w-md mx-auto">
        <div className="border border-gray-200 rounded-md p-6 mb-6 bg-gray-50">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Room Number</p>
              <p className="text-2xl font-bold text-primary-dark">{bookingDetails.roomNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Room Type</p>
              <p className="font-medium">{bookingDetails.roomType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Check-Out Date</p>
              <p className="font-medium">October 18, 2023 (by 11:00 AM)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-md text-left mb-8">
        <div className="flex items-start">
          <Info className="text-blue-500 h-5 w-5 mr-2 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Important Information</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Breakfast is served from 6:30 AM to 10:30 AM at The Garden Restaurant</li>
              <li>• Wi-Fi Password: GrandPalace2023</li>
              <li>• For room service, dial 7 from your room phone</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Button 
        onClick={() => {
          navigate("/");
        }}
        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-lg font-medium transition-all"
      >
        Return to Home
      </Button>
    </div>
  );
}
