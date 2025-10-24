import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-content">
      <div class="container">
        <h1>Sobre Mí</h1>
        <p>Desarrollador Frontend especializado en Angular y tecnologías modernas.</p>
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
        max-width: 800px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        color: #1f2937;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.125rem;
        line-height: 1.7;
        color: #4b5563;
      }
    `,
  ],
})
export class AboutComponent {}
