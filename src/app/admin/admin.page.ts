import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import * as Content from "../../assets/data/content.json";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  obj: any;
  formFields = new Array();
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.obj = Content.combinations;           
  }

  onSubmit() {
    this.navCtrl.navigateRoot('/');
  }

}
