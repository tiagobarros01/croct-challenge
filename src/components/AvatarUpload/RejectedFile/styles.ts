import styled from "@emotion/styled";

export const Container = styled.div`
  width: 40%;
  height: 180px;

  background: #f2f5f8;

  padding: 32px;

  display: flex;

  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  gap: 32px;
`;

export const CircleWarning = styled.div`
  width: 113px;
  height: 113px;

  background: #c3cbd5;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Details = styled.div`
  p {
    color: #c64d32;

    margin-bottom: 8px;

    font-size: 14px;
  }

  button {
    border: none;

    color: #3d485f;

    text-decoration: underline;

    font-size: 14px;

    cursor: pointer;
  }
`;

export const CloseContainer = styled.div`
  cursor: pointer;
`;
