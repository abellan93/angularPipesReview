import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent {

  nameLower: string = 'raúl';
  nameUpper: string = 'RAÚL';
  nameTitle: string = 'rAÚl ABeLlÁN';

  date: Date = new Date();

}
