import styled from "styled-components";

export const MainContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.3em;
  padding: 2em;
  width: 100%;
  max-width: 720px;
  /* margin: 0 auto; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1.5em;
    gap: 0.8em;
  }
`;
