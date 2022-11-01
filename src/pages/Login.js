import React from 'react';
import { Main, Button } from '../styles/Login';
import title from '../images/title.png';

function Login() {
  return (
    <Main>
      <div>
        <img src={ title } alt="title" />
        <p>Faça login e comece a usar!</p>
      </div>
      <form>
          <label>
            Endereço de e-mail
          </label>
          <input type="email" placeholder='Escreva seu email...' />
          <label>
            Sua senha
          </label>
          <input type="password" placeholder='Escreva sua senha...' />
          <Button>Entrar</Button>
      </form>
    </Main>
  )
}

export default Login;