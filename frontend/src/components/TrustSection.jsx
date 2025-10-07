import React from 'react'

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <h2>TISSONS UN LIEN DE CONFIANCE</h2>
        <div className="trust-features">
          <div className="trust-item">
            <img src="/assets/icons/garantie.png" alt="Garantie" />
            <h3>Garantie</h3>
            <p>Tous nos travaux sont garantis</p>
          </div>
          <div className="trust-item">
            <img src="/assets/icons/confiance.png" alt="Confiance" />
            <h3>Confiance</h3>
            <p>Plus de 1000 clients satisfaits</p>
          </div>
          <div className="trust-item">
            <img src="/assets/icons/chronometre.png" alt="Rapidité" />
            <h3>Rapidité</h3>
            <p>Intervention dans les 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
