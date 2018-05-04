//import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
//import { ActionSheetController } from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {Item} from "../../app/models/Item";

import {HashTableProvider} from "../../providers/hash-table/hash-table";
import {HomePage} from "../home/home";
import {Observable} from "rxjs/Observable";


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
//export class Hashtable {

    //private accountInfo: AngularFirestoreCollection<Account>;
    //accounts: Observable<AccountId[]>

    //public actionSheetCtrl: ActionSheetController,
    // constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public hashTable: HashTableProvider, private readonly afs: AngularFirestore) {
    //     //this.hashTable.create();
    //     //this.accountInfo = afs.collection<Account>('account info');

    // }

export class Hashtable implements OnInit{
    items: Item[]; //items is set as property

    //take in HashTableProvider as a depency
    constructor(private itemService: HashTableProvider, public navCtrl: NavController){

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Hashtable');
    }

    //where you do the initilizations and do the fetching of stuff
    ngOnInit(){ //life cycle method to run automically when component generated
        //console.log("Ng did init");
        this.itemService.getItems().subscribe(items => {
            //console.log(items);
            this.items = items; // items coming from the service are being set to the items property
        });
    }

    deleteItem(event,item){
        this.itemService.deleteItem(item);
    }

    goback_home(){
        this.navCtrl.push(HomePage);
    }

}