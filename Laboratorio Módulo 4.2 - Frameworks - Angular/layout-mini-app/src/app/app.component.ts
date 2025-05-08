import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from './layout/header-public/header-public.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPublicComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout-mini-app';
}
