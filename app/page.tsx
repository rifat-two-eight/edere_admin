import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Menu from "@/components/landing/Menu";
import Discovery from "@/components/landing/Discovery";
import HowItWorks from "@/components/landing/HowItWorks";
import EdereFor from "@/components/landing/EdereFor";
import AreYouRestaurant from "@/components/landing/AreYouRestaurant";
import Signup from "@/components/landing/Signup";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Menu />
      <Discovery />
      <HowItWorks />
      <EdereFor />
      <AreYouRestaurant />
      <Signup />
      <Footer />
    </main>
  );
}
