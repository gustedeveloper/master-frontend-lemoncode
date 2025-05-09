import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss',
})
export class PublicMenuComponent {}
