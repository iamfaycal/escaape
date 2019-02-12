import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { CombinationsService } from '../combinations.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  response: string;
  field1: string;
  field2: string;

  constructor(public navCtrl: NavController, public combinations: CombinationsService) {}

  ngOnInit() {
    this.combinations.setService();
  } 

  onSubmit() {
    // SI LA COMBINAISON EST CORRECTE
    console.log(this.combinations.getCombinations());
    /*this.response = "";
    if(this.field1 == "admin" && this.field2 == "1234") {
      this.navCtrl.navigateForward('/admin');
    } else {
      Content.combinations.forEach((item) => {
        if(item.codename == this.field1 && item.name == this.field2) {
          this.response = item.content;
        }
      });
      if(this.response == "") {
        this.response = "Mauvaise combinaison";
      }
    }*/
    
    /*
    if(typeof Content["default"][this.field1] != 'undefined') {
      if(Content["default"][this.field1].name == this.field2) {
        this.response = Content["default"][this.field1].content;
      }
    } else if(this.field1 == "admin" && this.field2 == "1234") {
      this.navCtrl.navigateRoot('/admin');
    } else {
      this.response = "Pas correct !";
    }
    */
  }
}
