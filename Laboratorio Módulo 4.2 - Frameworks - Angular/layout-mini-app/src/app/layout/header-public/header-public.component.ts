import { Component } from '@angular/core';
import { PublicMenuComponent } from '../public-menu/public-menu.component';
@Component({
  selector: 'app-header-public',
  imports: [PublicMenuComponent],
  templateUrl: './header-public.component.html',
  styleUrl: './header-public.component.scss',
})
export class HeaderPublicComponent {}
