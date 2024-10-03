import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: none;
    }
      
    body{
        font-family: 'Poppins', Sans-Sarif;
        background: linear-gradient(rgb(0, 0, 0)15%,rgb(36, 9, 34),rgb(58, 26, 57));
        min-height: 100vh;
        height: 100%;
        padding: 10px;
    }
`;

export default Global;

