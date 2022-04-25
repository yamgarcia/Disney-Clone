import Link from "next/Link";
import Image from "next/Image";
import logo from "../public/Disney-Logo.png";

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <Link href="/">
          <Image src={logo} alt='Disney-Logo'/>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
