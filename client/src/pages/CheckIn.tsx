import { useBooking } from "../contexts/BookingContext";
import CheckInStepper from "../components/CheckInStepper";
import BookingInfoForm from "../components/BookingInfoForm";
import BillingDetails from "../components/BillingDetails";
import IDVerification from "../components/IDVerification";

export default function CheckIn() {
  const { activeStep } = useBooking();

  return (
    <>
      <CheckInStepper activeStep={activeStep} />
      
      {activeStep === 0 && <BookingInfoForm />}
      {activeStep === 1 && <BillingDetails />}
      {activeStep === 2 && <IDVerification />}
    </>
  );
}
