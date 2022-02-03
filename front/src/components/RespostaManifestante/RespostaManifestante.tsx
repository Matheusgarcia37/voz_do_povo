import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  CaixaMensagem,
  HoverNomeManifestante,
  LetraManifestante,
  DataHora,
} from "./styles";

type Props = {
  mensagem: string;
  author?: string;
};

function RespostaManifestante({ author, mensagem }: Props) {
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

  const mostraNomeManifestante = () => {
    if (mostraNomeCidade === true) {
      return "hoverNomeManifestante";
    } else {
      return "hoverNomeManifestante2";
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
      <div className="positionRelativeNomeManifestante">
        <div className="positionAbsolutNomeManifestante">
          <HoverNomeManifestante>
            <div className={mostraNomeManifestante()}>{author}</div>
          </HoverNomeManifestante>
        </div>
      </div>

      <Content>
        <div className="positionRelative">
          <div className="positionAbsolut">
            <div className="alinhaMensagemDataHora">
              <DataHora>
                <div className={mostraDataHora()}>
                  05 de Junho de 2000 00:01
                </div>
              </DataHora>
              <CaixaMensagem
                onMouseEnter={handleMouseEnterConversa}
                onMouseLeave={handleMouseLeaveConversa}
              >
                {mensagem}
              </CaixaMensagem>
            </div>
            <LetraManifestante
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="letraManifestante">{author ? author[0] : ""}</div>
            </LetraManifestante>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default RespostaManifestante;
