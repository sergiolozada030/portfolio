import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="page-content">
      <div class="container">
        <h1>Servicios</h1>
        <div class="services-grid">
          <div class="service-card">
            <h3>Desarrollo Angular</h3>
            <p>Aplicaciones web modernas con Angular 18+</p>
          </div>
          <div class="service-card">
            <h3>UI/UX Design</h3>
            <p>Diseño de interfaces atractivas y funcionales</p>
          </div>
          <div class="service-card">
            <h3>Consultoría Técnica</h3>
            <p>Asesoramiento en arquitectura y mejores prácticas</p>
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
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .service-card {
        background: white;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .service-card h3 {
        color: #0b74e1;
        margin-bottom: 1rem;
      }
      .service-card p {
        color: #6b7280;
        line-height: 1.6;
      }
    `,
  ],
})
export class ServicesComponent {}
