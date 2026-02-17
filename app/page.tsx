import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Menu from "@/components/landing/Menu";
import Discovery from "@/components/landing/Discovery";
import HowItWorks from "@/components/landing/HowItWorks";
import EdereFor from "@/components/landing/EdereFor";
import AreYouRestaurant from "@/components/landing/AreYouRestaurant";
import SignupFooter from "@/components/landing/SignupFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Menu />
      <Discovery />
      <HowItWorks />
      <EdereFor />
      <AreYouRestaurant />
      <SignupFooter />
    </main>
  );
}
