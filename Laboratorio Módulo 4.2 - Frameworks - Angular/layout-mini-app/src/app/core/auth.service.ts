import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly VALID_USER = 'lemoncoder';
  private readonly VALID_PASSWORD = '1234';
  private readonly STORAGE_KEY = 'isLogged';
  private readonly USERNAME_KEY = 'username';

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): boolean {
    const isValid =
      username === this.VALID_USER && password === this.VALID_PASSWORD;
    if (isValid) {
      localStorage.setItem(this.STORAGE_KEY, 'true');
      localStorage.setItem(this.USERNAME_KEY, username);
    }
    return isValid;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }

  isLogged(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }

  getUsername(): string {
    return localStorage.getItem(this.USERNAME_KEY) || '';
  }
}
