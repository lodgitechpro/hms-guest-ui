import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useBooking } from "../contexts/BookingContext";
import { ArrowLeft, Camera, CheckCircle, Info } from "lucide-react";
import { useLocation } from "wouter";
import Webcam from "react-webcam";

export default function IDVerification() {
  const [cameraState, setCameraState] = useState<"initial" | "active" | "completed">("initial");
  const { setIdCaptured } = useBooking();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      setCameraState("active");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Camera Error",
        description: "Could not access camera. Please check permissions.",
      });
    }
  };

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      setCameraState("completed");
      setIdCaptured(true);
    }
  }, [webcamRef, setIdCaptured]);

  const retakePhoto = () => {
    setImageSrc(null);
    setCameraState("active");
    setIdCaptured(false);
  };

  const handleCompleteCheckIn = () => {
    navigate("/check-in-success");
  };

  const { setActiveStep } = useBooking();

  return (
    <div className="bg-white rounded-lg p-8 elevation-1">
      <h2 className="text-2xl font-medium mb-6">ID Verification</h2>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">Please scan your government-issued photo ID using the tablet's camera. This information is required for verification purposes.</p>
        <div className="p-4 bg-gray-100 rounded-md mb-6">
          <div className="flex items-start">
            <Info className="text-blue-500 mr-2 h-5 w-5" />
            <p className="text-sm text-gray-700">Acceptable IDs include: passport, driver's license, or national ID card. Please ensure the entire document is visible and text is readable.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        {cameraState === "initial" && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <h3 className="text-lg font-medium mb-2">Camera Access Required</h3>
            <p className="text-gray-600 mb-4">We need permission to use your camera for ID verification</p>
            <Button 
              onClick={startCamera}
              className="bg-primary hover:bg-primary-dark"
            >
              Start Camera
            </Button>
          </div>
        )}
        
        {cameraState === "active" && (
          <div className="relative">
            <div className="bg-black w-full h-64 md:h-96 rounded-lg overflow-hidden flex items-center justify-center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  width: 720,
                  height: 480,
                  facingMode: "user"
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-lg border-2 border-primary w-4/5 h-4/5 flex items-center justify-center">
                  <p className="text-white text-center px-4 bg-black bg-opacity-50 py-2 rounded">Position your ID within this frame</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button 
                onClick={captureImage}
                className="bg-white hover:bg-gray-100 text-gray-900 rounded-full w-14 h-14 flex items-center justify-center shadow-lg p-0"
              >
                <Camera className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
        
        {cameraState === "completed" && (
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
              <h3 className="text-lg font-medium">ID Successfully Scanned</h3>
            </div>
            {imageSrc && (
              <div className="mb-4">
                <img 
                  src={imageSrc} 
                  alt="Captured ID" 
                  className="w-full max-h-48 object-contain rounded border"
                />
              </div>
            )}
            <p className="text-gray-700 mb-4">We've captured an image of your ID. You can retake the photo if needed.</p>
            <div className="flex space-x-4">
              <Button 
                onClick={retakePhoto}
                variant="outline"
                className="text-primary hover:bg-gray-100"
              >
                Retake Photo
              </Button>
              <Button 
                onClick={() => {
                  toast({
                    title: "ID Accepted",
                    description: "Your ID has been successfully verified.",
                  });
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Accept
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button 
          onClick={() => setActiveStep(1)}
          variant="ghost"
          className="text-primary hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {cameraState === "completed" && (
          <Button 
            onClick={handleCompleteCheckIn}
            className="bg-primary hover:bg-primary-dark"
          >
            Complete Check-In
          </Button>
        )}
      </div>
    </div>
  );
}
