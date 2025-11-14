import React from 'react'
import '../styles/header.css'
import logo from '../assets/logo-orkut.png'
import user from '../assets/iuricode 1.png'



const Header = () => {
  return (
        <header className='header'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Perfil</a>
        <a href="#">Comunidades</a>
        <a href="#">Jogos</a>
      </nav>
      
      <div className='search'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Pesquisar no Orkut' />
      </div>

      <div className='user'>
        <img src={user} alt="usuario" />
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </header>
  )
}

export default Header

