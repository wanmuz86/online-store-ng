import { CanActivateFn, Router } from '@angular/router';
// A method provided from Angular Core allow us to inject a service
// Into a Function Component
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn)  {
    return true;
  }
  else {
    return router.navigate(['/'])
  }
};
