import { BookingDetails, BillingDetails } from "../contexts/BookingContext";

// Mock data for sample bookings
export const mockBookingData: Record<string, BookingDetails> = {
  "B12345": {
    roomType: "Deluxe King Suite",
    roomNumber: "504",
    nightRate: "$249.00",
    bookedOn: "October 15, 2023",
    email: "guest@example.com",
    phone: "+1 555-123-4567"
  },
  "B54321": {
    roomType: "Ocean View Room",
    roomNumber: "302",
    nightRate: "$199.00",
    bookedOn: "March 10, 2025",
    email: "john.doe@example.com",
    phone: "+1 555-987-6543"
  },
  "B98765": {
    roomType: "Executive Suite",
    roomNumber: "701",
    nightRate: "$329.00",
    bookedOn: "February 28, 2025",
    email: "business@example.com",
    phone: "+1 555-456-7890"
  },
  "B24680": {
    roomType: "Family Room",
    roomNumber: "205",
    nightRate: "$279.00",
    bookedOn: "March 5, 2025",
    email: "family@example.com",
    phone: "+1 555-246-8024"
  },
  // Simple number for easy testing
  "123": {
    roomType: "Standard Room",
    roomNumber: "101",
    nightRate: "$159.00",
    bookedOn: "March 18, 2025",
    email: "test@example.com",
    phone: "+1 555-111-2222"
  }
};

// Mock billing details for the sample bookings
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
  },
  "B54321": {
    roomCharges: {
      total: "$398.00",
      details: [
        { description: "Ocean View Room (2 nights)", amount: "$398.00" }
      ]
    },
    otherServices: {
      total: "$85.00",
      details: [
        { description: "Breakfast Package", amount: "$45.00" },
        { description: "Wifi Premium", amount: "$40.00" }
      ]
    },
    taxesAndFees: {
      total: "$48.30",
      details: [
        { description: "Room Tax (10%)", amount: "$39.80" },
        { description: "Service Fee", amount: "$8.50" }
      ]
    },
    totalAmount: "$531.30"
  },
  "B98765": {
    roomCharges: {
      total: "$987.00",
      details: [
        { description: "Executive Suite (3 nights)", amount: "$987.00" }
      ]
    },
    otherServices: {
      total: "$180.00",
      details: [
        { description: "Business Center Access", amount: "$100.00" },
        { description: "Laundry Service", amount: "$80.00" }
      ]
    },
    taxesAndFees: {
      total: "$116.70",
      details: [
        { description: "Room Tax (10%)", amount: "$98.70" },
        { description: "Business Package Fee", amount: "$18.00" }
      ]
    },
    totalAmount: "$1,283.70"
  },
  "B24680": {
    roomCharges: {
      total: "$837.00",
      details: [
        { description: "Family Room (3 nights)", amount: "$837.00" }
      ]
    },
    otherServices: {
      total: "$150.00",
      details: [
        { description: "Kids Club Access", amount: "$90.00" },
        { description: "Pool Cabana Rental", amount: "$60.00" }
      ]
    },
    taxesAndFees: {
      total: "$98.70",
      details: [
        { description: "Room Tax (10%)", amount: "$83.70" },
        { description: "Family Package Fee", amount: "$15.00" }
      ]
    },
    totalAmount: "$1,085.70"
  },
  "123": {
    roomCharges: {
      total: "$318.00",
      details: [
        { description: "Standard Room (2 nights)", amount: "$318.00" }
      ]
    },
    otherServices: {
      total: "$50.00",
      details: [
        { description: "Minibar Access", amount: "$25.00" },
        { description: "Movie Package", amount: "$25.00" }
      ]
    },
    taxesAndFees: {
      total: "$36.80",
      details: [
        { description: "Room Tax (10%)", amount: "$31.80" },
        { description: "City Fee", amount: "$5.00" }
      ]
    },
    totalAmount: "$404.80"
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
