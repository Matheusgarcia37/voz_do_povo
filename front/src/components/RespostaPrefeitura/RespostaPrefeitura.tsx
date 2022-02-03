import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import {
  Container,
  Content,
  CaixaMensagem,
  HoverNomePrefeitura,
  LetraPrefeitura,
  DataHora,
} from "./styles";

type Props = {
  mensagem: string;
  author: string;
};

function RespostaPrefeitura({ author, mensagem }: Props) {
  //useStates
  const [mostraNomeCidade, setMostraNomeCidade] = useState(false);
  const [mostraDataHoraConversa, setMostraDataHoraConversa] = useState(false);

  useEffect(() => {}, []);

  const handleMouseEnter = () => {
    setMostraNomeCidade(true);
  };

  const handleMouseLeave = () => {
    setMostraNomeCidade(false);
  };

  const handleMouseEnterConversa = () => {
    setMostraDataHoraConversa(true);
  };

  const handleMouseLeaveConversa = () => {
    setMostraDataHoraConversa(false);
  };

  const mostraNomePrefeitura = () => {
    if (mostraNomeCidade === true) {
      return "hoverNomePrefeitura";
    } else {
      return "hoverNomePrefeitura2";
    }
  };

  const mostraDataHora = () => {
    if (mostraDataHoraConversa === true) {
      return "hoverDataHora";
    } else {
      return "hoverDataHora2";
    }
  };

  return (
    <Container>
      <HoverNomePrefeitura>
        <div className={mostraNomePrefeitura()}>Prefeitura de {author}</div>
      </HoverNomePrefeitura>

      <Content>
        <LetraPrefeitura
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="letraPrefeitura">{author[0]}</div>
        </LetraPrefeitura>

        <div className="alinhaMensagemDataHora">
          <CaixaMensagem
            onMouseEnter={handleMouseEnterConversa}
            onMouseLeave={handleMouseLeaveConversa}
          >
            {mensagem}
          </CaixaMensagem>

          <DataHora>
            <div className={mostraDataHora()}>05 de Junho de 2000 00:01</div>
          </DataHora>
        </div>
      </Content>
    </Container>
  );
}

export default RespostaPrefeitura;
