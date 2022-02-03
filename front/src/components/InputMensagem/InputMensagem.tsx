import React, { useState } from "react";

import { Container, AreaButtonSend } from "./styles";

import { AiOutlineSend } from "react-icons/ai";
import { api } from "../../api";

type Props = {
  authenticated: boolean;
  manifestacaoId: any;
  SubmitMensagens: Function;
};

function InputMensagem({
  authenticated,
  manifestacaoId,
  SubmitMensagens,
}: Props) {
  const [comentario, setComentario] = useState({
    mensagem: "",
    authenticated: authenticated,
    denunciaId: manifestacaoId,
  });

  function changeHandle(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newComentario = { ...comentario };
    newComentario.mensagem = e.target.value;
    setComentario(newComentario);
  }

  async function submitHandle(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    e.stopPropagation();
    const { data } = await api.post("/comentarios", comentario);
    const newComentario = { ...comentario };
    newComentario.mensagem = "";
    setComentario(newComentario);
    SubmitMensagens(data);
  }

  return (
    <Container>
      <div className="padding">
        <textarea onChange={changeHandle} value={comentario.mensagem} />
      </div>
      <AreaButtonSend onClick={submitHandle}>
        <AiOutlineSend size="2vw" />
      </AreaButtonSend>
    </Container>
  );
}

export default InputMensagem;
