import styled from "styled-components";

export const PrivateMessageStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightGrayishBlueOne};
  border-radius: 4px;
  padding: 1em;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayishBlueOne};
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.7em;
  }
`;
