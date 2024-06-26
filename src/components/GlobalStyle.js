import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    button {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.25rem;
    }

    button {
      padding: 0.25rem;
    }
  }
`

export default GlobalStyle
