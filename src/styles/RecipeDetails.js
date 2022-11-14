import styled from "styled-components";

export const DivDetails = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
  gap: 10px;

  img {
    border-radius: 20px;
    box-shadow: ${({theme}) => theme.body === '#f1f1f1' ?
       '8px 6px 11px -2px rgba(80, 80, 74, 0.46)': '8px 6px 11px -2px #525252'};
  }

  img:nth-child(2) {
    width: 45%;
  }
`

export const Ingredients = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
`

export const StepByStep = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  p {
    width: 90%
  }
`

export const CarouselDiv = styled.div `
  column-gap: 10px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 30%;
    justify-content: center;
    width: 46%;
  }

  div > img {
    width: 30%;
  }
    
`