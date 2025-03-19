import { Hotel } from "lucide-react";

export default function AppHeader() {
  return (
    <div className="bg-primary text-white py-4 px-6 flex justify-between items-center elevation-4">
      <div className="flex items-center space-x-4">
        <Hotel className="h-8 w-8" />
        <h1 className="text-2xl font-medium">HMS Hotel</h1>
      </div>
      <div className="text-lg">
        Welcome
      </div>
    </div>
  );
}
