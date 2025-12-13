import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // Rol simulado (vendrá del login)
    const rol = localStorage.getItem('rol');

    // Rol requerido por la ruta
    const rolRuta = route.data['rol'];

    if (rol && rol === rolRuta) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
