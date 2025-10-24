import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <!-- Brand & Description -->
          <div class="footer__brand">
            <h3 class="footer__title">Sergio Perea</h3>
            <p class="footer__description">
              Desarrollador Frontend especializado en Angular, React y tecnologías modernas. Creando
              experiencias web excepcionales.
            </p>
            <div class="footer__social">
              <a
                href="https://github.com/sergioperea"
                class="footer__social-link"
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/sergioperea"
                class="footer__social-link"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/sergioperea"
                class="footer__social-link"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a href="mailto:sergio@email.com" class="footer__social-link" aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h4 class="footer__links-title">Navegación</h4>
            <ul class="footer__links-list">
              <li><a href="/about" class="footer__link">Acerca de Mí</a></li>
              <li><a href="/services" class="footer__link">Servicios</a></li>
              <li><a href="/portfolio" class="footer__link">Portfolio</a></li>
              <li><a href="/contact" class="footer__link">Contacto</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer__links">
            <h4 class="footer__links-title">Servicios</h4>
            <ul class="footer__links-list">
              <li><a href="#" class="footer__link">Desarrollo Web</a></li>
              <li><a href="#" class="footer__link">Aplicaciones SPA</a></li>
              <li><a href="#" class="footer__link">UI/UX Design</a></li>
              <li><a href="#" class="footer__link">Consultoría</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer__contact">
            <h4 class="footer__contact-title">Contacto</h4>
            <div class="footer__contact-info">
              <p class="footer__contact-item">
                <i class="fas fa-envelope"></i>
                sergio@email.com
              </p>
              <p class="footer__contact-item">
                <i class="fas fa-phone"></i>
                +52 (555) 123-4567
              </p>
              <p class="footer__contact-item">
                <i class="fas fa-map-marker-alt"></i>
                Ciudad de México, México
              </p>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__copyright">
            <p>&copy; 2025 Sergio Perea. Todos los derechos reservados.</p>
          </div>
          <div class="footer__legal">
            <a href="#" class="footer__legal-link">Política de Privacidad</a>
            <a href="#" class="footer__legal-link">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
