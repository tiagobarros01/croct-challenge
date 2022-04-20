import React from "react";

import { Global } from "@emotion/react";

import { GetCroppedImageReturn } from "./@types/CroppedImage";
import { AvatarUpload } from "./components/AvatarUpload";
import { Wrapper } from "./styles";
import { GlobalStyles } from "./styles/global";

function App() {
  const handleReceivedAvatar = (croppedImage: GetCroppedImageReturn) => {
    console.log({ croppedImage });
  };

  return (
    <Wrapper>
      <Global styles={GlobalStyles} />

      <AvatarUpload action={handleReceivedAvatar} />
    </Wrapper>
  );
}

export default App;
