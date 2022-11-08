import styled from "styled-components";

export const DivFooter = styled.div `
  background-color: ${({theme}) => theme.body === '#f1f1f1' ? '#d9d9d9': 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;

  button {
    border: 2px solid transparent;
    background-color: transparent;
    border-radius: 30px;
    
    svg {
      width: 50px;
      color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
      height: 40px;
    }
  }
`