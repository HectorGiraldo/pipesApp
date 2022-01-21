import { Component,  } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'hector giraldo';
  nombreUpper: string = 'HECTOR GIRALDO';
  nombreTitle: string = 'hECtor gIraLdo';

  fecha: Date = new Date();


}
