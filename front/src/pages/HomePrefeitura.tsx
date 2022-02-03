import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MenuLateral from "../components/Menu/Menu";
import HomePrefeitura from "../components/HomePrefeitura/HomePrefeitura";

const LoginPrefeitura = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <MenuLateral />
        <HomePrefeitura />
      </div>

      <Footer />
    </>
  );
};

export default LoginPrefeitura;
