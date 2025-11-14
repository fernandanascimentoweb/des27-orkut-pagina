import React from 'react'
import '../styles/sidebarprofile.css'
import avatar from '../assets/iuricode 1.png'



const SidebarProfile = () => {
  return (
    <aside className="sidebar-card">
      <div className='box'>
        <img src={avatar} className="profile-pic" />
        <h3>Iuri Silva</h3>
        <p>Solteiro, Brasil</p>
      </div>
      <button className="edit-btn">Editar meu perfil</button>
    </aside>
  )
}

export default SidebarProfile