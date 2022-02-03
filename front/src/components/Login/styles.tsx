import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/global";
const { main } = theme.cores;

export const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 12vh);
  background-color: ${main};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    156.18deg,
    rgba(170, 235, 255, 0.49) 29.03%,
    rgba(241, 252, 255, 0.887947) 56.86%,
    #ffffff 68.17%,
    #ffffff 71.64%,
    #ffffff 81.9%
  );
`;

export const CaixaLogin = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  box-shadow: 5px 5px 20px black;

  background-color: white;
`;

export const CaixaLottie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  border-right: 1px solid #0000003e;
`;

export const LoginInputs = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3rem;
  .imagem {
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: center;
    img {
      height: 60%;
    }
  }
  .bemvindo {
    h3 {
      font-size: 25px;
      color: #3db1cb;
      padding-bottom: 2rem;
    }
    p {
      font-size: 15px;
      color: #555555;
      padding-bottom: 1rem;
    }
  }
  form {
    display: flex;
    justify-content: flex-start;

    flex-direction: column;

    .label-float {
      position: relative;
      padding-top: 13px;
    }

    .label-float input {
      border: 0;
      border-bottom: 1px solid lightgrey;
      outline: none;
      min-width: 30vw;
      font-size: 18px;
      padding: 3px 0 3px 7px;
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -webkit-appearance: none;
      border-radius: 0;
    }

    .label-float input:focus {
      border-bottom: 1px solid #3db1cb;
    }

    .label-float input::placeholder {
      color: transparent;
    }

    .label-float label {
      pointer-events: none;
      position: absolute;
      font-size: 16px;
      color: #00000071;
      top: 0;
      left: 0;
      margin-top: 20px;
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
    }

    .label-float input:required:invalid + label {
      color: #00000065;
    }
    .label-float input:focus:required:invalid {
      border-bottom: 1px solid red;
    }
    .label-float input:required:invalid + label:before {
      content: "*";
    }
    .label-float input:focus + label,
    .label-float input:not(:placeholder-shown) + label {
      font-size: 13px;
      margin-top: 0;
      color: #00000065;
      font-weight: bold;
    }

    .buttonEnviarLogin {
      width: 190px;
      height: 40px;
      border-radius: 10px;
      border: none;
      background-color: #3db1cb;
      color: white;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s all ease;
      cursor: pointer;
      :hover {
        background-color: #2a92aa;
        padding-left: 0.6rem;
      }
      .icon {
        padding-top: 4px;
        padding-right: 0.3rem;
      }
    }

    .labelButton {
      position: absolute;
      margin-top: -20rem;
    }
  }
`;
