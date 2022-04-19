import React from "react";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import { GlobalStyles } from "./styles/global";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Global styles={GlobalStyles} />

      <h1>Testing...</h1>
    </Wrapper>
  );
}

export default App;
