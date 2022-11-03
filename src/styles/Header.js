import styled from "styled-components";

export const Headers = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    gap: 7px;
  }

  div > button {
    border: none;
    background-color: ${props => props.theme.body};
    color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};

    svg {
    width: 20px;
    height: 25px;
    }
  }
`