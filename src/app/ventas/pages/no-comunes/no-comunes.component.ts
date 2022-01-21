import { Component  } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
 nombre: string = 'Angie';
 genero: string = 'femenino';

 invitacionObj = {
   'masculino': 'invitarlo',
   'femenino': 'invitarla'
 }

 //i18nPlural
clientes : string[] =['Maria', 'Pedro', 'juan', 'hector' , 'angie'];
clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 clientes esperando',
  '=3': 'tenemos 3 clientes esperando',
  'other': 'tenemos # clientes esperando'
}

cambiarNombre() {

  if(this.nombre === 'Angie') {
    this.nombre = 'Hector';
    this.genero = 'masculino'
  } else {
    this.nombre = 'Angie';
    this.genero = 'femenino'
  }
  
}

borrarCliente() {
  this.clientes.pop()

}

//KeyValue Pipe
persona = {
  nombre: 'hector',
  edad: 32,
  direccion: 'calle bureba'
}

//Json Pipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

//Async Pipe
miObservable = interval(1000);

valorPromesa = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('tenemos data de promesa')
  }, 3500);
});

}
