import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {HashTableProvider} from '../../../providers/hash-table/hash-table';
import {CurrencyPage} from "../currencypage";
import {AngularFirestore} from "angularfire2/firestore";
import {Wallet} from "../../../app/models/Wallet";
import {Transaction} from "../../../app/models/Transaction";

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let bitcoin_val = 9375;

@IonicPage()
@Component({
    selector: 'page-bitcoinpage',
    templateUrl: 'bitcoinpage.html',
})
export class BitcoinPage { //sell key = 1;

    @ViewChild('sellamount') sellCoins; //in terms of coin
    @ViewChild('buyamount') buyCoins; //in terms of coin

    trans:Transaction = {
        id : '',
        TransId: 0,
        Amount: 0
    }

    wallets: Wallet[];
    wallet: Wallet;
    wallet2: Wallet;

    userId : string;
    buykey : number;

    bitcoinamount : number;
    totalamount : number; //seller
    bitcoinamount2 : number;
    totalamount2: number; //master
    transaction: number;
    trans_no: number;
    transactionArray: Array<number> = [];

    constructor(private alertCtrl: AlertController,
                private fire: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams,
                public walletService: HashTableProvider,
                private afs: AngularFirestore){

        this.userId = this.fire.auth.currentUser.uid;

        this.walletService.getWallets().subscribe((wallet) =>{
            this.wallets = wallet;
            console.log("Wallets from sell", this.wallets);
            for(let wallet of this.wallets){

                if (wallet.id == this.userId) {
                    this.wallet = wallet;
                    console.log('WALLET ID: ',this.wallet.id);
                    console.log("array", wallet);
                }

                if (wallet.id == 'VAyYAeU9r7YZ2J8tg1aUXc1k3Bk1') {
                    this.wallet2 = wallet;
                    console.log('WALLET2 ID: ', this.wallet2.id);
                }
            }

            this.transactionArray = this.wallet.transaction;
            //this.transaction = this.wallet.transaction;
            this.bitcoinamount = this.wallet.bitcoinamount;
            this.totalamount = this.wallet.totalamount;
            this.bitcoinamount2 = this.wallet2.bitcoinamount;
            this.totalamount2 = this.wallet2.totalamount;

            // this.trans_no = this.wallet.trans_no;
            //this.transaction = this.wallet.transaction[this.wallet.trans_no];

        });

    }

    goback_currencypage(){
        this.navCtrl.push(CurrencyPage);
    }

    sell(){
        if((+this.sellCoins.value * bitcoin_val) > this.bitcoinamount || (+this.sellCoins.value * bitcoin_val) > this.totalamount2){
            this.alert("Invalid Value!");
        }
        else {
            let T = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
            let A = Math.abs(+this.sellCoins.value * bitcoin_val);
            this.addTrans(T, A);

            this.transactionArray.push(T);

            this.afs.collection("USER WALLETS").doc(this.userId).update({
                bitcoinamount: this.bitcoinamount - +this.sellCoins.value * bitcoin_val,
                totalamount: this.totalamount + +this.sellCoins.value * bitcoin_val,
                transaction: this.transactionArray
            })
                .then(function () {
                    console.log("Sell Amount logged!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.afs.collection("USER WALLETS").doc('VAyYAeU9r7YZ2J8tg1aUXc1k3Bk1').update({
                bitcoinamount: this.bitcoinamount2 + +this.sellCoins.value * bitcoin_val,
                totalamount: this.totalamount2 - +this.sellCoins.value * bitcoin_val
            })
                .then(function () {
                    console.log("Sell Amount logged!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }

    }

    buy(){
        if((+this.buyCoins.value * bitcoin_val) > this.totalamount || (+this.buyCoins.value * bitcoin_val) > this.bitcoinamount2){
          this.alert("Invalid Value!");
        }
        else {
            let T = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
            let A = -Math.abs(+this.buyCoins.value * bitcoin_val);
            this.addTrans(T, A);

            this.transactionArray.push(T);

            this.afs.collection("USER WALLETS").doc(this.userId).update({
                totalamount: this.totalamount - +this.buyCoins.value * bitcoin_val,
                bitcoinamount: this.bitcoinamount + +this.buyCoins.value * bitcoin_val,
                transaction: this.transactionArray
            })
                .then(function () {
                    console.log("Sell Amount logged!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.afs.collection("USER WALLETS").doc('VAyYAeU9r7YZ2J8tg1aUXc1k3Bk1').update({
                totalamount: this.totalamount2 + +this.buyCoins.value * bitcoin_val,
                bitcoinamount: this.bitcoinamount2 - +this.buyCoins.value * bitcoin_val
            })
                .then(function () {
                    console.log("Sell Amount logged!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }
    }

    alert(message: string) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }

    addTrans(transid: number, amt: number){
        this.trans.TransId = transid;
        this.trans.Amount = amt;
        this.walletService.addNewTransaction(this.trans);
    }
}

