import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { ActionSheetController } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the Hashtable page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hashtable',
    templateUrl: 'hashtable.html',
})
export class Hashtable {

    constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Hashtable');
    }

    goback_home(){
        this.navCtrl.push(HomePage);
    }
}
