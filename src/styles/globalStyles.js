import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from './fonts/Jal_Onuel.woff';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --vh: 100%;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 62.5%;
        position:fixed;
        overflow: hidden;
        @media screen and (min-width: 1921px){
            font-size: 56.25%;
        }
    }

    * {
        box-sizing: border-box !important;
        -moz-box-sizing:border-box !important; /* Firefox */
        -webkit-box-sizing:border-box !important; /* Safari */
    }
    
    div {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        height: 100%;
    }
    
    input,
    button,
    select,
    textarea,
    optgroup,
    option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }
    
    a{
        color:inherit;
        text-decoration:none;
    }

    @font-face {
        font-family: 'Jal_Onuel';
        src: url(${font}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
