import { createContext, useContext, useState, ReactNode } from "react";

export interface BookingDetails {
  roomType: string;
  roomNumber: string;
  nightRate: string;
  bookedOn: string;
  email: string;
  phone: string;
}

export interface BillingDetails {
  roomCharges: {
    total: string;
    details: { description: string; amount: string }[];
  };
  otherServices: {
    total: string;
    details: { description: string; amount: string }[];
  };
  taxesAndFees: {
    total: string;
    details: { description: string; amount: string }[];
  };
  totalAmount: string;
}

interface BookingContextType {
  activeStep: number;
  setActiveStep: (step: number) => void;
  bookingNumber: string;
  setBookingNumber: (number: string) => void;
  bookingDetails: BookingDetails | null;
  setBookingDetails: (details: BookingDetails | null) => void;
  billingDetails: BillingDetails | null;
  setBillingDetails: (details: BillingDetails | null) => void;
  idCaptured: boolean;
  setIdCaptured: (captured: boolean) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingNumber, setBookingNumber] = useState("");
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(null);
  const [idCaptured, setIdCaptured] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        activeStep,
        setActiveStep,
        bookingNumber,
        setBookingNumber,
        bookingDetails,
        setBookingDetails,
        billingDetails,
        setBillingDetails,
        idCaptured,
        setIdCaptured,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
