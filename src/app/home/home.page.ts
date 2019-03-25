import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { CombinationsService } from '../combinations.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public combinations: CombinationsService, private sanitizer: DomSanitizer) {}

  response: SafeHtml;
  name: string;
  codename: string;

  ngOnInit() {
    this.combinations.setService();
  } 

  onSubmit() {
    if(this.name == "admin" && this.codename == "1234") {
      this.navCtrl.navigateForward('/admin');
    } else {
      this.combinations.getCombinations().then((combinations) => {
        combinations.forEach((item) => {
          if(item.name == this.name.toLocaleLowerCase() && item.codename == this.codename.toLocaleLowerCase()) {
            this.response = this.sanitizer.bypassSecurityTrustHtml(item.content);
          }
        });
        if(this.response == "") {
          this.response = this.sanitizer.bypassSecurityTrustHtml("<ion-card-content class=results-green><p>Aucune cible ne correspond à ce prénom.<br/>Veillez à bien écrire le nom de code et le prénom uniquement.</p></ion-card-content>");
        }
      });
    }
  }
}
