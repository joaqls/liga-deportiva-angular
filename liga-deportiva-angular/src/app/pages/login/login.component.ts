import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(rol: string) {
    if (!rol) {
      alert('Selecciona un tipo de usuario');
      return;
    }

    localStorage.setItem('rol', rol);

    switch (rol) {
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'usuario':
        this.router.navigate(['/usuario']);
        break;
      case 'capitan':
        this.router.navigate(['/capitan']);
        break;
      case 'arbitro':
        this.router.navigate(['/arbitro']);
        break;
    }
  }
}