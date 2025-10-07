import React from 'react'

const WindshieldSection = () => {
  return (
    <section className="windshield-section">
      <div className="container">
        <div className="windshield-content">
          <div className="windshield-image">
            <img 
              src="/assets/images/pare-brise-technicien.jpg" 
              alt="Pare-brise Impact" 
              className="windshield-img"
            />
          </div>
          <div className="windshield-text">
            <h2>Expertise en Vitrage Automobile</h2>
            <p>
              Spécialistes reconnus dans le remplacement et la réparation de pare-brise, 
              nous mettons notre expertise au service de votre sécurité avec des matériaux 
              de qualité d'origine constructeur.
            </p>
            <div className="expertise-highlights">
              <h3>Notre Engagement Qualité</h3>
              <div className="highlights-list">
                <div className="highlight-item">
                  <i className="fas fa-award"></i>
                  <span>7 ans d'expérience</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>+1000 clients satisfaits</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tools"></i>
                  <span>Équipement professionnel</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Travaux garantis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WindshieldSection
