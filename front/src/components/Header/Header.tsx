import React from "react";
import {
  Content,
  LinkPrefeitura,
  ContentLinkPrefeitura,
  ContentLinkHome,
} from "./styles";

/* Importação dos icones */
import { BiLinkAlt } from "react-icons/bi";

/* importando icone pensando */
import pensando from "../../assets/pensando.png";

const Header: React.FC = () => {
  return (
    <>
      <Content>
        <ContentLinkHome to="">
          <div className="icon">
            <img src={pensando} alt="" />
            <h3>Voz do Povo</h3>
          </div>
        </ContentLinkHome>

        <ContentLinkPrefeitura>
          <BiLinkAlt color="white" size="18px" />
          <LinkPrefeitura to="/LoginPrefeitura">
            Acesso prefeitura
          </LinkPrefeitura>
        </ContentLinkPrefeitura>
      </Content>
    </>
  );
};

export default Header;
