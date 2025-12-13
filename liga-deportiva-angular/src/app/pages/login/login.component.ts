import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (!this.usuario || !this.password) {
      alert('Introduce usuario y contraseña');
      return;
    }

    this.authService.login(this.usuario, this.password).subscribe({
      next: (res: { rol: string; token: string }) => {
        this.authService.setSesion(res.rol, res.token);
        this.router.navigate([`/${res.rol}`]);
      },
      error: () => {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}