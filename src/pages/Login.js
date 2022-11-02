import React, { useEffect, useState } from 'react';
import { Main, Button } from '../styles/Login';
import title from '../images/title.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    const emailValid = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    const passwordValid = password.length > 6;

    if (emailValid && passwordValid) {
      setDisabled(false);
    } else {
      setDisabled(true)
    }
  }, [email, password])
  

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
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Escreva seu email...' />
          <label>
            Sua senha
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Escreva sua senha...' />
          <Button disabled={disabled}>Entrar</Button>
      </form>
      <footer>Desenvolvido por 
        <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer">Mariana Werneck</a> em 2022.</footer>
    </Main>
  )
}

export default Login;