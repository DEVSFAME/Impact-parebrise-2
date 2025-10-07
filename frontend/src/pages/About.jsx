import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>À Propos</h1>
          <p>Votre expert en vitrage automobile depuis 7 ans</p>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Notre Expertise</h2>
              <p>
                Depuis 7 ans, Impact Pare-Brise met son expertise au service de votre sécurité. 
                Spécialistes reconnus dans le remplacement et la réparation de pare-brise, 
                nous intervenons dans tout Marseille et les Bouches-du-Rhône.
              </p>
              <p>
                Notre équipe qualifiée utilise exclusivement des matériaux de qualité d'origine 
                constructeur pour garantir votre sécurité et la longévité de nos interventions.
              </p>
              
              <div className="stats">
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Clients satisfaits</p>
                </div>
                <div className="stat-item">
                  <h3>7 ans</h3>
                  <p>D'expérience</p>
                </div>
                <div className="stat-item">
                  <h3>24h</h3>
                  <p>Délai d'intervention</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Travaux garantis</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/assets/images/technicien copie.png" alt="Notre équipe" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <img src="/assets/icons/confiance.png" alt="Confiance" />
              <h3>Confiance</h3>
              <p>Relation de confiance avec plus de 1000 clients satisfaits</p>
            </div>
            <div className="value-card">
              <img src="/assets/icons/garantie.png" alt="Qualité" />
              <h3>Qualité</h3>
              <p>Matériaux d'origine constructeur et travaux garantis</p>
            </div>
            <div className="value-card">
              <img src="/assets/icons/chronometre.png" alt="Rapidité" />
              <h3>Rapidité</h3>
              <p>Intervention dans les 24h partout en région PACA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
