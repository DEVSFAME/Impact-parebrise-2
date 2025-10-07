import React from 'react'

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Nos Services</h1>
          <p>Solutions complètes de vitrage automobile</p>
        </div>
      </section>
      
      <section className="services-detail">
        <div className="container">
          <div className="service-detail-card">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <img src="/assets/icons/pare-brise.png" alt="Pare-brise" className="service-icon" />
                <h2>Remplacement de Pare-brise</h2>
                <p>Service professionnel de remplacement de pare-brise avec vitrages d'origine constructeur.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Vitrages d'origine constructeur</li>
                  <li><i className="fas fa-check"></i> Installation professionnelle</li>
                  <li><i className="fas fa-check"></i> Garantie constructeur</li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src="/assets/images/pare-brise-technicien.jpg" alt="Remplacement pare-brise" />
              </div>
            </div>
          </div>
          
          <div className="service-detail-card reverse">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <img src="/assets/icons/Reparation impact.png" alt="Réparation" className="service-icon" />
                <h2>Réparation d'Impact</h2>
                <p>Réparation rapide et efficace des impacts pour éviter le remplacement complet.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Intervention rapide</li>
                  <li><i className="fas fa-check"></i> Économique</li>
                  <li><i className="fas fa-check"></i> Résultat invisible</li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src="/assets/images/fissure impact verre.jpg" alt="Réparation impact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
