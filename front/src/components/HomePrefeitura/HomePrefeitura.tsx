import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Content } from "./styles";
import { api } from "../../api";

import Manifestations from "../ManifestationContent/ManifestationContent";

/* Importando filtro do chakra */
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Checkbox,
  Text,
  InputGroup,
  Input,
  InputLeftAddon,
} from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";

const Footer: React.FC = () => {
  const [repo, setRepo] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  useEffect(() => {
    async function buscarDenuncias() {
      const { data } = await api.get("denuncias");
      console.log(data);
      setRepo(data);
    }
    buscarDenuncias();
  }, []);
  return (
    <Content>
      <div className="header">
        <h3>Denuncias</h3>

        <Button
          ref={btnRef}
          mr="3%"
          mt="10px"
          bg="#5cbed1"
          color="white"
          _hover={{
            background: "#2a7f90",
          }}
          onClick={onOpen}
        >
          Filtros
        </Button>
      </div>

      <div className="denuncias">
        <div className="titulos">
          <span>Titulo</span>
          <span className="nome">Nome</span>
          <span className="data">Data</span>
          <span></span>
        </div>
        <div className="ContentDenuncias">
          <ScrollableFeed>
            {repo.map((repo, number) => {
              return (
                <Link to={`/VisualizarDenuncia/${repo.token}`}>
                  <Manifestations
                    title={repo.titulo}
                    idDenuncia={number}
                    nome={
                      repo.registroDeCidadao != null
                        ? repo.registroDeCidadao.nome
                        : ""
                    }
                    status={repo.status}
                    updatedAt={repo.updatedAt}
                    tipoDenuncia={
                      repo.registroDeCidadao != null
                        ? "Identificado"
                        : "Anonimo"
                    }
                  />
                </Link>
              );
            })}
          </ScrollableFeed>
        </div>
      </div>
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader minH="40px">Filtros</DrawerHeader>

          <DrawerBody>
            <div
              className="flex"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 10,
                paddingTop: "40px",
              }}
            >
              <Text fontSize="xl" pb="10px">
                Status:
              </Text>

              <Checkbox
                pl="5px"
                pb="15px"
                size="lg"
                colorScheme="blue"
                _checked={{ outline: "none," }}
              >
                Abertos
              </Checkbox>
              <Checkbox pl="5px" pb="15px" size="lg" colorScheme="green">
                Resolvidos
              </Checkbox>
              <Checkbox pl="5px" pb="15px" size="lg" colorScheme="red">
                Fechados
              </Checkbox>
              <Text fontSize="xl" pb="10px">
                Tipo:
              </Text>
              <Checkbox pl="5px" pb="15px" size="lg" colorScheme="whatsapp">
                Identificado
              </Checkbox>
              <Checkbox pl="5px" pb="15px" size="lg" colorScheme="twitter">
                Anônimo
              </Checkbox>
              <Text fontSize="xl" pb="10px">
                Busca:
              </Text>
              <InputGroup>
                <InputLeftAddon minW="85px" children="Titulo" />
                <Input type="tel" />
              </InputGroup>
              <InputGroup pt="20px">
                <InputLeftAddon children="Pessoa" minW="85px" />
                <Input type="tel" />
              </InputGroup>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={onClose}
              bg="#5cbed1"
              color="white"
              _hover={{
                background: "#2a7f90",
              }}
              _focus={{
                boxShadow: "none !important",
              }}
            >
              Filtrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Content>
  );
};

export default Footer;
