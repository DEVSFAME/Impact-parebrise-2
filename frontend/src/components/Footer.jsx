import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="/assets/images/logo-impact-parebrise.png" 
              alt="Impact Pare-Brise" 
              className="footer-logo"
            />
            <p>Expert en remplacement de vitrage automobile.</p>
            <div className="social-links">
              <a href="https://wa.me/33688487360" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.snapchat.com/add/luciano13014" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-snapchat"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574687682034" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/impact.parebrise/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#pare-brise">Pare-brise</Link></li>
              <li><Link to="/services#vitres-laterales">Vitres latérales</Link></li>
              <li><Link to="/services#lunette-arriere">Lunette arrière</Link></li>
              <li><Link to="/services#reparation-impact">Réparation impact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-phone"></i> 
              <a href="tel:0688487360">06 88 48 73 60</a>
            </p>
            <p><i className="fas fa-map-marker-alt"></i> Marseille et Bouches-Du-Rhône</p>
            <p><i className="fas fa-clock"></i> 24h/48 - 5/7</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Impact Pare-Brise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
