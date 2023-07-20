import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import CartButton from '../CartButton/CartButton';

import './Header.css'

const Header = () =>{
  return (
    <header className="header">
      <div className="container">

        <SearchBar/>
        <Logo/>
        <CartButton/>

      </div>
    </header>
  );
};

export default Header;
