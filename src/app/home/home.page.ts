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
    this.response = "";
    if(this.field1 == "admin" && this.field2 == "1234") {
      this.navCtrl.navigateForward('/admin');
    } else {
      this.combinations.getCombinations().then((combinations) => {
        combinations.forEach((item) => {
          if(item.codename == this.field1 && item.name == this.field2) {
            this.response = item.content;
          }
        });
        if(this.response == "") {
          this.response = "Mauvaise combinaison";
        }
      });
    }
  }
}
