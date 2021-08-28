import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        min-height: 100vh;
    }

    body {
        font-family: 'Montserrat', serif;
        overflow-x: hidden;
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
    }
`;
