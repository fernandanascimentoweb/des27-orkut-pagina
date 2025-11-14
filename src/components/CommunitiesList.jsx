import React from 'react'
import '../styles/comminitiesList.css'
import carros from '../assets/carros.png'
import crazy from '../assets/Crazy.png'
import desenhos from '../assets/desenhos.png'
import books from '../assets/books.png'
import anime from '../assets/anines.png'
import fotos from '../assets/fotos.png'
import cafe from '../assets/cafe.png'
import leitura from '../assets/leitura.png'
import ovo from '../assets/ovo.png'



const grupos = [
  {
    id: 1,
    nome: 'Carros',
    img: carros,
  },
  {
    id: 2,
    nome: 'Crazy',
    img: crazy,
  },
  {
    id: 3,
    nome: 'Desenhos',
    img: desenhos,
  },
  {
    id: 4,
    nome: 'Fotos',
    img: fotos,
  },
  {
    id: 5,
    nome: 'Leitura',
    img: leitura,
  },
  {
    id: 6,
    nome: 'Anines',
    img: anime,
  },
  {
    id: 7,
    nome: 'Meu Ovo',
    img: ovo,
  },
  {
    id: 8,
    nome: 'Cafeee',
    img: cafe,
  },
  {
    id: 9,
    nome: 'My books',
    img: books,
  },
]


const CommunitiesList = () => {
  return (
    <div className="communities-card">
      <div className="card-header">
        <h3>Comunidades (42)</h3>
        <a>Ver todas</a>
      </div>

      <div className="communities-grid">
        {grupos.map((g) => (
          <div key={g.id} className='text-box'>
            <img src={g.img} alt={g.nome} />
            <p>{g.nome}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CommunitiesList