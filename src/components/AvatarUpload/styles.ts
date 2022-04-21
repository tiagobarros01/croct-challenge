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

  @media (max-width: 678px) {
    padding: 1rem;

    width: 60%;
  }
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

    text-align: center;
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

    @media (max-width: 576px) {
      flex-direction: column;
    }
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

  @media (max-width: 678px) {
    gap: inherit;
  }
`;

export const AcceptedFileContent = styled.div`
  display: flex;

  flex: 1;

  flex-direction: row;
  align-items: center;

  gap: 2rem;

  @media (max-width: 678px) {
    flex-direction: column;
  }
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

  @media (max-width: 858px) {
    width: 6.5rem;
    height: 6.5rem;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 678px) {
    width: 5rem;
    height: 4.5rem;
  }
`;

export const Details = styled.div`
  display: flex;

  flex: 1;

  flex-direction: column;

  @media (max-width: 678px) {
    flex-direction: row;

    align-items: center;

    gap: 2rem;
  }

  div {
    display: flex;

    align-items: flex-start !important;
    flex-direction: column !important;

    margin-bottom: 2.25rem;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

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

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const ContentCroppedImage = styled.div`
  display: flex;

  flex: 1;

  align-items: center;

  flex-direction: column;

  gap: 0.5rem;

  div {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 0.75rem;

    @media (max-width: 576px) {
      flex-direction: column;
    }

    p {
      color: #495567;

      font-weight: 500;
    }
  }

  p {
    color: #677489;

    font-size: 0.875rem;

    text-align: center;
  }
`;
