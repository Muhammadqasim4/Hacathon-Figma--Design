import Image from "next/image";
import Dining from "@/app/assests/Dinning.png";
import Living from "@/app/assests/Image-living room.png";
import Bedroom from "@/app/assests/Bedroom.png";

export default function SubHero() {
  return (
    <section className="sub-hero">
      <div className="sub-hero__text">
        <h3>Browse The Range</h3>
        <p>Discover furniture collections to transform your living spaces.</p>
      </div>
      <div className="sub-hero__gallery">
        {[
          { img: Dining, label: "Dining" },
          { img: Living, label: "Living" },
          { img: Bedroom, label: "Bedroom" },
        ].map((item, index) => (
          <div className="sub-hero__item" key={index}>
            <Image src={item.img} width={282} alt={`${item.label} area`} />
            <h6>{item.label}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}
