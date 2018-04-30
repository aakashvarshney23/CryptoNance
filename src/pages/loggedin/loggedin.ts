import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { ActionSheetController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';

import {CurrencyPage} from "../currencypage/currencypage"
import {AccountPage} from "../accountpage/accountpage"

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    //  selector: 'page-loggedin',
    // templateUrl: 'loggedin.html',
    template: `<ion-tabs>
    <ion-tab [root]="tab1Root" color = "primary" >
            Currencies
    </ion-tab>
    <ion-tab [root]="tab2Root" color = "secondary" >
            Account
    </ion-tab>
    </ion-tabs>`
})

export class LoggedinPage {

    email: string;

    tab1Root = CurrencyPage;
    tab2Root = AccountPage;

    constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams){//, private browserTab: BrowserTab) {
        this.email = fire.auth.currentUser.email;

        // browserTab.isAvailable()
        //     .then(isAvailable => {
        //         if (isAvailable) {
        //             browserTab.openUrl('https://ionic.io');
        //         } else {
        //             // open URL with InAppBrowser instead or SafariViewController
        //         }
        //     });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoggedinPage');
    }

}
