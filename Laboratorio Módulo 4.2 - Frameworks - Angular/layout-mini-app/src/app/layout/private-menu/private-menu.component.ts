import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-private-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss',
})
export class PrivateMenuComponent {
  username: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
