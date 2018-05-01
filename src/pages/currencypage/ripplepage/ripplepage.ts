import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {CurrencyPage} from "../currencypage";

/**
 * Generated class for the RipplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-ripplepage',
    templateUrl: 'ripplepage.html',
})
export class RipplePage {

    @ViewChild('username') user;
    @ViewChild('password') password;

    constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    }


    alert(message: string) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }

    goback_currencypage(){
        this.navCtrl.push(CurrencyPage);
    }

}

