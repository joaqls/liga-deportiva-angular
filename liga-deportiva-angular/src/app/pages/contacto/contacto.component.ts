import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  inscripcion = {
    nombre: '',
    email: '',
    deporte: ''
  };

  enviarMensaje() {
    console.log('Mensaje enviado', this.contacto);
    alert('Mensaje enviado correctamente');
    this.contacto = { nombre: '', email: '', mensaje: '' };
  }

  inscribirse() {
    console.log('Inscripción', this.inscripcion);
    alert('Inscripción realizada');
    this.inscripcion = { nombre: '', email: '', deporte: '' };
  }
}
