//import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
//import { ActionSheetController } from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {Wallet} from "../../app/models/Wallet";

import {HashTableProvider} from "../../providers/hash-table/hash-table";
import {HomePage} from "../home/home";
import {Observable} from "rxjs/Observable";
import {Data} from "../../app/models/Data";
import {Hash} from "../../app/models/Hash";
import {Transaction} from "../../app/models/Transaction";


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
    //fbArray: number[] = [0];

    //items: Item[]; //items is set as property

    //take in HashTableProvider as a depency

    initialArray: Array<number> = [];

    hashArray: Array<number> = [];
    //dataArray: number[];

    amt: number;
    trans: number;

    hash:Hash = {
        id : '',
        array: this.hashArray
    }

    hashes: Hash[];

    transact: Transaction;
    transacts: Transaction[];

    constructor(private walletService: HashTableProvider, public navCtrl: NavController, private afs: AngularFirestore) {
        this.walletService.getHashs().subscribe((data) => {
                this.hashes = data;

                for (let data of this.hashes) {

                    if (data.id == "Hashtable") {
                        this.hash = data;
                        console.log('ID2:', this.hash.id);

                        this.hashArray = this.hash.array;
                        //this.updateArray();
                        console.log("Hashtable:", this.hashArray);
                    }
                }
            });

        this.walletService.getTransactions().subscribe((data) => {
            this.transacts = data;
            for (let data of this.transacts) {
                this.transact = data;
                this.amt = this.transact.Amount;
                this.trans = this.transact.TransId;
                this.updateArray();

                console.log("amt, trans:", this.amt, this.trans);
            }
        });


    }

    ionViewDidLoad() {
        // var i;
        // for(i=0; i<1000; i++) {
        //     this.initialArray.push(null);
        // }
        // console.log('ionViewDidLoad Hashtable');
        // this.afs.collection("Hash Data").doc('Hashtable').update({
        //     array: this.initialArray
        // })
        //     .then(function () {
        //         console.log("Sell Amount logged!");
        //     })
        //     .catch(function (error) {
        //         console.error("Error writing document: ", error);
        //     });
    }

    ngOnInit(){

    }

    updateArray(){
        this.afs.collection("Hash Data").doc('Hashtable').update({
            array: this.insertHash(this.hashArray, this.trans, this.amt)//this.hashArray,
        })
            .then(function () {
                console.log("Sell Amount logged!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    goback_home(){
        this.navCtrl.push(HomePage);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    insertHash(fbArray: Array<number>, key: number, value: number) : Array<number> {//

        var hash_var = 100;
        // let HASHED: number[] = [null];
        let count: number = 0;

       for (var i = 0; i < fbArray.length; i++)
        {
            if(hash_var > 14) {
                hash_var = (key * Math.abs(value)) - 7;
            }
        }
        hash_var = hash_var % 13;

        var index = hash_var; //string
        var size=0;

        if (fbArray[index] === null)
        {
            // slot is empty, so insert
            // fbArray[index] = value;
            fbArray.push(value);
        }
        else
        {

            var inserted = false;

            size = fbArray.length;

            for (var i = 0; i < fbArray.length; i++)
            {
                if (fbArray[index] == null)
                {
                    // fbArray[i] = value;
                    fbArray.push(value);
                    inserted = true;
                }
            }
            if (inserted === false) {
                //fbArray[index+1] = value; // placed at the end of fbArray
                fbArray.push(value);
            }
        }


        console.log(fbArray);
        //console.log(HASHED);
        return fbArray;
    }


}