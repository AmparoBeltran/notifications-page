import styled from "styled-components";

export const MessageStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;
  column-gap: 1em;
  background-color: ${({ theme, read }) =>
    read ? "white" : theme.colors.veryLightGrayishBlue};
  border-radius: 1.3em;
  padding: 2em;
  width: 100%;

  img {
    width: 48px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 30px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.9em;
    column-gap: 0.9em;
  }
`;
