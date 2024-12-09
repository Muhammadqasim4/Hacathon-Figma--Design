import Image from "next/image";
import InnerPeace from "@/app/assests/inner.png";
import SideInner from "@/app/assests/Sideinner.png";

export default function RoomInspiration() {
  return (
    <section className="room-inspiration bg-[#FCF8F3] p-6">
      <div className="text-section pt-9">
        <h4 className="font-extrabold text-2xl mb-4">50+ Beautiful Rooms Inspiration</h4>
        <p className="text-gray-700 mb-6">
          Our designers have already created many beautiful prototypes of rooms to inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a17b27]">
          Explore More
        </button>
      </div>

      <div className="image-section flex gap-6 mt-8">
        <Image src={InnerPeace} width={250} alt="Inner peace room inspiration" />
        <Image src={SideInner} width={250} alt="Side inner room inspiration" />
      </div>
    </section>
  );
}
