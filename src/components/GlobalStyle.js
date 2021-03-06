import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
}
html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }
  
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #FFFFFF;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color: #FFFFFF;
    }
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: #FFFFFF;
}
p {
    padding: 3rem 0rem;
    color: #cccccc;
    font-size: 1.4rem;
    line-height: 150%;
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}
span {
    font-weight: bold;
    color: #23d997;
}
a {
    font-size: 1.1rem;
    text-decoration: none;
    color: #fff;
}
`;

export default GlobalStyle;
