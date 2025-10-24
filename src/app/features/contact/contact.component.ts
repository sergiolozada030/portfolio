import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page-content">
      <div class="container">
        <h1>Contacto</h1>
        <div class="contact-content">
          <div class="contact-info">
            <h3>¿Hablamos?</h3>
            <p>Estoy disponible para nuevos proyectos y colaboraciones.</p>

            <div class="contact-methods">
              <div class="contact-item">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <div>
                  <strong>Email</strong>
                  <p>sergio.perea@ejemplo.com</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="icon">
                  <i class="fab fa-linkedin"></i>
                </span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>linkedin.com/in/sergioperea</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <div>
                  <strong>GitHub</strong>
                  <p>github.com/sergioperea</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-submit">Enviar Mensaje</button>
            </form>
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
        max-width: 1000px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        color: #1f2937;
        margin-bottom: 3rem;
        text-align: center;
      }
      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
      }
      .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2rem;
      }
      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
      }
      .icon {
        font-size: 1.5rem;
        color: #0b74e1;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .contact-item strong {
        color: #0b74e1;
        display: block;
        margin-bottom: 0.25rem;
      }
      .contact-item p {
        color: #6b7280;
        margin: 0;
      }
      .form-group {
        margin-bottom: 1.5rem;
      }
      label {
        display: block;
        color: #374151;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      input,
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.375rem;
        font-size: 1rem;
      }
      input:focus,
      textarea:focus {
        outline: none;
        border-color: #0b74e1;
        box-shadow: 0 0 0 3px rgba(11, 116, 225, 0.1);
      }
      .btn-submit {
        background: #0b74e1;
        color: white;
        padding: 0.875rem 2rem;
        border: none;
        border-radius: 0.375rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
      }
      .btn-submit:hover {
        background: #1d4ed8;
      }
      @media (max-width: 768px) {
        .contact-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ContactComponent {}
