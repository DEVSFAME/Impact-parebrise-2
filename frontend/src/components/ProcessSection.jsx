import React from 'react'

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="section-title">Nous intervenons dans tout Marseille mais pas que !</h2>
        <p className="section-subtitle">Notre équipe se déplace également dans toute la région des Bouches-Du-Rhône pour vous offrir un service optimal.</p>
        <div className="process-steps">
          <div className="step">
            <img src="/assets/icons/numero-1.png" alt="Étape 1" />
            <h3>Prise de Rendez-vous</h3>
            <p>Contactez-nous pour planifier votre intervention</p>
          </div>
          <div className="step">
            <img src="/assets/icons/numero-2.png" alt="Étape 2" />
            <h3>Diagnostic</h3>
            <p>Évaluation gratuite de votre vitrage</p>
          </div>
          <div className="step">
            <img src="/assets/icons/numero-3.png" alt="Étape 3" />
            <h3>Intervention</h3>
            <p>Remplacement ou réparation par nos experts</p>
          </div>
          <div className="step">
            <img src="/assets/icons/numero-quatre.png" alt="Étape 4" />
            <h3>Garantie</h3>
            <p>Service garanti avec suivi qualité</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
