import React from 'react'
import { Link } from 'react-router-dom'

const RendezVous = () => {
  return (
    <div className="rendez-vous-page">
      <section className="page-header">
        <div className="container">
          <h1>Prendre Rendez-vous</h1>
          <p>Planifiez votre intervention en quelques clics</p>
        </div>
      </section>
      
      <section className="booking-section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-info">
              <h2>Réservez votre créneau</h2>
              <p>Notre équipe se déplace à votre domicile ou lieu de travail pour toute intervention.</p>
              
              <div className="booking-features">
                <div className="booking-feature">
                  <i className="fas fa-calendar-alt"></i>
                  <div>
                    <h4>Rendez-vous flexible</h4>
                    <p>Choisissez le créneau qui vous convient</p>
                  </div>
                </div>
                <div className="booking-feature">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Intervention à domicile</h4>
                    <p>Nous venons directement chez vous</p>
                  </div>
                </div>
                <div className="booking-feature">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Devis gratuit</h4>
                    <p>Évaluation sans engagement</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-emergency">
                <h3>Urgence ?</h3>
                <p>Pour une intervention d'urgence, contactez-nous directement</p>
                <Link to="tel:0688487360" className="btn-emergency">
                  <i className="fas fa-phone"></i>
                  Appeler maintenant
                </Link>
              </div>
            </div>
            
            <div className="booking-form-container">
              <div className="booking-form">
                <h3><i className="fas fa-calendar-check"></i> Formulaire de réservation</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Type de service</label>
                    <select id="service" name="service" required>
                      <option value="">Sélectionnez un service</option>
                      <option value="pare-brise">Remplacement pare-brise</option>
                      <option value="reparation">Réparation impact</option>
                      <option value="vitres-laterales">Vitres latérales</option>
                      <option value="lunette">Lunette arrière</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (optionnel)</label>
                    <textarea id="message" name="message" rows="4" placeholder="Décrivez votre demande..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary">
                    <i className="fas fa-calendar-plus"></i>
                    Demander un rendez-vous
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RendezVous
