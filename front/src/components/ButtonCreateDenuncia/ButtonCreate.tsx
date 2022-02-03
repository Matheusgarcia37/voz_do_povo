import React from "react";
import { Content } from "./styles";

/* Importando icones */
import { IoMdCreate } from "react-icons/io";
const buttonCreate: React.FC = () => {
  return (
    <Content to="/Denuncia">
      <button>
        <div className="icon">
          <IoMdCreate color="white" size="32px" />
        </div>
        Criar denuncia!
      </button>
    </Content>
  );
};

export default buttonCreate;
