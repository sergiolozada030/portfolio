import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a routerLink="/" class="logo">Sergio Perea</a>
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
              >Inicio</a
            >
            <a routerLink="/about" routerLinkActive="active">Sobre mí</a>
            <a routerLink="/services" routerLinkActive="active">Servicios</a>
            <a routerLink="/portfolio" routerLinkActive="active">Portfolio</a>
            <a routerLink="/contact" routerLinkActive="active">Contacto</a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #e5e7eb;
        z-index: 1000;
        height: 4rem;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        height: 100%;
      }

      .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
      }

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #0b74e1;
        text-decoration: none;
      }

      .nav-links {
        display: flex;
        gap: 2rem;
      }

      .nav-links a {
        color: #374151;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: #0b74e1;
      }

      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }
      }
    `,
  ],
})
export class HeaderComponent {}
