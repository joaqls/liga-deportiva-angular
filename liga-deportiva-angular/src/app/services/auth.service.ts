import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rolSubject = new BehaviorSubject<string | null>(null);
  rol$ = this.rolSubject.asObservable();

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    const rol = localStorage.getItem('rol');
    this.rolSubject.next(rol);
  }

  login(usuario: string, password: string) {
    return this.http.post<{ token: string; rol: string }>(
      `${this.apiUrl}/login`,
      { usuario, password }
    );
  }

  setSesion(rol: string, token: string) {
    localStorage.setItem('rol', rol);
    localStorage.setItem('token', token);
    this.rolSubject.next(rol);
  }

  logout() {
    localStorage.clear();
    this.rolSubject.next(null);
  }

  getRol() {
    return this.rolSubject.value;
  }
}