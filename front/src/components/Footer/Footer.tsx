import React from "react";
import { Content } from "./styles";

/* Importando icones */

import { MdCopyright } from "react-icons/md";
const Footer: React.FC = () => {
  return (
    <Content>
      <MdCopyright color="white" size="16px"></MdCopyright>
      <p>Desenvolvido por Voz do Povo. Todos direitos reservados.</p>
    </Content>
  );
};

export default Footer;
