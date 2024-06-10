import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    /* :focus {
        border: 1px solid ${(props) => props.theme.green1};
    } */

    body {
        background: ${(props) => props.theme.primary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
    }

    body, input, textArea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .flexReset {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
