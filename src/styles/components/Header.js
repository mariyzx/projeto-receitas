import styled from "styled-components";

export const Headers = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 1rem;
  }

  div {
    display: flex;
    padding: 0px;
    gap: 7px;
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
