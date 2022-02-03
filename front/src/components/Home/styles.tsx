import styled from "styled-components";
import Predios from "../../assets/predios.png";
export const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 12vh);
  position: relative;
  display: flex;
  background: linear-gradient(
    156.18deg,
    rgba(170, 235, 255, 0.49) 29.03%,
    rgba(241, 252, 255, 0.887947) 56.86%,
    #ffffff 68.17%,
    #ffffff 71.64%,
    #ffffff 81.9%
  );
  .left {
    flex: 0.5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 6rem;

    h2 {
      width: 100%;
      font-size: 50px;
      color: #44677b;
      font-family: "ABeeZee", sans-serif;
      font-weight: 400;
      margin-bottom: 40px;
    }
    h3 {
      font-weight: 400;
      width: 100%;
      font-size: 28px;
      color: #31745b;
       margin-top: 40px;
    }
  }
  .right {
    flex: 0.7;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .lottie {
      margin-top: 5rem;
    }
    .input {
      width: 40%;
      height: 3rem;
      position: relative;
      right: 0;
      margin-top: 2.5rem;
      margin-right: -20rem;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 20px;
      font-size: 14px;
      padding-left: 2%;
      transition: 0.5s all ease;
      ::-webkit-input-placeholder {
        color: black; /*Change the placeholder color*/
        opacity: 0.2; /*Change the opacity between 0 and 1*/
      }
      :focus {
        outline: none;
        background-color: #bce5ff;

        ::-webkit-input-placeholder {
          opacity: 0.6;
        }
      }
    }
    a {
      width: 4rem;
      height: 100%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      right: 0;
      top: 0;
      position: absolute;
      border: none;
      background: #3db1cb;
      padding-top: 4px;
      transition: 0.3s all ease;
      :hover {
        background-color: #2a92aa;
        padding-left: 0.3rem;
      }
    }
  }
`;
export const ContentImagesFundo = styled.div`
  height: 15vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background: url(${Predios});
  background-repeat: repeat-x;
`;
