import React from 'react'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nos Services de Vitrage</h2>
        <p className="section-subtitle">Une solution pour chaque vitre de votre véhicule</p>
        <div className="services-layout">
          <div className="main-services">
            <div className="service-card-main">
              <video autoPlay loop muted playsInline className="service-video">
                <source src="/assets/videos/vidéo remplacement parebrise.mp4" type="video/mp4" />
              </video>
              <div className="service-card-main-content">
                <img src="/assets/icons/pare-brise.png" alt="Remplacement de pare-brise" />
                <h3>Remplacement de Pare-brise</h3>
                <p>Nous remplaçons votre pare-brise à l'identique avec des vitrages de qualité d'origine constructeur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
