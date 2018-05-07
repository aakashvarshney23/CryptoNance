import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
//import { ActionSheetController } from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {Wallet} from "../../../app/models/Wallet";

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
    // item:Wallet = { //filled in by form in home.html
    //     title: '',
    //     description: ''
    // }

    userId : string;

    constructor(private walletService: HashTableProvider, public navCtrl: NavController, private fire: AngularFireAuth) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad add-wallet');

        // console.log('uid',this.fire.auth.currentUser.uid);
    }

    ngOnInit(){

    }


    // onReg(uid: string){
    //     this.wallet.id = this.userId;
    //     this.walletService.addWallet(this.wallet, this.userId);//, this.userId); //pass in item which is submitted through the form
    // }

    // onSubmit(){
    //     if(this.item.title != '' && this.item.description != ''){
    //         this.itemService.addItem(this.item); //pass in item which is submitted through the form
    //         this.item.title = ' ';
    //         this.item.description = ' ';
    //     }
    // }
}