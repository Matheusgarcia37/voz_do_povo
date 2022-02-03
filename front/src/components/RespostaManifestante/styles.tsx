import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;

  .positionRelativeNomeManifestante {
    position: relative;
    width: 100%;
  }
  .positionAbsolutNomeManifestante {
    display: flex;
    float: right;
    right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  .positionRelative {
    position: relative;
    width: 100%;
  }
  .positionAbsolut {
    display: flex;
    float: right;
    right: 0;
  }
  .alinhaMensagemDataHora {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* align-items: center; */
`;

export const CaixaMensagem = styled.div`
  position: relative;
  float: right;
  right: 0;
  align-self: flex-end;
  background-color: #5dcfb6;
  padding: 10px;
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-width: 900px;
  min-width: 300px;
  color: white;
  font-size: 1.08rem;
`;

export const HoverNomeManifestante = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 20px;
  display: flex;
  float: right;
  right: 0;

  .hoverNomeManifestante {
    opacity: 85%;
    display: flex;
    background-color: #c9c9c9b0;
    padding: 0 8px;
    border-radius: 20px;
    transition: all 2s;
  }
  .hoverNomeManifestante2 {
    display: none;
    background-color: #c9c9c9b0;
    padding: 0 8px;
    border-radius: 20px;
  }
`;

export const LetraManifestante = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5dcfb6;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 50px;

  margin-left: 0.8rem;

  cursor: context-menu;
`;

export const DataHora = styled.div`
  .hoverDataHora {
    display: flex;
    background-color: #c9c9c9b0;
    padding: 0 8px;
    border-radius: 5px;
    margin-right: 10px;
    transition: all 2s;
  }
  .hoverDataHora2 {
    display: none;
    background-color: #c9c9c9b0;
    padding: 0 8px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;
