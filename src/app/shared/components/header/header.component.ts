import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a routerLink="/" class="logo">
            <i class="fas fa-code"></i>
            Perea Code
          </a>

          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
              <i class="fas fa-home"></i>
              Inicio
            </a>
            <a routerLink="/about" routerLinkActive="active">
              <i class="fas fa-user"></i>
              Sobre mí
            </a>
            <a routerLink="/services" routerLinkActive="active">
              <i class="fas fa-cogs"></i>
              Servicios
            </a>
            <a routerLink="/portfolio" routerLinkActive="active">
              <i class="fas fa-briefcase"></i>
              Portfolio
            </a>
            <a routerLink="/contact" routerLinkActive="active">
              <i class="fas fa-envelope"></i>
              Contacto
            </a>
          </div>

          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <i class="fas" [ngClass]="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </nav>

        <div class="mobile-nav" [ngClass]="{ open: mobileMenuOpen }">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMobileMenu()"
          >
            <i class="fas fa-home"></i>
            Inicio
          </a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMobileMenu()">
            <i class="fas fa-user"></i>
            Sobre mí
          </a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMobileMenu()">
            <i class="fas fa-cogs"></i>
            Servicios
          </a>
          <a routerLink="/portfolio" routerLinkActive="active" (click)="closeMobileMenu()">
            <i class="fas fa-briefcase"></i>
            Portfolio
          </a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">
            <i class="fas fa-envelope"></i>
            Contacto
          </a>
        </div>
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
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #0b74e1;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        letter-spacing: -0.02em;
      }

      .logo i {
        font-size: 1.25rem;
      }

      .nav-links {
        display: flex;
        gap: 2rem;
      }

      .nav-links a {
        font-family: 'Poppins', sans-serif;
        color: #374151;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .nav-links a i {
        font-size: 0.875rem;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: #0b74e1;
      }

      .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #374151;
        cursor: pointer;
        padding: 0.5rem;
      }

      .mobile-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-bottom: 1px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
      }

      .mobile-nav.open {
        display: flex;
      }

      .mobile-nav a {
        color: #374151;
        text-decoration: none;
        font-weight: 500;
        padding: 0.75rem 0;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-bottom: 1px solid #f3f4f6;
      }

      .mobile-nav a:last-child {
        border-bottom: none;
      }

      .mobile-nav a:hover,
      .mobile-nav a.active {
        color: #0b74e1;
      }

      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }

        .mobile-menu-btn {
          display: block;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
