import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --primary: #9ce3d4;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    }

    html{
        scroll-behavior: smooth;
    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: relative;
        font-family: 'Montserrat', sans-serif;
        -webkit-tap-highlight-color: transparent;
        background-image: url("https://res.cloudinary.com/dsgcmsjv4/image/upload/v1710274557/Turnero/xhmpttoa7n8qgppc6pzn.jpg");
        background-repeat :no-repeat;
        background-size: cover;
       
    }
`;
