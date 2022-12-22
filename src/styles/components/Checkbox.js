import styled from "styled-components";

export const Checkbox = styled.div`
  label {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--form-background);
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1em;
    height: 1em;
    border: 0.15em solid currentColor;
    border-radius: 20px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    margin-right: 5px;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: ${({theme}) => theme.body === '#f1f1f1' ?
      'black' : 'white'};
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(1px, 3px) solid currentColor;
    outline-offset: max(2px, 2px);
  }

  input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

`