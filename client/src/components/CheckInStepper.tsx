interface CheckInStepperProps {
  activeStep: number;
}

export default function CheckInStepper({ activeStep }: CheckInStepperProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between relative">
        <div className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            activeStep >= 0 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
          }`}>
            1
          </div>
          <div className="text-sm mt-2 font-medium">Booking Info</div>
        </div>
        <div className="absolute top-5 left-10 right-10 h-1 bg-gray-300">
          <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ width: activeStep >= 1 ? "100%" : "0%" }}
          />
        </div>
        <div className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            activeStep >= 1 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
          }`}>
            2
          </div>
          <div className={`text-sm mt-2 font-medium ${activeStep >= 1 ? "" : "text-gray-600"}`}>
            Billing Details
          </div>
        </div>
        <div className="absolute top-5 left-[calc(50%+10px)] right-10 h-1 bg-gray-300">
          <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ width: activeStep >= 2 ? "100%" : "0%" }}
          />
        </div>
        <div className="flex flex-col items-center relative z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            activeStep >= 2 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"
          }`}>
            3
          </div>
          <div className={`text-sm mt-2 font-medium ${activeStep >= 2 ? "" : "text-gray-600"}`}>
            ID Verification
          </div>
        </div>
      </div>
    </div>
  );
}
