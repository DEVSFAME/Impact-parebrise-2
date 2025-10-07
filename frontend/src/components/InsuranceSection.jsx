import React from 'react'

const InsuranceSection = () => {
  // Liste des logos d'assurance disponibles
  const insuranceLogos = [
    { src: '/assets/logos/axa.png', alt: 'AXA' },
    { src: '/assets/logos/MAIF_Logo_assureur_militant.png', alt: 'MAIF' },
    { src: '/assets/logos/Logo_Macif.svg.png', alt: 'MACIF' },
    { src: '/assets/logos/groupama.png', alt: 'Groupama' },
    { src: '/assets/logos/gan.png', alt: 'GAN' },
    { src: '/assets/logos/Allianz.png', alt: 'Allianz' },
    { src: '/assets/logos/assureo.webp', alt: 'ASSUREO' },
    { src: '/assets/logos/abeille-assurance.png', alt: 'Abeille Assurances' },
    { src: '/assets/logos/april.png', alt: 'April' },
    { src: '/assets/logos/Direct_Assurance_logo_2009.png', alt: 'Direct Assurance' },
    { src: '/assets/logos/euro_assurance_600x600-min.png', alt: 'Euro Assurance' },
    { src: '/assets/logos/eurofil.png', alt: 'Eurofil' },
    { src: '/assets/logos/generali-assurance.png', alt: 'Generali' },
    { src: '/assets/logos/GMF_logo.png', alt: 'GMF' },
    { src: '/assets/logos/Lolivier.png', alt: 'L\'Olivier Assurance' },
    { src: '/assets/logos/Thelem_logo.jpg', alt: 'Thélem' }
  ]

  return (
    <section className="insurance-section">
      <div className="container">
        <h2 className="section-title">Partenaires Assurances</h2>
        <p className="section-subtitle">Nous travaillons avec toutes les compagnies d'assurance</p>
        <div className="insurance-logos-container">
          <div className="insurance-logos-scroll">
            {insuranceLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt}
                onError={(e) => {
                  console.error(`Erreur de chargement du logo: ${logo.src}`);
                  e.target.style.display = 'none';
                }}
                loading="lazy"
              />
            ))}
            {/* Duplication pour l'effet de défilement continu */}
            {insuranceLogos.map((logo, index) => (
              <img 
                key={`duplicate-${index}`}
                src={logo.src} 
                alt={logo.alt}
                onError={(e) => {
                  console.error(`Erreur de chargement du logo: ${logo.src}`);
                  e.target.style.display = 'none';
                }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection
