import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="glass-effect"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>IMPACT<br /><span className="hero-accent">PARE-BRISE</span></h1>
          <p className="hero-subtitle">
            Notre expertise en remplacement et réparation<br />
            de vitrages automobiles
          </p>
          <div className="hero-features">
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Partenaire de vos assurances</h3>
              <p>Nous collaborons avec toutes vos assurances</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-euro-sign"></i>
              <h3>Franchise Offerte</h3>
              <p>Économisez sur votre franchise</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gift"></i>
              <h3>Nombreux cadeaux à gagner</h3>
              <p>Nos clients ne repartent jamais les mains vides</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h3>Service Rapide</h3>
              <p>Intervention 24h</p>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/rendez-vous" className="btn-primary">
              <i className="fas fa-calendar-alt"></i>
              PRENDRE RENDEZ-VOUS
            </Link>
            <a href="tel:0688487360" className="btn-secondary">
              <i className="fas fa-phone"></i>
              06 88 48 73 60
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/assets/images/mercedes-hero.png" 
            alt="Mercedes - Impact Pare-Brise" 
            className="floating-car"
          />
          <div className="floating-badge">
            <i className="fas fa-tools"></i>
            <span>Équipement Pro</span>
            <small>Matériel de pointe</small>
          </div>
          <div className="floating-badge-2">
            <i className="fas fa-clock"></i>
            <span>24h/48</span>
            <small>Service d'urgence</small>
          </div>
          <div className="floating-badge-3">
            <i className="fas fa-shield-alt"></i>
            <span>Garantie</span>
            <small>Travaux assurés</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
