import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

export const Main = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 100%;
  }

  input {
    width: 100%;
    height: 38px;
    border: 2px solid #d9d9d9;

    border-radius: 4px;
    padding: 0.4rem;
  }

  div > p {
    margin: 5px 0px 5px 0px;
    border-bottom: ${({theme}) => theme.body === '#f1f1f1' ? '2px solid black': '2px solid white'};
  }


  div > img {
    filter: ${({theme}) => theme.body === '#f1f1f1' ? 'none': 'invert(1)'};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    animation-name: translate;
    animation-timing-function: ease;
  }

  @keyframes translate {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-50px); }
    50%  { transform: scale(1,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }

  a:visited {
    color: ${({theme}) => theme.body === '#f1f1f1' ? '#551a8b': '#842ad8'};
  }

  @media (max-width: 400px) {
    width: 70%;

    footer {
      width: 90%;
    }
  }

`

