import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import Subfooter from "@/components/Subfooter";
import Image from "next/image";
import Insights2 from "@/components/Insights2";
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <div className="overflow-hidden bg-gray-950">
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <OurObjective />
        <div className="bg-gray-950">
      <Banners
        img="/our-fleet-banner.jpg"
        title="Our Fleet"
        text="Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose?"
      />
      <div className="relative">
        <Insights2 isForm={false} />
      </div>
    </div>

      </div>
    </div>
  );
}
