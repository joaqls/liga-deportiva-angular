import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  usuario = '';
  password = '';
  rol = '';
  equipo = '';

  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  registrar() {
    if (!this.usuario || !this.password || !this.rol) {
      alert('Completa los campos obligatorios');
      return;
    }

    // Validar equipo según rol
    if ((this.rol === 'usuario' || this.rol === 'capitan') && !this.equipo) {
      alert('Este rol necesita equipo');
      return;
    }

    const nuevoUsuario: any = {
      usuario: this.usuario,
      password: this.password,
      rol: this.rol
    };

    if (this.rol === 'usuario' || this.rol === 'capitan') {
      nuevoUsuario.equipo = this.equipo;
    }

    this.http.post(this.apiUrl, nuevoUsuario).subscribe(() => {
      alert('Usuario registrado');
      this.router.navigate(['/login']);
    });
  }
}