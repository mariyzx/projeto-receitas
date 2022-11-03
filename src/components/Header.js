import React from "react";
import { CgProfile } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { Headers } from '../styles/Header';

function Header() {
  return (
    <Headers>
      <h1>{window.location.pathname === '/foods' ? 'Foods' : 'Drinks'}</h1>
      <div>
        <button><CgProfile /></button>
        <button><BsSearch /></button>
      </div>
    </Headers>
  )
}

export default Header;