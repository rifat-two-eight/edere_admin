import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex mt-20 justify-center pt-24 bg-[#f6f2ee]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-black">
          Find restaurants you can <br />  actually eat at <Image className="inline-block" src="/spoon.svg" alt="Spoon" width={100} height={100} />
        </h1>
        <p className="text-xl text-zinc-800 mb-8 max-w-2xl mx-auto">
          The ultimate restaurant discovery app for food allergies, dietary restrictions & preferences... all before you step through the doors.
        </p>
        <button className="px-8 py-3 mr-4 bg-[#055E2C] text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Download App
        </button>
        <button className="px-8 py-3 bg-[#2D2A26] text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Join Us
        </button>
      </div>
    </section>
  );
}
