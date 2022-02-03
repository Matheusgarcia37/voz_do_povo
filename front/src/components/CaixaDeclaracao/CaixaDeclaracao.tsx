import React from "react";

import { CaixaComBackground } from "./styles";

type Props = {
  descricao?: string;
};

function CaixaDeclaracao({ descricao }: Props) {
  return (
    <>
      <CaixaComBackground>
        <p>"{descricao}"</p>
      </CaixaComBackground>
    </>
  );
}

export default CaixaDeclaracao;
