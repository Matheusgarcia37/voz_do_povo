import {createGlobalStyle} from 'styled-components';
export const theme = {
 cores: {
 main: "#3DB1CB",
 institutional: "blue"
 },
 fontes: {
    title: "'Montserrat', sans-serif",
    subtitle: "'ABeeZee', sans-serif;"
 }
}
export default createGlobalStyle`
    *{
             -webkit-tap-highlight-color : transparent;

        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap');
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
        overflow: hidden;
    }
    body{
        font: 14px;
        color: #333;
        
    }
`;