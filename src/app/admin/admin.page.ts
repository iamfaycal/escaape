import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { CombinationsService } from '../combinations.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  obj: any;
  formFields = new Array();
  constructor(public navCtrl: NavController, public combinations: CombinationsService) { }

  ngOnInit() {
    this.combinations.getCombinations().then((combinationsarray) => {
      this.obj = combinationsarray;  
    });         
  }

  onSubmit() {
    this.navCtrl.navigateRoot('/admin');
    this.combinations.updateCombinations(this.obj);
  }
  goBack() {
    this.navCtrl.navigateForward('/');
  }

}
