import { Component } from '@angular/core';
import { File } from '@ionic-native/file';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) { }

  init() {
    File.checkFile(File.dataDirectory, "test.txt")
      .then(async _ => { const toast = await this.toastController.create({
        message: 'File exists',
        duration: 2000
      })})
      .catch(async err => { const toast = await this.toastController.create({
        message: 'File has to be created',
        duration: 2000
      })});
      ///this.toast.present();
  }

  field1 = ""; 
  field2 = "";
  response = "";

  onSubmit() {
    this.init();
    File.createFile(File.dataDirectory, "test.txt", false)
      .then(FileEntry => File.writeExistingFile(File.dataDirectory, "test.txt", "PETIT JEU"))
      .catch(err => this.response = "Erreur poto");
  }

  onRead() {
    File.readAsText(File.dataDirectory, "test.txt")
      .then(string => this.response = string);
  }

}
