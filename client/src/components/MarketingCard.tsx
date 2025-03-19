import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface MarketingCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

export default function MarketingCard({ title, description, imageUrl, ctaText }: MarketingCardProps) {
  return (
    <Card className="overflow-hidden h-full elevation-1 hover:elevation-2 transition-all duration-300">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className="text-primary-main font-medium p-0 flex items-center">
          {ctaText}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
