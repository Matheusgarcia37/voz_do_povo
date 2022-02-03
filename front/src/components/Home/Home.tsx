import React, { useState } from "react";
import { Content, ContentImagesFundo } from "./styles";
import { VscSearch } from "react-icons/vsc";
import ButtonCreate from "../ButtonCreateDenuncia/ButtonCreate";
import Lottie from "react-lottie";
import LottieHome from "../../assets/lottieHome.json";
import history from "../../history";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [token, setToken] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setToken(e.target.value);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieHome,
  };
  return (
    <Content>
      <div className="left">
        <h2>
          Crie e acompanhe <br /> suas denúncias!
        </h2>
        <ButtonCreate />
        <h3>
          Ajude-nos a identificar os problemas <br /> e deficiências da nossa
          cidade!
        </h3>
      </div>
      <div className="right">
        <div className="input">
          <input
            placeholder="Pesquise sua denuncia pelo token!"
            type="text"
            name="token"
            onChange={handleChange}
            value={token}
          ></input>
          <Link to={`/VisualizarDenuncia/${token}`}>
            <VscSearch color="white" fontSize="28px"></VscSearch>
          </Link>
        </div>
        <div className="lottie">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
      <ContentImagesFundo></ContentImagesFundo>
    </Content>
  );
};

export default Home;
