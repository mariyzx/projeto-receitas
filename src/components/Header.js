import React from "react";
import { CgProfile } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { Headers } from '../styles/Header';
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <Headers>
      <h1>{window.location.pathname === '/foods' ? 'Foods' : 'Drinks'}</h1>
      <div>
        <button onClick={() => history.push('/profile')}><CgProfile /></button>
        <button><BsSearch /></button>
      </div>
    </Headers>
  )
}

export default Header;