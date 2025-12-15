import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: any = null;
  private apiUrl = 'https://liga-deportiva-angular.onrender.com/api';

  constructor(private http: HttpClient) {
    // 🔑 Recuperar sesión si existe
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuarioActual = JSON.parse(usuarioGuardado);
    }
  }

  login(usuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { usuario, password });
  }

  setUsuario(usuario: any) {
    this.usuarioActual = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {
    return this.usuarioActual;
  }

  isLogged(): boolean {
    return this.usuarioActual !== null;
  }

  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');
  }
}