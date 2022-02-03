import React, { useRef } from "react";
import { Content } from "./styles";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  status: string;
  tipoDenuncia: string;
  updatedAt: string;
  nome: string;
  idDenuncia: number;
};

function Manifestations({
  status,
  title,
  updatedAt,
  tipoDenuncia,
  nome,
  idDenuncia,
  ...rest
}: Props) {
  const refDenuncia = useRef<HTMLInputElement>(null);
  var corStatus = "";
  var corStatusRGBA = "";
  if (status === "aberto") {
    corStatus = "#506AD4";
    corStatusRGBA = "rgba(14, 47, 235, 0.2)";
  } else if (status === "resolvido") {
    corStatus = "#3EB595";
    corStatusRGBA = "rgba(62, 181, 149, 0.3)";
  } else {
    corStatus = "#D95F69";
    corStatusRGBA = "rgba(217, 95, 105, 0.3)";
  }
  return (
    <>
      <Content
        id={`${idDenuncia}`}
        style={{
          borderLeft: `4px solid ${corStatusRGBA}`,
        }}
      >
        <div className="icon">
          {status === "fechado" ? (
            <IoIosCloseCircleOutline size="40px" color={`${corStatus}`} />
          ) : status === "resolvido" ? (
            <AiOutlineCheckCircle size="40px" color={`${corStatus}`} />
          ) : status === "aberto" ? (
            <AiOutlineClockCircle size="40px" color={`${corStatus}`} />
          ) : (
            ""
          )}
        </div>
        <div className="dados">
          {" "}
          <div className="box1">
            <p>{title}</p>
            <span>{tipoDenuncia}</span>
          </div>
          {tipoDenuncia === "Identificado" ? (
            <div className="box2">
              {" "}
              <span>{nome}</span>
            </div>
          ) : (
            <div className="box2">
              {" "}
              <span>Anônimo</span>
            </div>
          )}
          <div className="box3">
            {" "}
            <span className="update">{updatedAt.substring(0, 10)}</span>
          </div>
        </div>
      </Content>
    </>
  );
}
export default Manifestations;
