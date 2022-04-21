import styled from "@emotion/styled";

export const Container = styled.div`
  width: 40%;
  height: 11.25rem;

  background: #f2f5f8;

  padding: 2rem;

  display: flex;

  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  gap: 2rem;
`;

export const CircleWarning = styled.div`
  width: 7.125rem;
  height: 7.125rem;

  background: #c3cbd5;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;
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
`;

export const CloseContainer = styled.div`
  cursor: pointer;
`;
