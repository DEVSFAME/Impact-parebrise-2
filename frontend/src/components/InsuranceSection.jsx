import React from 'react'

const InsuranceSection = () => {
  return (
    <section className="insurance-section">
      <div className="container">
        <h2 className="section-title">Partenaires Assurances</h2>
        <p className="section-subtitle">Nous travaillons avec toutes les compagnies d'assurance</p>
        <div className="insurance-logos-container">
          <div className="insurance-logos-scroll">
            <img src="/assets/logos/axa.png" alt="AXA" />
            <img src="/assets/logos/MAIF_Logo_assureur_militant.png" alt="MAIF" />
            <img src="/assets/logos/Logo_Macif.svg.png" alt="MACIF" />
            <img src="/assets/logos/groupama.png" alt="Groupama" />
            <img src="/assets/logos/gan.png" alt="GAN" />
            <img src="/assets/logos/Allianz.png" alt="Allianz" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection
