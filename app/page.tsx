import { HouseModel } from "@/components/models/houseModel";
import Hero from "@/components/sections/Hero/page";
import SectionOne from "@/components/sections/section1/page";
import SectionTwo from "@/components/sections/section2/page";
import dynamic from "next/dynamic";
import Image from "next/image";
import sunrise from "@/public/sunrise2.jpg";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen relative flex">
      <Image
        src={sunrise}
        alt="sunrise"
        className="w-full h-full absolute top-0 left-0 object-cover opacity-70"
      />
      <Scene>
        <div className="absolute top-0 left-0 w-full h-[300dvh] overflow-hidden z-30 flex flex-col pointer-events-auto">
          <Hero />
          <SectionOne />
          <SectionTwo />
        </div>
      </Scene>
    </main>
  );
}
