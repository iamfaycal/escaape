import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { CombinationsService } from '../combinations.service';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/htmlmixed/htmlmixed';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit {
  
  obj: any;
  formFields = new Array();
  temp = "<ion-card-header> <ion-card-subtitle>Mission 1746</ion-card-subtitle><hr/> <ion-card-title><strong>DOSSIER JESSICA / LYNX</strong></ion-card-title></ion-card-header><ion-card-content>Nous pensons que Jessica est le bras droit de RENARD. En piratant les mails de Jessica nous avons appris qu’elle était enceinte. <br/> <br/><strong class='title'>CONSOMMATION D'ALCOOL : <span style='color: red;'>NON AUTORISE</span></strong> <br/> Lorsqu’une femme enceinte consomme une boisson alcoolisée, l’alcool passe du sang maternel vers le sang du fœtus, au travers du placenta. <br/> <br/>La concentration en alcool dans le sang du bébé est rapidement aussi élevée que dans le sang de la mère. Cela peut provoquer des malformations cérébrales et/ou physiques chez l’enfant</ion-card-content><ion-card-content class='green'>Code : nombre de tampon sur la carte de fidélité <div class='box-container'> <div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box box-full'></div></div></ion-card-content>"
  constructor(public navCtrl: NavController, public combinations: CombinationsService) { }

  ngOnInit() {
    this.combinations.getCombinations().then((combinationsarray) => {
      this.obj = combinationsarray;  
    });         
  }

  onSubmit() {
    this.navCtrl.navigateRoot('/admin');
    this.combinations.updateCombinations(this.obj);
    //this.toast.show(`I'm a toast`, '5000', 'center');
  }
  goBack() {
    this.navCtrl.navigateForward('/');
  }

  formatHTML(text) {
    return text.replace("> <", "><").replace(/\s\s/gm, " ").replace(/(<\/*[ '=:;a-z0-9-]*\/*>)/gm, "\n$1\n").replace(/(\n\n|\n \n|\n )/gm, "\n").trim();;
  }

}
