import React from 'react'
import { Link } from 'react-router-dom'

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="gift-animation-container" id="gift-container">
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="0" />
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="1" />
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="2" />
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="3" />
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="4" />
        <img src="/assets/gifts/cadeaux-impact.png" alt="Cadeau" className="gift-item" data-index="5" />
      </div>
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>
      <div className="triangle triangle-3"></div>
      <div className="triangle triangle-4"></div>
      <div className="container">
        <div className="offer-content">
          <div className="offer-badge">OFFRE IMMÉDIATE</div>
          <h2>FRANCHISE OFFERTE</h2>
          <div className="offer-plus">+</div>
          <h3>200€ OFFERT<br /><span>CADEAUX OU VITRES TEINTÉES</span></h3>
          <p className="cta-franchise">Clique sur l'un des coffrets flottants et découvre les cadeaux proposés</p>
          <Link to="/rendez-vous" className="btn-offer">PROFITER DE L'OFFRE</Link>
        </div>
      </div>
    </section>
  )
}

export default OfferSection
