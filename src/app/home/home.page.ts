import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  response: string;
  field1: string;
  field2: string;

  constructor(private storage: Storage) {
    this.storage.set('Testeur1', 'Test1');
    this.storage.set('Testeur2', 'Test2');
    this.storage.set('Testeur3', 'Test3');
  }

  onSubmit() {
    this.storage.get(this.field1).then((val) => {
      if(val == this.field2) {
        this.response = "Correct !";
      } else {
        this.response = "Pas bon !";
      }
    });
  }

}
