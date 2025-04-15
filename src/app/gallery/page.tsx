import Navbar from "@/components/Navbar";
import Image from "next/image";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const handleImageClick = (src: string) => {
    // Handle image click
  };  

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> 
    <div className="min-h-screen">
      <Navbar />  
      <main className="pt-24 max-w-8xl mx-auto pb-4">
        {/* <HeroSlider /> */}
        <PhotoGrid />
        {/* <PhotoModal src={selected} onClose={() => setSelected(null)} /> */}
      </main>
      <Footer />
    </div>
  );
}