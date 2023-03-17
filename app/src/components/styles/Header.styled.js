import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;

  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8em;
      padding-right: 0;
    }
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0.5em;
  }

  h1 {
    font-size: 2em;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.3em;
    }
  }

  p {
    font-weight: 900;
    width: auto;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.lightGrayishBlueTwo};
    padding: 0.1em 0.4em;
    border-radius: 5px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0.1em 0.8em;
      font-size: 0.8em;
    }
  }
`;
