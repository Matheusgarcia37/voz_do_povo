import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { Content, CaixaLogin, CaixaLottie, LoginInputs } from "./styles";

import vozdopovo from "../../assets/vozdopovo.png";

import Lottie from "react-lottie";
import LottieLogin from "../../assets/lottieLogin.json";

/* Importando icones */
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

const Login: React.FC = () => {
  const { handleLogin } = useContext(Context);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLogin,
  };

  const [dataLogin, setDataLogin] = useState({ login: "", senha: "" } as any);

  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const newDataLogin = { ...dataLogin };

    newDataLogin[name] = value;

    setDataLogin(newDataLogin);
  }

  return (
    <>
      <Content>
        <CaixaLogin>
          <CaixaLottie>
            <Lottie options={defaultOptions} height={600} width={600} />
          </CaixaLottie>
          <LoginInputs>
            <div className="imagem">
              <img src={vozdopovo} alt="" />
            </div>
            <div className="bemvindo">
              <h3>Seja bem-vindo(a)!</h3>
              <p>Informe seus dados abaixo para acessar sua conta</p>
            </div>
            <form>
              <div className="label-float">
                <input
                  name="login"
                  type="email"
                  placeholder=" "
                  onChange={changeHandle}
                  value={dataLogin.login}
                />
                <label>E-mail</label>
              </div>
              <br />
              <div className="label-float">
                <input
                  name="senha"
                  type="password"
                  placeholder=" "
                  onChange={changeHandle}
                  value={dataLogin.senha}
                />
                <label>Senha</label>
              </div>
              <br />
              <button
                className="buttonEnviarLogin"
                onClick={(e) => handleLogin(e, dataLogin)}
              >
                <div className="icon">
                  <FaRegArrowAltCircleRight />
                </div>
                Entrar
              </button>
            </form>
          </LoginInputs>
        </CaixaLogin>
      </Content>
    </>
  );
};

export default Login;
