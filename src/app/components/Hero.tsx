import Image from "next/image";
import HeroImage from "@/app/assests/Hero.png";

export default function Hero() {
  return (
    <section className="hero-section relative bg-[#FFF3E3]">
      <div className="hero-image-container">
        <Image
          src={HeroImage}
          alt="Hero showcasing new collection"
          layout="responsive"
          width={1440}
          height={630}
          className="object-cover w-full"
        />
      </div>
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-800 p-6 bg-white bg-opacity-90 rounded-md shadow-lg max-w-md">
        <h6 className="text-lg font-semibold text-[#B88E2F] uppercase tracking-wider mb-2">
          New Arrival
        </h6>
        <h3 className="text-3xl font-extrabold mb-4">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          dolore.
        </p>
        <button className="bg-[#B88E2F] text-white py-3 px-6 rounded hover:bg-[#a17b27] transition duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
}

