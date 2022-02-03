import styled from "styled-components";
import Predios from "../../assets/predios.png";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 12vh);
  background: linear-gradient(
    156.18deg,
    rgba(170, 235, 255, 0.49) 29.03%,
    rgba(241, 252, 255, 0.887947) 56.86%,
    #ffffff 68.17%,
    #ffffff 71.64%,
    #ffffff 81.9%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  .buttons {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .box {
    margin: 0 auto;
    box-sizing: content-box;
    width: 35rem;
  }
`;

export const FormContent = styled.div`
  display: flex;
  width: 35rem;
  height: 100%;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  opacity: 1;
  margin-left: 0;
  position: relative;
  transition: 0.5s all ease;
  p {
    font-size: 22px;
    color: #2d9ab3;
    margin-bottom: -8px;
  }

  .buttonEviarForm {
    width: 60%;
    height: 40px;
    border-radius: 10px;
    margin-top: .4rem;
    background: #3db1cb;
    color: #fff;
    border: none;
    position: relative;
    font-size: 1.6em;
    padding: 0 2em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    :hover {
      background: #1aab8a;
      color: white;
      transform: scale(1.03);
      border: 2px solid #1aab8a;
      :after {
        width: 100%;
        transition: 800ms ease all;
      }
      :before {
        width: 100%;
        transition: 800ms ease all;
      }
    }
    :before,
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 2px;
      width: 0;
      background: #1aab8a;
      transition: 400ms ease all;
    }
    :after {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: 0;
    }
  }
`;

export const Cidadao = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label-float {
    position: relative;
    padding-top: 9px;
  }

  .label-float input {
    height: 35px;
    border-radius: 7px;
    border: 0;
    border-bottom: 1px solid lightgrey;
    outline: none;
    font-size: 18px;
    padding: 3px 0 3px 7px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
  }

  .label-float input:focus {
    border-bottom: 1px solid #3db1cb;
  }

  .label-float input::placeholder {
    color: transparent;
  }

  .label-float label {
    padding-left: 5px;
    pointer-events: none;
    position: absolute;
    font-size: 19px;
    color: #00000075;
    top: 0;
    left: 0;
    margin-top: 24px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  .label-float input:required:invalid + label {
    color: #00000075;
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
    color: #00000075;
    font-weight: bold;
  }
`;

export const Manifestacao = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-bottom: 5rem;
  .caixaInputFile {
    width: 100%;
  }
  .Arquivo {
    justify-content: center;
    display: flex;
    background-color:#369cb3;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    padding: 6px 20px;
    cursor: pointer;
    transition: all .5s;
    :hover {
      background-color: #50b9d0;
    }

    #IconUpload {
      margin-right: 15px;
    }
  }
  .label-float {
    width: 100%;
    position: relative;
    padding-top: 9px;
  }

  .label-float input {
    height: 35px;
    border-radius: 7px;
    border: 0;
    border-bottom: 1px solid lightgrey;
    outline: none;
    font-size: 18px;
    padding: 3px 0 3px 7px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
  }

  .label-float input:focus {
    border-bottom: 1px solid #3db1cb;
  }

  .label-float input::placeholder {
    color: transparent;
  }

  .label-float label {
    padding-left: 5px;
    pointer-events: none;
    position: absolute;
    font-size: 19px;
    color: #00000075;
    top: 0;
    left: 0;
    margin-top: 24px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  .label-float input:required:invalid + label {
    color: #00000075;
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
    color: #00000075;
    font-weight: bold;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  word-wrap: wrap;
  border: none;
  border-radius: 4px;
  background-color: white;
  border-bottom: 1px solid #c9c9c9;
  font-size: 18px;
  padding: 10px;
  ::-webkit-input-placeholder {
    color: black; /*Change the placeholder color*/
    opacity: 0.5; /*Change the opacity between 0 and 1*/
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #3eb1cd;
  }
`;
export const ContentImagesFundo = styled.div`
  z-index: 1;
  height: 15vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background: url(${Predios});
  background-repeat: repeat-x;
`;
