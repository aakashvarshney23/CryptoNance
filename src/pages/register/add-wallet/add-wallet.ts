import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
//import { ActionSheetController } from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {Item} from "../../../app/models/Item";

import {HashTableProvider} from "../../../providers/hash-table/hash-table";
import {HomePage} from "../../home/home";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for add-wallet page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-wallet',
    templateUrl: 'add-wallet.html',
})

export class AddWallet implements OnInit {
    item:Item = { //filled in by form in home.html
        title: '',
        description: ''
    }

    constructor(private itemService: HashTableProvider, public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad add-wallet');
    }

    ngOnInit(){

    }

    onSubmit(){
        if(this.item.title != '' && this.item.description != ''){
            this.itemService.addItem(this.item); //pass in item which is submitted through the form
            this.item.title = ' ';
            this.item.description = ' ';
        }
    }
}