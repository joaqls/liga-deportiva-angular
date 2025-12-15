import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://liga-deportiva-angular.onrender.com/api/';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any) {
    return this.http.post(this.apiUrl, usuario);
  }
}