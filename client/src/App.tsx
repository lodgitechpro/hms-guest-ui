import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import CheckIn from "./pages/CheckIn";
import CheckInSuccess from "./pages/CheckInSuccess";
import NewBooking from "./pages/NewBooking";
import AppHeader from "./components/AppHeader";
import { BookingProvider } from "./contexts/BookingContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/check-in" component={CheckIn} />
      <Route path="/check-in-success" component={CheckInSuccess} />
      <Route path="/new-booking" component={NewBooking} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-50">
        <AppHeader />
        <main className="p-6 max-w-6xl mx-auto">
          <Router />
        </main>
        <Toaster />
      </div>
    </BookingProvider>
  );
}

export default App;
