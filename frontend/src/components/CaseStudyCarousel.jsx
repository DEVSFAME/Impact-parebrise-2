import React from 'react'

const CaseStudyCarousel = () => {
  return (
    <section className="case-study-carousel-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Remplacement de lunette arrière</h2>
          <p className="section-subtitle-case-study">Peugeot 3008 Hybrid – Intervention en 3 étapes</p>
        </div>
        <div className="carousel-container">
          <div className="carousel-track-container">
            <div className="carousel-slide current-slide">
              <div className="slide-content">
                <div className="slide-text">
                  <div className="step-number">
                    <span>01</span>
                  </div>
                  <h3>Inspection et Préparation</h3>
                  <p>Diagnostic professionnel et vérification de la référence du vitrage.</p>
                </div>
                <div className="slide-image">
                  <img src="/assets/cases/PEUGEOT_0286.JPG" alt="Inspection Peugeot 3008" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyCarousel
