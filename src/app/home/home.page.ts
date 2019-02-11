import { Component } from '@angular/core';
import * as Content from "../../assets/data/content.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  response: string;
  field1: string;
  field2: string;

  constructor() {
  }

  onSubmit() {
    if(typeof Content["default"][this.field1] != 'undefined' && Content["default"][this.field1].name == this.field2) {
      this.response = Content["default"][this.field1].content;
    } else {
      this.response = "Pas correct !";
    } 
  }
}
