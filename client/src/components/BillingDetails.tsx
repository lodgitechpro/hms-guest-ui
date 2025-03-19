import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useBooking } from "../contexts/BookingContext";

export default function BillingDetails() {
  const { setActiveStep, billingDetails } = useBooking();

  if (!billingDetails) return null;

  return (
    <div className="bg-white rounded-lg p-8 elevation-1">
      <h2 className="text-2xl font-medium mb-6">Billing Details</h2>
      
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Room Charges</h3>
          <p className="text-lg font-medium">{billingDetails.roomCharges.total}</p>
        </div>
        <div className="space-y-2 pl-4">
          {billingDetails.roomCharges.details.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Other Services</h3>
          <p className="text-lg font-medium">{billingDetails.otherServices.total}</p>
        </div>
        <div className="space-y-2 pl-4">
          {billingDetails.otherServices.details.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Taxes & Fees</h3>
          <p className="text-lg font-medium">{billingDetails.taxesAndFees.total}</p>
        </div>
        <div className="space-y-2 pl-4">
          {billingDetails.taxesAndFees.details.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-8 text-xl font-bold">
        <h3>Total Amount</h3>
        <p>{billingDetails.totalAmount}</p>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-md mb-8">
        <div className="flex items-start">
          <div className="text-blue-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p className="text-sm text-gray-700">Your credit card on file will be charged upon check-out. A pre-authorization hold for the full amount has been placed on your card.</p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button 
          onClick={() => setActiveStep(0)}
          variant="ghost"
          className="text-primary hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button 
          onClick={() => setActiveStep(2)}
          className="bg-primary hover:bg-primary-dark"
        >
          Next: ID Verification
        </Button>
      </div>
    </div>
  );
}
