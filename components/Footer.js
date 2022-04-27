import { useContext } from "react";
import AppContext from "../AppContext";

const Footer = () => {
  const value = useContext(AppContext);
  let { watching } = value.state;
  let { setWatching } = value;

  return (
    <>
      <div
        onClick={() => (watching ? setWatching(false) : null)}
        className='info-footer'
      ></div>
    </>
  );
};

export default Footer;
