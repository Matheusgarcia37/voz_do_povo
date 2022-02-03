import React from "react";
import { Content, GlobalStyle, DadosPrefeitura } from "./styles";
import { Context } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

/* Import icons */
import { AiFillHome, AiFillAlert } from "react-icons/ai";
import { RiFileList3Fill } from "react-icons/ri";
import { FiClipboard } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";

import vozdopovo from "../../assets/vozdopovo.png";
import { useContext } from "react";
const Login: React.FC = () => {
  const { handleLogout } = useContext(Context);
  return (
    <Content>
      <GlobalStyle />
      <DadosPrefeitura>
        <div className="img">P</div>
        <h3>Pimenta-MG</h3>
      </DadosPrefeitura>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<AiFillHome size="20px" />}>
            <Link id="firstLink" className="Link" to="/HomePrefeitura">
              Home
            </Link>
          </MenuItem>
          {/* <SubMenu title={`Denúncias`} icon={<FiClipboard />}>
            <MenuItem>
              <div className="icon">
                {" "}
                <FiFlag size="18px" />
              </div>
              <Link className="Link" to="/Denuncia">
                Denuncias
              </Link>
            </MenuItem>
            <MenuItem>
              <div className="icon">
                {" "}
                <FiFlag size="18px" />
              </div>
              <Link className="Link" to="/Denuncia">
                Denuncias
              </Link>
            </MenuItem>
          </SubMenu> */}
          <SubMenu
            icon={<RiFileList3Fill size="20px" />}
            title={`Manifestações`}
          >
            <MenuItem>
              <div className="icon">
                {" "}
                <AiFillAlert size="18px" />
              </div>
              <Link className="Link" to="/Denuncia">
                Denuncias
              </Link>
            </MenuItem>
            {/* <MenuItem>
              <div className="icon">
                {" "}
                <FiFlag size="18px" />
              </div>
              <Link className="Link" to="/Denuncia">
                Denuncias
              </Link>
            </MenuItem> */}
          </SubMenu>
          <button
            id="firstLink"
            className="LinkSair"
            onClick={() => {
              handleLogout();
            }}
          >
            <MenuItem icon={<CgLogOut size="20px" />}>Sair</MenuItem>
          </button>
        </Menu>
        <div className="ImagemVozDoPovo">
          <img src={vozdopovo} alt="" />
        </div>
      </ProSidebar>
    </Content>
  );
};

export default Login;
