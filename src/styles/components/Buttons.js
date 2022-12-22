import styled from "styled-components"

export const LoginButton = styled.button `
  background-color: #129575;
  height: 38px;
  color: white;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 7px;
  padding: 0.4rem;

  &:hover {
    background-color: #15ac87;
  }

  &:disabled {
    background-color: grey;
  }
`

export const ToggleButton = styled.button `
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

export const ButtonIcon = styled.button `
  border: none;
  background-color: ${props => props.theme.body};
  color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
  margin-bottom: 1rem;

  svg {
    width: 20px;
    height: 25px;
  }
`

export const SearchButton = styled.button `
  border: 2px solid #d9d9d9;
  border-radius: 50px;
  height: 35px;
  margin-bottom: 0;
  width: 30%;
`

export const FooterButton = styled.button `
  border: 2px solid transparent;
  background-color: transparent;
  border-radius: 30px;
  
  svg {
    width: 50px;
    color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
    height: 40px;
  }
`

export const StartButton = styled.button `
  position: fixed;
  bottom: 2px;
  border: 2px solid #d9d9d9;
  background-color: ${props => props.theme.body};
  color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
  border-radius: 20px;
  width: 150px;
  padding: 2px;

  :disabled {
    color: grey;
  }
`

export const ShareAndFavButton = styled.button `
  border: none;
  background-color: ${props => props.theme.body};
  color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
  width: 20%;
`