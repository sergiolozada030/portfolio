import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <section class="page-content">
      <div class="container">
        <h1>Portfolio</h1>
        <div class="portfolio-grid">
          <div class="project-card">
            <h3>Aplicación E-commerce</h3>
            <p>Tienda online desarrollada con Angular 18 y NgRx</p>
            <div class="tech-stack">
              <span class="tech">Angular</span>
              <span class="tech">TypeScript</span>
              <span class="tech">SCSS</span>
            </div>
          </div>
          <div class="project-card">
            <h3>Dashboard Analytics</h3>
            <p>Panel de control con visualización de datos en tiempo real</p>
            <div class="tech-stack">
              <span class="tech">Angular</span>
              <span class="tech">Chart.js</span>
              <span class="tech">Material</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page-content {
        padding: 6rem 2rem 4rem;
        min-height: 80vh;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        color: #1f2937;
        margin-bottom: 3rem;
        text-align: center;
      }
      .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
      }
      .project-card {
        background: white;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .project-card h3 {
        color: #0b74e1;
        margin-bottom: 1rem;
      }
      .project-card p {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      .tech-stack {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .tech {
        background: #e2e8f0;
        color: #475569;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.875rem;
      }
    `,
  ],
})
export class PortfolioComponent {}
