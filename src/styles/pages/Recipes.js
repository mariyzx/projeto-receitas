import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MainRecipe = styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 7rem;

    h4 {
      margin-top: 4rem;
    }

    h5 {
      margin-top: 2rem;
    }

`

export const DivCategories = styled.div `
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
  justify-content: center;

  button {
    border: 2px solid #d9d9d9;
    background-color: ${props => props.theme.body};
    color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};
    border-radius: 50px;
    width: 15%;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    button {
      width: 144px;
    }
}
`

export const CardRecipe = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    img { 
      border-radius: 20px;
      transition: box-shadow 0.3s ease-in-out;
    }

    img:hover {
      box-shadow: ${({theme}) => theme.body === '#f1f1f1' ?
       '8px 6px 11px -2px rgba(80, 80, 74, 0.46)': '8px 6px 11px -2px #525252'};
    }

`

export const StyledLink = styled(Link) `
  text-decoration: none;
  color: ${({theme}) => theme.body === '#f1f1f1' ? 'black': 'white'};


  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`
