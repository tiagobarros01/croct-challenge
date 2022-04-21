import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div<{ isActive: boolean }>`
  width: 40%;
  height: 11.25rem;

  background: #f2f5f8;

  border: 0.125rem dashed;

  ${({ isActive }) => {
    if (isActive) {
      return css`
        border-color: #02b242;
      `;
    }

    return css`
      border-color: #c7cdd3;
    `;
  }}

  border-radius: 0.5rem;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 2rem;

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;

  p {
    color: #677489;

    font-size: 0.875rem;
  }

  div {
    p {
      color: #495567;
      font-weight: 500;
    }

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }
`;

export const CloseContainer = styled.div`
  cursor: pointer;
`;

export const AcceptedFileContainer = styled(Container)<any>`
  border: none;

  align-items: flex-start;
  justify-content: space-between;

  gap: 3.75rem;

  cursor: inherit;
`;

export const AcceptedFileContent = styled.div`
  display: flex;

  flex: 1;

  flex-direction: row;
  align-items: center;

  gap: 2rem;
`;

export const AvatarContainer = styled.div`
  max-width: 7.125rem;
  height: 7.125rem;

  border-radius: 100%;

  overflow: hidden;

  display: flex;

  > div {
    width: 100%;
    height: 100%;

    position: inherit;

    img {
      width: 100%;
      height: 100%;

      position: inherit;
    }

    > div {
      display: none;
    }
  }
`;

export const Details = styled.div`
  display: flex;

  flex: 1;

  flex-direction: column;

  div {
    display: flex;

    align-items: flex-start !important;
    flex-direction: column !important;

    margin-bottom: 2.25rem;

    p {
      color: #677489;

      font-size: 0.875rem;

      margin-bottom: 0.5rem;
    }

    input {
      accent-color: #3f80ff;

      height: 0.125rem;

      width: 100%;
    }
  }

  button {
    align-self: flex-end;

    background: #3d485f;
    color: #fff;

    padding: 0.625rem 2.625rem;

    border: 0;

    font-size: 0.875rem;

    border-radius: 1rem;

    cursor: pointer;
  }
`;

export const CroppedImageContainer = styled(Container)`
  justify-content: initial;
`;

export const ContentCroppedImage = styled.div`
  display: flex;

  flex: 1;

  align-items: center;

  flex-direction: column;

  gap: 0.5rem;

  div {
    p {
      color: #495567;
      font-weight: 500;
    }

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }

  p {
    color: #677489;

    font-size: 0.875rem;
  }
`;
