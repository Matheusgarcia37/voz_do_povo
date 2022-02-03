import styled from "styled-components";
import { Link } from "react-router-dom";
export const Content = styled(Link)`
  height: 65px;

  text-decoration: none;
  background-color: #3db1cb;
  border-radius: 10px;
  width: 85%;
  button {
    width: 100%;
    height: 100%;
    background-color: #3db1cb;
    border-radius: 10px;
    border: none;
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s all ease;
    position: relative;
    :hover {
      background-color: #2a92aa;
      padding-left: 1rem;
    }
    .icon {
      position: absolute;
      left: 0;
      margin-left: 1rem;
      padding-top: 6px;
    }
  }
`;
