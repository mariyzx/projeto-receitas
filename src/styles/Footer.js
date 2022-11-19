import styled from "styled-components";

export const DivFooter = styled.div `
  background-color: ${({theme}) => theme.body === '#f1f1f1' ? '#d9d9d9': 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;
`