import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import ContentVizualizarDenuncia from "../components/ContentVizualizarDenuncia/ContentVizualizarDenuncia";
import { useParams } from "react-router-dom";
import { Context } from "../context/AuthContext";

type paramsProps = {
  token: string;
};

const VizualizarDenuncia = () => {
  const { token } = useParams<paramsProps>();
  const { authenticated } = useContext(Context);

  return (
    <>
      <Header />
      <div className="flex" style={{ display: "flex" }}>
        {authenticated === true && <Menu />}

        <ContentVizualizarDenuncia token={token} />
      </div>

      <Footer />
    </>
  );
};

export default VizualizarDenuncia;
