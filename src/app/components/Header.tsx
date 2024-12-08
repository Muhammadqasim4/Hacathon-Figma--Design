import Image from "next/image";
import Logo from "@/app/assests/Logo.png";
import Link from "next/link";



export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo ">


        <Image src={Logo} width={185} height={41} alt="Picture of the author" />
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/Shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/Blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        {/* <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart /> */}

       

        </div>


      {/* </div> */}
    </>
  );
}
