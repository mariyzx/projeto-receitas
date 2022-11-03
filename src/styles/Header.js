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

  input {
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    padding: 5px;
  }

`

export const SearchInputs = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    display: flex;
    gap: 0.3rem;
  }

  label > input {
    border: 2px solid #d9d9d9;
    border-radius: 9px;
  }

  label > input:checked {
    background-color: grey;
  }

  .form-check-input:checked {
    border-color: #d9d9d9;
  }
`