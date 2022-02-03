import styled, { createGlobalStyle } from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 12vh);
  width: 270px;
  .ImagemVozDoPovo {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    margin-bottom: 7vh;
    img {
      width: 100%;
    }
  }
  .LinkSair {
    width: 100%;
    background-color: white;
    color: #3db1cb;
    border: none;
  }
`;
export const GlobalStyle = createGlobalStyle`
 .pro-sidebar-layout{
     background-color:white;
     color: #3db1cb;;
     border: 1px solid white;
     border-right: 3px solid #2c97af;
 }
 .pro-inner-item{
     border-bottom: 1px solid #3db1cb;;
     transition: 0.5s all ease;
     :hover{
         background-color: #4ea4b8;
         .pro-item-content{
             color: white !important;
             a{
                 color:  white !important;
             }
                           a#firstLink{
             color: white !important;

         }
         }
         .pro-arrow{
    color: white !important;
    border-color: white !important;
}

     }
     #firstItem{
         color: white;
     }
 }
 .pro-item-content{
     color: #3db1cb;
     text-decoration: none;
     font-size: 20px;
     display: flex;
              a#firstLink{
             color: #3db1cb !important;

         }
     a{
         padding: 0;
         padding-left: 10px;
         margin: 0;
         color: white !important;
         text-decoration: none;

     }
 }
 .pro-sidebar .pro-menu{
     padding: 0;
     
 }
 .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item > div > ul {
    padding-top: 0px;
    padding-bottom: 0px;
    background-color: #5ebdd3;
    .icon{
        padding-top: 4px;
        padding-left: 25px;
        color: white;
    }

}
.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item {
    padding-left: 0px;
}
.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item:before {
    display: none;
}
.pro-arrow{
    color: #3db1cb !important;
    border-color: #3db1cb !important;
}
.pro-sidebar .pro-menu.shaped .pro-menu-item > .pro-inner-item > .pro-icon-wrapper {
    background-color: transparent !important;
}
.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item {
        border-bottom: 1px solid white !important;

}
.pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item {
        border-bottom: 1px solid !important;
}
`;
export const DadosPrefeitura = styled.div`
  width: 270px;
  border-right: 3px solid #3db1cb;
  height: 4rem;
  color: #3db1cb;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 18px;
  padding-left: 1rem;
  background-color: #9de5f5;
  .img {
    color: white;
    width: 45px;
    font-size: 30px;
    height: 50px;
    margin-right: 1rem;
    background-color: #3db1cb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
