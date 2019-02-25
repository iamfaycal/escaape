import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as Content from "../assets/data/content.json";

@Injectable({
  providedIn: 'root'
})
export class CombinationsService {

  constructor(private storage: Storage) { }

  setService():any {
    let result;
    this.storage.get('combinations')
      .then((val) => {
        if(val != null) {
          result = "Ok"
        } else {
          this.storage.set('combinations', Content.combinations);
          result = "Created";
        }
      });
    return result;  
  }

  getCombinations():any {
    return this.storage.get('combinations');
  }

  updateCombinations(combinations) {
    this.storage.set('combinations', combinations);
  }
}
