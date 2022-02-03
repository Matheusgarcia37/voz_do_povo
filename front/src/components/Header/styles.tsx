import styled from "styled-components";
import {Link} from "react-router-dom"
import {theme} from "../../styles/global"
const {main} = theme.cores;
export const Content = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: ${main};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const LinkPrefeitura = styled(Link)`
    text-decoration: none;
    color: white;
    right: 0;
    padding-right: 5px;
    font-size: 17px;
    :hover{
        color: #b8eff5
    }
`;
export const ContentLinkPrefeitura = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    margin-right: 3rem;
    transition: 0.2s all ease;
    :hover{
        margin-right: 3.5rem;
    }
`;
export const ContentLinkHome = styled(Link)`
    text-decoration: none;
    display: flex;
    
    .icon{
        display: flex;
        align-items: center;
        padding-left: 3rem;

        img {
            display: flex;
            width: 35px;
            height: 35px;
        }
    }
    h3{
        padding-left: 0.5rem;
        color: white;
        font-size: 30px;
        transition: 0.5s all ease;
        :hover{
            margin-left: 5px;
            color: #b8eff5
        }
    }
`;