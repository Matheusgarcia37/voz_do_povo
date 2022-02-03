import styled from "styled-components";
export const Content = styled.div`
  width: calc(100vw - 270px);
  height: calc(100vh - 12vh);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  .header {
    width: 100%;
    height: 10%;
    background-color: white;
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 550;
      color: #152b68;
      padding: 10px;
      font-size: 22px;
    }
    .filtros {
      padding-top: 0.9rem;
      font-size: 17px;
      display: flex;
      .abertos {
        label {
          padding-left: 0.1rem;
        }
        padding-right: 1rem;
      }
      .andamento {
        label {
          padding-left: 0.1rem;
        }
        padding-right: 1rem;
      }
      .finalizadas {
        label {
          padding-left: 0.1rem;
        }
        padding-right: 1rem;
      }
    }
  }

  .denuncias {
    width: 97%;
    height: 100%;
    padding-left: 1rem;

    .ContentDenuncias {
      width: 100%;
      height: 98%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      max-height: 98%;
      overflow-y: auto;
      scroll-behavior: smooth;
      :target {
        scroll-margin-top: 0.8em;
      }
      ::-webkit-scrollbar {
        width: 12px; /* width of the entire scrollbar */
      }

      ::-webkit-scrollbar-track {
        background: #ffffff; /* color of the tracking area */
      }

      ::-webkit-scrollbar-thumb {
        background-color: #c5c7c7; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */ /* creates padding around scroll thumb */
      }
      Link {
        width: 100%;
        height: 98%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        max-height: 98%;
        overflow-y: auto;
        scroll-behavior: smooth;
        :target {
          scroll-margin-top: 0.8em;
        }
        ::-webkit-scrollbar {
          width: 12px; /* width of the entire scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: #ffffff; /* color of the tracking area */
        }

        ::-webkit-scrollbar-thumb {
          background-color: #c5c7c7; /* color of the scroll thumb */
          border-radius: 20px; /* roundness of the scroll thumb */ /* creates padding around scroll thumb */
        }
      }
    }
  }
  .titulos {
    width: 100%;
    color: #152b68;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-left: 10%;
    span {
      width: 33.3%;
    }
    .nome {
      padding-left: 1.5%;
    }
    .data {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      right: 0;
      margin-right: 125px;
      @media (min-width: 3700px) {
        margin-right: 160px;
      }
    }
  }
`;
