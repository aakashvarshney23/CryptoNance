import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alertCtrl: AlertController) {


  }

  openIt() {
     let alert = this.alertCtrl.create ({
       title: "Why",
       subTitle: "I told you not to click",
       buttons: [
         {
           text: "Apologize"
         }
       ]
     })
     alert.present();
  }

}

// public navCtrl: NavController
