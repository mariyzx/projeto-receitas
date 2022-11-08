import styled from "styled-components";

export const DivFooter = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  bottom: 0;
  position: fixed;
  width: 100%;

  button {
    border: 2px solid #d9d9d9;
    background-color: ${props => props.theme.body};
    border-radius: 30px;
    
    svg {
      width: 50px;
      color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
      height: 40px;
    }
  }
`