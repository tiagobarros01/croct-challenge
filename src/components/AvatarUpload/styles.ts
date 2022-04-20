import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div<{ isActive: boolean }>`
  width: 40%;
  height: 180px;

  background: #f2f5f8;

  border: 2px dashed;

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

  border-radius: 8px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 32px;

  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 8px;

  p {
    color: #677489;

    font-size: 14px;
  }

  > div {
    p {
      color: #495567;
      font-weight: 500;
    }

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;
  }
`;

export const CloseContainer = styled.div`
  cursor: pointer;
`;

export const ContainerAcceptedFile = styled(Container)<any>`
  border: none;

  align-items: flex-start;
  justify-content: space-between;

  gap: 3.75rem;

  cursor: inherit;

  div {
    :first-child {
      display: flex;

      flex: 1;

      flex-direction: row;
      align-items: center;

      gap: 32px;
    }
  }
`;

export const AvatarContainer = styled.div`
  max-width: 114px;
  height: 114px;

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

    margin-bottom: 35px;

    p {
      color: #677489;

      font-size: 14px;

      margin-bottom: 8px;
    }

    input {
      accent-color: #3f80ff;

      height: 2px;

      width: 100%;
    }
  }

  button {
    align-self: flex-end;

    background: #3d485f;
    color: #fff;

    padding: 0.625rem 2.625rem;

    border: 0;

    font-size: 14px;

    border-radius: 16px;

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

  gap: 8px;

  > div {
    p {
      color: #495567;
      font-weight: 500;
    }

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;
  }

  p {
    color: #677489;

    font-size: 14px;
  }
`;
