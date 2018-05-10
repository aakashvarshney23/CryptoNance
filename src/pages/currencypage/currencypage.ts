import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { ActionSheetController } from 'ionic-angular';


import {BitcoinPage} from "../currencypage/bitcoinpage/bitcoinpage";
import {EthereumPage} from "../currencypage/ethereumpage/ethereumpage";
import {LitecoinPage} from "../currencypage/litecoinpage/litecoinpage";
import {RipplePage} from "../currencypage/ripplepage/ripplepage";
import {ViewcurrencyPage} from "./viewcurrency/viewcurrency";

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-currencypage',
    templateUrl: 'currencypage.html',
    // template: `
  // <ion-header>
  //   <ion-navbar>
  //     <ion-title>Heart</ion-title>
  //   </ion-navbar>
  // </ion-header>
  // <ion-content>Tab 1</ion-content>`
})
export class CurrencyPage {

    email: string;

    constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
        this.email = fire.auth.currentUser.email;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoggedinPage');
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },{
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    BitCoin_view(){
        //this.presentActionSheet();
        this.navCtrl.setRoot(BitcoinPage);
    }

    Ethereum_view(){
        //this.presentActionSheet();
        this.navCtrl.setRoot(EthereumPage);
    }

    Litecoin_view(){
        //this.presentActionSheet();
        this.navCtrl.setRoot(LitecoinPage);
    }

    Ripple_view(){
        //this.presentActionSheet();
        this.navCtrl.setRoot(RipplePage);
    }

    Currency_view(){
        this.navCtrl.setRoot(ViewcurrencyPage);
    }
}
