import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }
    html, body, #root {
        height: 100%;
        background: linear-gradient(-90deg, #7159c1, #ab59c1);
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
