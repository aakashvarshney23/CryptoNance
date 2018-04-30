import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-accountpage',
    templateUrl: 'accountpage.html',
  //   template: `
  // <ion-header>
  //   <ion-navbar>
  //     <ion-title>Star</ion-title>
  //   </ion-navbar>
  // </ion-header>
  // <ion-content>Tab 2</ion-content>`
})
export class AccountPage {

    @ViewChild('username') user;
    @ViewChild('password') password;

    email: string;

    constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
        this.email = fire.auth.currentUser.email;
    }
}

