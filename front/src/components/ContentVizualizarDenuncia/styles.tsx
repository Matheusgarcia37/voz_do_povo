import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 12vh);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  h3 {
    margin: 2rem;
  }
  h5 {
    margin-bottom: 1rem;
  }

  .localConversa {
    height: 100%;
    padding: 1rem 2rem 0rem 2rem;
  }

  .caixaBorda {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #00000055;

    margin: 2rem;
    border-radius: 20px;
    height: 750px;
  }

  .dataTitulo {
    display: flex;
    justify-content: space-between;
    padding-top: 0.7rem;
    h4 {
      font-size: 1.5rem;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
    p {
      margin-right: 2rem;
      font-weight: 600;
    }
  }

  .trocaDeMensagens {
    max-height: 400px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    :target {
      scroll-margin-top: 0.8em;
    }
    ::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #ffffff; /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c5c7c7; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */ /* creates padding around scroll thumb */
    }
  }
`;
