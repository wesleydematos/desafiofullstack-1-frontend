import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;

        :hover{
            color: #535bf2;
        }
    }
    
    body {
        text-decoration: none;
        list-style: none;  
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        color: white;
        cursor: pointer;
        transition: border-color 0.25s;

        :hover{
            border-color: #646cff;
        }

        :focus, :focus-visible{
            outline: 4px auto -webkit-focus-ring-color;
        }
    }
`;
