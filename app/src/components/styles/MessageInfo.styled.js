import styled from "styled-components";

export const MessageInfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.grayishBlue};

    column-gap: 1em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8em;
    }
  }
`;

export const Author = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding-right: 0.3em;
`;

export const Title = styled.a`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  padding-inline: 0.3em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const UnRead = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 100%;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.grayishBlue};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.8em;
  }
`;
