import React, { ComponentPropsWithoutRef } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import {
  CircleWarning,
  CloseContainer,
  Container,
  Content,
  Details,
} from "./styles";

type RejectedFileProps = ComponentPropsWithoutRef<"div"> & {
  action(): void;
};

export function RejectedFile({ action, ...rest }: RejectedFileProps) {
  return (
    <Container {...rest}>
      <Content>
        <CircleWarning>
          <AiFillExclamationCircle size="20" color="#fff" />
        </CircleWarning>

        <Details>
          <p>Sorry, the upload failed.</p>

          <button type="button" onClick={action}>
            Try again
          </button>
        </Details>
      </Content>

      <CloseContainer data-testid="close-process-div" onClick={action}>
        <IoClose size="24" color="#677489" />
      </CloseContainer>
    </Container>
  );
}
