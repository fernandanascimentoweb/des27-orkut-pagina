import React from 'react'
import '../styles/profileinfo.css'

import coracao from '../assets/Heart.png'
import sorriso from '../assets/Smiley.png'
import estrela from '../assets/Star.png'
import likes from '../assets/ThumbsUp.png'

const ProfileInfo = () => {
  return (
    <section className="profile-info">
      <h2>Boa tarde, Iuri Silva</h2>

      <div className="quote">
        Programar sem café é igual poeta sem poesia.
      </div>

      {/* ÍCONES */}
      <div className="info-icons">

        {/* Fã */}
        <div className='icons-card'>
          <p >Fã</p>
          <div className='card-text'>
            <img src={estrela} alt="estrela" />
            <p>85</p>
          </div>
        </div>

        {/* Confiável */}
        <div className='icons-card'>
          <p>Confiável</p>
          <div className='card-text'>
            <img src={sorriso} alt="sorriso" />
            <img src={sorriso} alt="sorriso" />
          </div>
        </div>

        {/* Legal */}
        <div className='icons-card'>
          <p>Legal</p>
          <div className='card-text'>
            <img src={likes} alt="like" />
            <img src={likes} alt="like" />
            <img src={likes} alt="like" />
          </div>
        </div>

        {/* Sexy */}
        <div className='icons-card'>
          <p>Sexy</p>
          <div className='card-text'>
            <img src={coracao} alt="coração" />
            <img src={coracao} alt="coração" />
          </div>
        </div>

      </div>

      {/* LISTA DE INFO */}
      <div className="info-list">
        <p><strong>Relacionamento:</strong> Solteiro</p>
        <p><strong>Aniversário:</strong> 21 de julho</p>
        <p><strong>Idade:</strong> 22</p>
        <p><strong>Interesses no Orkut:</strong> Solteiro</p>
        <p><strong>Quem sou eu:</strong> Programador</p>
        <p><strong>Filhos:</strong> Não</p>
        <p><strong>Sexo:</strong> Masculino</p>
        <p><strong>Fumo:</strong> Não</p>
        <p><strong>Bebo:</strong> Depende</p>
        <p><strong>Moro:</strong> Guarantã</p>
        <p><strong>País:</strong> Brasil</p>
        <p><strong>Cidade natal:</strong> São Paulo</p>

        {/* TAGS MÚSICAS */}
        <div className="tag-box">
          <strong>Músicas:</strong>
          <span className="tag">Trap</span>
          <span className="tag">Rap</span>
          <span className="tag">Indie</span>
          <a href="#" className='pink'>Ver todos</a>
        </div>

        {/* TAGS FILMES */}
        <div className="tag-box">
          <strong>Filmes:</strong>
          <span className="tag">A rede social</span>
          <span className="tag">Meu amigo Totoro</span>
          <a href="#" className='pink'>Ver todos</a>
        </div>
      </div>

    </section>
  )
}

export default ProfileInfo
