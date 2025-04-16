import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";

export default function Home() {
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