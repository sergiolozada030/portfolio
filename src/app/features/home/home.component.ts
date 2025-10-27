import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Hola, soy <span class="gradient-text">Sergio Perea</span></h1>
          <h2 class="hero-subtitle">Desarrollador Frontend Angular</h2>
          <p class="hero-description">
            Creo aplicaciones web modernas y experiencias digitales excepcionales utilizando las
            últimas tecnologías como Angular 18+, TypeScript y arquitecturas escalables.
          </p>
          <div class="hero-actions">
            <a routerLink="/portfolio" class="btn btn-primary">Ver Portfolio</a>
            <a routerLink="/contact" class="btn btn-secondary">Contactar</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="" alt="" />
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">Especialidades</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Angular 18+</h3>
            <p>
              Desarrollo con las últimas características de Angular: Signals, Control Flow,
              Standalone Components
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>UI/UX Moderno</h3>
            <p>Diseño responsive y accesible con SCSS, BEM y las mejores prácticas de usabilidad</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>Arquitectura Limpia</h3>
            <p>Código mantenible y escalable siguiendo principios SOLID y patrones de diseño</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 6rem 0 4rem;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        min-height: 80vh;
        display: flex;
        align-items: center;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .hero-title {
        font-family: 'Poppins', sans-serif;
        font-size: 4rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1rem;
        color: #1f2937;
        letter-spacing: -0.02em;
      }

      .gradient-text {
        background: linear-gradient(135deg, #0b74e1, #3b82f6);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .hero-subtitle {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #6b7280;
        margin-bottom: 1.5rem;
        letter-spacing: -0.01em;
      }

      .hero-description {
        font-family: 'Poppins', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.7;
        color: #4b5563;
        margin-bottom: 2rem;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
      }

      .btn {
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .btn-primary {
        background: #0b74e1;
        color: white;
      }

      .btn-primary:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
      }

      .btn-secondary {
        background: transparent;
        color: #0b74e1;
        border: 2px solid #0b74e1;
      }

      .btn-secondary:hover {
        background: #0b74e1;
        color: white;
      }

      .code-snippet {
        background: #1f2937;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .code-header {
        background: #374151;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .dot.red {
        background: #ef4444;
      }
      .dot.yellow {
        background: #f59e0b;
      }
      .dot.green {
        background: #10b981;
      }

      .filename {
        margin-left: auto;
        color: #d1d5db;
        font-size: 0.875rem;
      }

      .code-content {
        padding: 1.5rem;
      }

      .code-content pre {
        margin: 0;
        color: #e5e7eb;
        font-family: 'Fira Code', monospace;
        font-size: 0.875rem;
        line-height: 1.6;
      }

      .features {
        padding: 4rem 0;
      }

      .features .container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 3rem;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.2s;
      }

      .feature-card:hover {
        transform: translateY(-4px);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .feature-card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1f2937;
      }

      .feature-card p {
        color: #6b7280;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .container {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-actions {
          flex-direction: column;
        }

        .features-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {}
