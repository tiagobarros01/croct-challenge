import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import {
  CircleWarning,
  CloseContainer,
  Container,
  Content,
  Details,
} from "./styles";

type RejectedFileProps = {
  action(): void;
};

export function RejectedFile({ action }: RejectedFileProps) {
  return (
    <Container>
      <Content>
        <CircleWarning>
          <AiFillExclamationCircle size="20" color="#fff" />
        </CircleWarning>

        <Details>
          <p>Sorry, the upload failed.</p>

          <p onClick={action}>Try again</p>
        </Details>
      </Content>

      <CloseContainer onClick={action}>
        <IoClose size="24" color="#677489" />
      </CloseContainer>
    </Container>
  );
}
