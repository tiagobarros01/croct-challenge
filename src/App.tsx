import React from "react";

import { Global } from "@emotion/react";

import { AvatarUpload } from "./components/AvatarUpload";
import { Wrapper } from "./styles";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <Wrapper>
      <Global styles={GlobalStyles} />

      <AvatarUpload />
    </Wrapper>
  );
}

export default App;
