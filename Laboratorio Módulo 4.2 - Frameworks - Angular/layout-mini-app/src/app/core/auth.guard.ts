import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: any, state: any): boolean | UrlTree {
    const isLogged = this.auth.isLogged();
    const url = state.url;

    // Si está logueado y va a login o home, redirige a dashboard
    if (isLogged && (url === '/login' || url === '/home' || url === '/')) {
      return this.router.parseUrl('/dashboard');
    }
    // Si no está logueado y va a una ruta privada, redirige a login
    if (
      !isLogged &&
      ['/dashboard', '/create', '/gallery', '/profile'].includes(url)
    ) {
      return this.router.parseUrl('/home');
    }
    return true;
  }
}
