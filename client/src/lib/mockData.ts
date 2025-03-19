import { BookingDetails, BillingDetails } from "../contexts/BookingContext";

// Mock data for a sample booking
export const mockBookingData: Record<string, BookingDetails> = {
  "B12345": {
    roomType: "Deluxe King Suite",
    roomNumber: "504",
    nightRate: "$249.00",
    bookedOn: "October 15, 2023",
    email: "guest@example.com",
    phone: "+1 555-123-4567"
  }
};

// Mock billing details for the sample booking
export const mockBillingData: Record<string, BillingDetails> = {
  "B12345": {
    roomCharges: {
      total: "$747.00",
      details: [
        { description: "Deluxe King Suite (3 nights)", amount: "$747.00" }
      ]
    },
    otherServices: {
      total: "$125.00",
      details: [
        { description: "Airport Transfer", amount: "$75.00" },
        { description: "Spa Credit", amount: "$50.00" }
      ]
    },
    taxesAndFees: {
      total: "$87.20",
      details: [
        { description: "Room Tax (10%)", amount: "$74.70" },
        { description: "Resort Fee", amount: "$12.50" }
      ]
    },
    totalAmount: "$959.20"
  }
};

// Function to verify booking number
export function verifyBooking(bookingNumber: string): BookingDetails | null {
  return mockBookingData[bookingNumber] || null;
}

// Function to get billing details
export function getBillingDetails(bookingNumber: string): BillingDetails | null {
  return mockBillingData[bookingNumber] || null;
}
