import styled from "styled-components";

export const MainProgress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  gap: 0.5rem;

  img { 
    border-radius: 20px;
    transition: box-shadow 0.3s ease-in-out;
  }

  img:hover {
    box-shadow: ${({theme}) => theme.body === '#f1f1f1' ?
      '8px 6px 11px -2px rgba(80, 80, 74, 0.46)': '8px 6px 11px -2px #525252'};
  }
`

export const DivIngredients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`