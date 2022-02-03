import React, { useState } from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { useRef } from "react";
import { api } from "../../api";
import ButtonsChoice from "../ButtonsChoiceDenuncia/ButtonsChoice";
import { FiUpload } from 'react-icons/fi';
import {
  Container,
  FormContent,
  Cidadao,
  Manifestacao,
  TextArea,
  ContentImagesFundo,
  Content,
} from "./styles";
import { InputLabelFlutuante } from "../InputLabelFlutuante";

const Formulario: React.FC = () => {
  const [data, setData] = useState<any>({ cidadao: {}, denuncia: {} });
  const [identificada, setIdentificada] = useState<any>(true);
  const ConteudoForm = useRef<HTMLInputElement>(null);
  const filesElement = useRef<HTMLInputElement>(null);
  
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const auxData = { ...data };
    const name = e.target.name.split(".");
    auxData[name[0]][name[1]] = e.target.value;
    setData(auxData);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const dataForm = new FormData();

    if (
      filesElement != null &&
      filesElement.current != null &&
      filesElement.current.files != null
    ) {
      for (const file of filesElement.current.files) {
        dataForm.append("file", file);
      }
    }
    if (identificada) {
      dataForm.append("cidadao", JSON.stringify(data.cidadao));
    }
    dataForm.append("denuncia", JSON.stringify(data.denuncia));

   try {
    const res = await api.post("denuncias", dataForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    //Swal sucesso com botão para copiar token
    if(identificada){
      Swal.fire({
        title: 'Sucesso!',
        text: 'Token gerado com sucesso!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Clique aqui para ver o token',
        cancelButtonText: 'Fechar'
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Token',
            text: res.data.token,
            icon: 'success',
            confirmButtonText: 'clique aqui para copiar',
          }).then((result) => {
            if (result.value) {
              navigator.clipboard.writeText(res.data.token);
            }
          })
        }
      })
    } else {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Denúncia enviada com sucesso!',
        icon: 'success',
        confirmButtonText: 'Fechar'
      })
    }
   
   } catch (error) {
     //swal error
     Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado, tente novamente mais tarde!',
     })
   }
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files != null) {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Imagens recebidas com sucesso!',
        icon: 'success',
        confirmButtonText: 'Fechar'
      })
    }
  }

  return (
    <Container>
      <Content>
      <div className="box">
      <div className="buttons">
        <ButtonsChoice
          title="Identificada"
          onClick={() => setIdentificada(true)}
        />
        <ButtonsChoice title="Anonimo" onClick={() => setIdentificada(false)} />
      </div>

      <form onSubmit={handleSubmit}>
        <FormContent ref={ConteudoForm}>
          {identificada && (
            <>
              <p>Informações pessoais:</p>
              <Cidadao className="manifestacaoIdentificada">
                <InputLabelFlutuante inputName="cidadao.nome" labelName="Nome" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.email" labelName="E-mail" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.telefone" labelName="Telefone" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.cep" labelName="CEP" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.endereco" labelName="Endereço" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.numero" labelName="Número" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.bairro" labelName="Bairro" handleChange={handleChange}/>
                <InputLabelFlutuante inputName="cidadao.complemento" labelName="Complemento" handleChange={handleChange}/>
              </Cidadao>
            </>
          )}

          <Manifestacao>
            <p>Informações da denuncia:</p>
            <InputLabelFlutuante inputName="denuncia.titulo" labelName="Titulo" handleChange={handleChange}/>
            <TextArea
              placeholder="Escreva aqui sua denúncia."
              name="denuncia.descricao"
              id=""
              onChange={handleChange}
            />
            <div className="caixaInputFile">
              <label htmlFor="selecaoArquivo" className="Arquivo"><FiUpload id="IconUpload" size={20}/> Enviar arquivos</label>
              <input
                name="file"
                id="selecaoArquivo"
                type="file"
                multiple
                ref={filesElement}
                style={{display: "none"}}
                onChange={handleFiles}
              />
            </div>
            <input className="buttonEviarForm" type="submit" />
          </Manifestacao>
        </FormContent>
      </form>
      </div>
      </Content>
      <ContentImagesFundo />
    </Container>
  );
};

export default Formulario;
