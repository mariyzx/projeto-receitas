import React, { useEffect, useState } from 'react';
import { Main, } from '../styles/pages/Login';
import title from '../images/title.png';
import { Redirect } from 'react-router-dom';
import { LoginButton } from '../styles/components/Buttons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailValid = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    const passwordValid = password.length > 6;

    if (emailValid && passwordValid) {
      setDisabled(false);
    } else {
      setDisabled(true)
    }
  }, [email, password])

  const saveToLocal = () => {
    setLoading(true);
    localStorage.setItem('user', email);
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
  }
  
  return (
    <Main>
      <div>
        <img src={ title } alt="title" />
        <p>Faça login e comece a usar!</p>
      </div>
      { loading && <Redirect to="/foods" />}
      <form>
          <label>
            Endereço de e-mail
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Escreva seu email...' />
          <label>
            Sua senha
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Escreva sua senha...' />
          <LoginButton disabled={disabled} onClick={() => saveToLocal()}>Entrar</LoginButton>
      </form>
      <footer>Desenvolvido por 
        <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer"> Mariana Werneck </a> em 2022.</footer>
    </Main>
  )
}

export default Login;