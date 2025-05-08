import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-public',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-public.component.html',
  styleUrl: './header-public.component.scss',
})
export class HeaderPublicComponent {}
