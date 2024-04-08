import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn) {
    return true;
  }
  // Redirect to the login page
  return router.parseUrl('/login');
};
