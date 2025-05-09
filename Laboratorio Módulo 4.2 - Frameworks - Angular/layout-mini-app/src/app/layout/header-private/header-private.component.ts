import { Component } from '@angular/core';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-private',
  imports: [PrivateMenuComponent],
  templateUrl: './header-private.component.html',
  styleUrl: './header-private.component.scss',
})
export class HeaderPrivateComponent {
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
