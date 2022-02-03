import React, { useEffect, useState, useContext, useRef } from "react";
import { io, Socket } from "socket.io-client";
import ScrollableFeed from "react-scrollable-feed";

import CaixaDeclaracao from "../CaixaDeclaracao/CaixaDeclaracao";
import RespostaPrefeitura from "../RespostaPrefeitura/RespostaPrefeitura";
import RespostaManifestante from "../RespostaManifestante/RespostaManifestante";
import InputMensagem from "../InputMensagem/InputMensagem";

import { Container, Content } from "./styles";
import { api } from "../../api";
import { Context } from "../../context/AuthContext";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { AiFillFileImage } from "react-icons/ai";

type CidadeProps = {
  nome: string;
};
type RegistroDeCidadaoProps = {
  email: string;
  endereco: string;
  nome: string;
  telefone: number;
};

type ComentariosDeDenunciasProps = {
  mensagem: string;
  authenticated: boolean;
  createdAt: string;
  id: string;
};

type ArquivosProps = {url: string};

type ManifestacaoProps = {
  cidade: CidadeProps;
  registroDeCidadao: RegistroDeCidadaoProps;
  arquivos: ArquivosProps[];
  descricao: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  id: string;
  titulo: string;
  token: string;
};

type ParamProps = {
  token: string;
};

function ContentVizualizarDenuncia({ token }: ParamProps) {
  const [manifestacao, setManifestacao] = useState<ManifestacaoProps>();
  const [dataCriacao, setDataCriacao] = useState<string>();
  const [messages, setMessages] = useState<ComentariosDeDenunciasProps[]>([]);
  const [newMessage, setNewMessage] = useState<ComentariosDeDenunciasProps>();
  const { authenticated } = useContext(Context);

  const socket = useRef<
    Socket<DefaultEventsMap, DefaultEventsMap> | undefined
  >();
  /* Socket ----------------------------------------------------*/
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current?.on("getMessage", (data) => {
      setNewMessage(data.comentario);
    });
  }, []);

  useEffect(() => {
    newMessage && setMessages((message) => [...message, newMessage]);
  }, [newMessage]);

  useEffect(() => {
    if (manifestacao?.id !== undefined) {
      socket.current?.emit("addUser", manifestacao?.id);
      socket.current?.on("getUsers", (users: any) => {
        console.log(users);
      });
    }
  }, [manifestacao?.id]);

  /* ---------------------------------------------------------- */

  useEffect(() => {
    async function buscarDadosDaManifestacao() {
      const { data } = await api.post("/denuncias/findByToken", {
        token,
      });
      console.log(data);
      const { comentariosDeDenuncias, ...manifestation } = data;

      setManifestacao(manifestation);
      setMessages(comentariosDeDenuncias);
    }
    buscarDadosDaManifestacao();
  }, [token]);

  useEffect(() => {
    function formatarData() {
      if (typeof manifestacao?.createdAt != "undefined") {
        const newData = new Date(manifestacao?.createdAt);
        const dia = newData.getDate();
        const mes = newData.getMonth() + 1;
        const ano = newData.getFullYear();
        setDataCriacao(
          `${dia}/${mes.toString.length === 1 ? `0${mes}` : mes}/${ano}`
        );
        console.log("oi");
      }
    }
    formatarData();
  }, [manifestacao?.createdAt]);

  function SubmitMensagens(data: ComentariosDeDenunciasProps) {
    if (messages !== undefined) {
      setMessages([...messages, data]);
    }
    socket.current?.emit("sendMessage", { comentario: data });
  }

  return (
    <Container>
      <Content>
        <div className="caixaBorda">
          <div className="localConversa">
            <div className="dataTitulo">
              <h4>
                {manifestacao?.titulo} - {manifestacao?.registroDeCidadao?.nome}{" "}
                ("Denuncia")
              </h4>
              <div className="arquivos_images" style={{display: 'flex', flex: 4, marginLeft: 25}}>
      {
        manifestacao?.arquivos?.map((arquivo, number) => {
          console.log(arquivo.url);
          const vetUrl = arquivo.url.split("\\");
          const newUrl = "http://localhost:3333/files/" + vetUrl[2]; 
          console.log(newUrl)
          return (
            /* imagem, quando clicar abrir ela */
            <a href={newUrl} target="_blank">
             <AiFillFileImage size={39}/>
            </a>
          );
        })
      }
        
      </div>
              <p>{dataCriacao}</p>
            </div>
            <CaixaDeclaracao descricao={manifestacao?.descricao} />
            <h5>Converse com sua prefeitura:</h5>
            <div className="trocaDeMensagens">
              <ScrollableFeed>
                {messages?.map((comentario) => {
                  if (comentario.authenticated === true) {
                    return (
                      <RespostaPrefeitura
                        author={
                          manifestacao?.cidade != null
                            ? manifestacao.cidade.nome
                            : ""
                        }
                        mensagem={comentario.mensagem}
                        key={comentario.id}
                      />
                    );
                  } else {
                    return (
                      <RespostaManifestante
                        author={manifestacao?.registroDeCidadao.nome}
                        mensagem={comentario.mensagem}
                        key={comentario.id}
                      />
                    );
                  }
                })}
              </ScrollableFeed>
            </div>
          </div>

          {manifestacao?.id !== undefined && (
            <InputMensagem
              authenticated={authenticated}
              manifestacaoId={manifestacao?.id}
              SubmitMensagens={SubmitMensagens}
            />
          )}
        </div>
      </Content>
    </Container>
  );
}
export default ContentVizualizarDenuncia;
