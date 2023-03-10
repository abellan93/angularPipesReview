import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  //i18nSelect
  name: string = 'Raúl';
  gender: string = 'Male';

  inviteMap = {
    Male: 'invitarlo',
    Female: 'invitarla',
  };
  changePerson() {
    if (this.gender === 'Male') {
      this.name = 'Irene';
      this.gender = 'Female';
    } else {
      this.name = 'Raúl';
      this.gender = 'Male';
    }
  }
  //i18nPlural
  clients: string[] = ['María', 'Pedro', 'José', 'Juan', 'Raúl', 'Irene'];
  clientMap = {
    '=0': 'no hay clientes en cola',
    '=1': 'hay un cliente en cola',
    other: 'hay # clientes en cola',
  };

  refreshList(){
    this.clients = ['María', 'Pedro', 'José', 'Juan', 'Raúl', 'Irene'];

  }
  deleteClient() {
    this.clients.pop();
  }

  //KeyValue Pipe
  person = {
    name: 'Raúl',
    nickname: 'J4B4W0K3',
    position: 'Frontend Developer',
    old: 29,
    address: ' Jaén, Spain',
  };

  //Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Batman',
      fly: false,
    },
    {
      name: 'Birdman',
      fly: true,
    },
  ];

  //Async Pipe
  myObservable = interval(1000);
}
