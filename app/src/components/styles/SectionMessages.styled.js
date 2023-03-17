import styled from "styled-components";

export const SectionMessagesStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0.7em;
  }
`;
