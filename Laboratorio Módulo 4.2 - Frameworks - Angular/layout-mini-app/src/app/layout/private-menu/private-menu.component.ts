import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss',
})
export class PrivateMenuComponent {}
