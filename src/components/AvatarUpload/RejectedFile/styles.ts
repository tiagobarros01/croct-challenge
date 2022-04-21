import styled from "@emotion/styled";

export const Container = styled.div`
  width: 40%;
  height: 11.25rem;

  background: #f2f5f8;

  padding: 2rem;

  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 678px) {
    padding: 1rem;

    width: 60%;
  }
`;

export const Content = styled.div`
  height: 100%;

  display: flex;

  flex-direction: row;

  align-items: center;

  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;

    flex: 1;

    gap: 2rem;
  }
`;

export const CircleWarning = styled.div`
  width: 7.125rem;
  height: 7.125rem;

  background: #c3cbd5;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;

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

  @media (max-width: 576px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const Details = styled.div`
  p {
    color: #c64d32;

    margin-bottom: 0.5rem;

    font-size: 0.875rem;
  }

  button {
    border: none;

    color: #3d485f;

    text-decoration: underline;

    font-size: 0.875rem;

    cursor: pointer;
  }

  @media (max-width: 576px) {
    display: flex;

    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;

export const CloseContainer = styled.div`
  cursor: pointer;
`;
