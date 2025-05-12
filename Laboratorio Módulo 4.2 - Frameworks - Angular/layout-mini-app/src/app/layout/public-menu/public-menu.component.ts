import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-public-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss',
})
export class PublicMenuComponent {}
