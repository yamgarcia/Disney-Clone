import "../styles/globals.css";
import AppContext from "../AppContext";
import { useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [watching, setWatching] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state: {
          watching: watching,
        },
        setWatching: setWatching,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
