import styled from "styled-components";

export const Button = styled.button `
  position: absolute;
  top: 10px; 
  right: 20px;
  background-color: ${props => props.theme.body};
  border: none;

  svg {
    width: 15px;
    height: 20px;
  }
`