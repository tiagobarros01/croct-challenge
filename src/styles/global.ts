import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;

    font-family: "Inter", sans-serif;

    overflow: hidden;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 1200px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 992px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 81.25%;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 75%;
    }
  }
`;
