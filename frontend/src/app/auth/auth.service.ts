import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(): boolean {
    return !!localStorage.getItem('token');
  }
}
