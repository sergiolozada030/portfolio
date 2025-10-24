import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/simple-header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly showScrollButton = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollButton();
  }

  private updateScrollButton(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollButton.set(scrollTop > 300);
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
