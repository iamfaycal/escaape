import { Component } from '@angular/core';
import * as Content from "../../assets/data/content.json"

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
  }

  onSubmit() {
    this.storage.get(this.field1).then((val) => {
      if(val == this.field2) {
        this.response = "Correct !";
      } else {
        this.response = "Pas correct !";
      }
    });
  }

}
