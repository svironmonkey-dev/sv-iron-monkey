import {
  Wifi,
  UtensilsCrossed,
  Wine,
  Waves,
  Music,
  Sun,
  Bed,
  ShowerHead,
  Coffee,
} from "lucide-react";
import bath1 from "@/assets/rooms/bath1.png";
import bath2 from "@/assets/rooms/bath2.png";
import bath3 from "@/assets/rooms/bath3.png";
import bed1 from "@/assets/rooms/bed1.png";
import bed2 from "@/assets/rooms/bed2.png";
import bed3 from "@/assets/rooms/bed3.png";
import dn1 from "@/assets/dinner/dn1.png";
import dn2 from "@/assets/dinner/dn2.png";
import dn3 from "@/assets/dinner/dn3.png";
import dn4 from "@/assets/dinner/dn4.png";
import bf1 from "@/assets/breakfast/bf1.png";
import bf2 from "@/assets/breakfast/bf2.png";
import bf3 from "@/assets/breakfast/bf3.png";
import bf4 from "@/assets/breakfast/bf4.png";
import out1 from "@/assets/out/out1.png";
import out2 from "@/assets/out/out2.png";
import out3 from "@/assets/out/out3.png";
import out4 from "@/assets/out/out4.png";
import out5 from "@/assets/out/out5.png";
import toy1 from "@/assets/toys/toy1.png";
import toys2 from "@/assets/toys/toys2.png";
import toys3 from "@/assets/toys/toys3.png";

export interface Facility {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  detailedDescription: string;
  images: string[];
  clickable: boolean;
}

export const facilities: Facility[] = [
  { 
    id: "luxury-cabins",
    icon: Bed, 
    label: "Luxury Cabins", 
    description: "Comfortable sleeping quarters",
    detailedDescription: "Our luxury cabins feature plush bedding, elegant furnishings, and panoramic windows. Each cabin is designed for ultimate comfort with climate control and premium amenities.",
    images: [bed1, bed2, bed3, bath1, bath2, bath3],
    clickable: true
  },
  { 
    id: "gourmet-dining",
    icon: Wine, 
    label: "Gourmet Dining", 
    description: "Fresh cuisine prepared onboard",
    detailedDescription: "Experience fine dining at sea with our expert chefs preparing fresh, locally-sourced ingredients. Our dining area offers stunning ocean views and can accommodate special dietary requirements.",
    images: [dn1, dn2, dn3, dn4],
    clickable: true
  },
  { 
    id: "breakfast-lunch",
    icon: Coffee, 
    label: "Breakfast & Lunch", 
    description: "Morning and midday delights",
    detailedDescription: "Start your day with a delicious breakfast and enjoy freshly prepared lunch options. From continental favorites to local specialties, we cater to all tastes.",
    images: [bf1, bf2, bf3, bf4],
    clickable: true
  },
  { 
    id: "sun-deck",
    icon: Sun, 
    label: "Sun Deck", 
    description: "Spacious lounging areas",
    detailedDescription: "The expansive sun deck offers multiple lounging areas, comfortable seating, and unobstructed views of the azure waters. Perfect for sunbathing or sunset watching.",
    images: [out1, out2, out3, out4, out5],
    clickable: true
  },
  { 
    id: "water-toys",
    icon: Waves, 
    label: "Water Toys", 
    description: "Snorkeling & swimming gear",
    detailedDescription: "Explore the underwater world with our comprehensive collection of water sports equipment including snorkeling gear, paddleboards, kayaks, and swimming accessories.",
    images: [toy1, toys2, toys3],
    clickable: true
  },
  { 
    id: "sound-system",
    icon: Music, 
    label: "Sound System", 
    description: "Premium audio throughout",
    detailedDescription: "State-of-the-art audio system with speakers strategically placed throughout the yacht.",
    images: [],
    clickable: false
  },
  { 
    id: "fresh-water",
    icon: ShowerHead, 
    label: "Fresh Water", 
    description: "Hot showers available",
    detailedDescription: "Modern bathroom facilities with hot water showers, luxury toiletries, and fresh towels.",
    images: [],
    clickable: false
  },
  { 
    id: "connectivity",
    icon: Wifi, 
    label: "Connectivity", 
    description: "WiFi on request",
    detailedDescription: "Stay connected with our high-speed internet service.",
    images: [],
    clickable: false
  },
];
