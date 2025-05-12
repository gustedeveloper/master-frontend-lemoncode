import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderPrivateComponent } from './layout/header-private/header-private.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout-mini-app';

  constructor(public authService: AuthService, private router: Router) {}
}
