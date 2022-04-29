import Link from "next/Link";
import Image from "next/Image";
import logo from "../public/Disney-Logo.png";

const NavBar = ({ account }) => {
  return (
    <>
      <div className='navbar'>
        <div className='disney-logo'>
          <Link href='/'>
            <Image src={logo} alt='Disney-Logo' />
          </Link>
        </div>
        <div className='account-info'>
          <p>{`Welcome ${account.username}`}</p>
          <img
            className='avatar'
            src={account.avatar.url}
            alt={`${account.username}_picture`}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
