import React from 'react'
import '../styles/friendslist.css'
import fernando from '../assets/fernando.png'
import ana from '../assets/ana.png'
import carlos from '../assets/carlos.png'
import vitor from '../assets/vitor.png'
import mateus from '../assets/mateus.png'
import ramos from '../assets/ramos.png'
import eji from '../assets/eji.png'
import julia from '../assets/julia.png'
import carol from '../assets/carol.png'



const friends = [
  {
    id: 1,
    nome: 'Fernando',
    img: fernando,
  },
  {
    id: 2,
    nome: 'Ana',
    img: ana,
  },
  {
    id: 3,
    nome: 'Carlos',
    img: carlos,
  },
  {
    id: 4,
    nome: 'Vitor',
    img: vitor,
  },
  {
    id: 5,
    nome: 'Matheus',
    img: mateus,
  },
  {
    id: 6,
    nome: 'Ramos',
    img: ramos,
  },
  {
    id: 7,
    nome: 'Eji',
    img: eji,
  },
  {
    id: 8,
    nome: 'Julia',
    img: julia,
  },
  {
    id: 9,
    nome: 'Carol',
    img: carol,
  },
]

const FriendsList = () => {
  return (
    <div className='friends-card'>
      <div className='card-header'>
        <h3>Amigos (248)</h3>
        <a href="#">Ver Todos</a>
      </div>

      <div className='friends-grid'>
        {friends.map((i) => (
          <div key={i.id} className='card-fri' >
            <img  src={i.img} alt={i.nome} />
            <p>{i.nome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsList