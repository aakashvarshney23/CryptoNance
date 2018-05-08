import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

import {HashTableProvider} from '../../../providers/hash-table/hash-table';
import {CurrencyPage} from "../currencypage";
import {AngularFirestore} from "angularfire2/firestore";
import {Wallet} from "../../../app/models/Wallet";
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

    wallets: Wallet[];
    wallet: Wallet;
    wallet2: Wallet;

    userId : string;
    buykey : number;


    bitcoinamount : number;
    totalamount : number; //seller
    bitcoinamount2 : number;
    totalamount2: number; //master

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
                //if(this.wallets.length > 0 ) {
                if (wallet.id == this.userId) {
                    this.wallet = wallet;
                    console.log('WALLET ID: ',this.wallet.id);
                }

                if (wallet.id == 'em9dpOy3k0YAIK3zXTezlyvmtUu1') {
                    this.wallet2 = wallet;
                    console.log('WALLET2 ID: ',this.wallet.id);
                }

                //}
            }

            this.bitcoinamount = this.wallet.bitcoinamount;
            this.totalamount = this.wallet.totalamount;
            this.bitcoinamount2 = this.wallet2.bitcoinamount;
            this.totalamount2 = this.wallet2.totalamount;

        });

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

    sell(){

        this.afs.collection("account info").doc(this.userId).update({
            bitcoinamount : this.bitcoinamount - this.sellCoins.value * bitcoin_val,
            totalamount : this.totalamount + this.sellCoins.value * bitcoin_val
        })
            .then(function() {
                console.log("Sell Amount logged!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

        this.afs.collection("account info").doc('em9dpOy3k0YAIK3zXTezlyvmtUu1').update({
            bitcoinamount : this.bitcoinamount2 + this.sellCoins.value * bitcoin_val,
            totalamount : this.totalamount2 - this.sellCoins.value * bitcoin_val
        })
            .then(function() {
                console.log("Sell Amount logged!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

    }

    prompt() {
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Bitcoin',
                    handler: () => {
                        this.buykey = 1;
                    }
                },
                {
                    text: 'Ethereum',
                    handler: () => {
                        this.buykey = 2;
                    }
                },
                {
                    text: 'Litecoin',
                    handler: () => {
                        this.buykey = 3;
                    }
                },
                {
                    text: 'Ripple',
                    handler: () => {
                        this.buykey = 4;
                    }
                }
            ]

        });
        confirm.present();
    }

    buy(){
        //get input from the user on which currency they want to buy
        //get input from the user how much they want to buy
        //search for seller from list of wallets who is selling with the given amount
        //deduct sellamount from certain field of seller based on sell key
        //add buyamount to certain field of user
        //generate transaction id each for user and buyer in hashtable
        //this.prompt();


        this.afs.collection("account info").doc(this.userId).update({
            totalamount : this.totalamount - this.buyCoins.value * bitcoin_val,
            bitcoinamount : this.bitcoinamount + this.buyCoins.value * bitcoin_val
        })
            .then(function() {
                console.log("Sell Amount logged!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

        this.afs.collection("account info").doc('em9dpOy3k0YAIK3zXTezlyvmtUu1').update({
            totalamount : this.totalamount2 + this.buyCoins.value * bitcoin_val,
            bitcoinamount : this.bitcoinamount2 - this.buyCoins.value * bitcoin_val
        })
            .then(function() {
                console.log("Sell Amount logged!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

    }
}

