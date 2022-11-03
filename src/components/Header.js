import React, { useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { Headers } from '../styles/Header';
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  const history = useHistory();
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleSearch = () => {
    setToggleSearch(!toggleSearch);
  }
  
  return (
    <Headers>
      <h1>{window.location.pathname === '/foods' ? 'Foods' : 'Drinks'}</h1>
      <div>
        <button onClick={() => history.push('/profile')}><CgProfile /></button>
        <button onClick={() => handleSearch()}><BsSearch /></button>
      </div>
      { toggleSearch && <SearchBar />
      }
    </Headers>
  )
}

export default Header;