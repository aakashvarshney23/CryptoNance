import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {HashTableProvider} from "../../providers/hash-table/hash-table";
import {Wallet} from "../../app/models/Wallet";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-accountpage',
    templateUrl: 'accountpage.html',
  //   template: `
  // <ion-header>
  //   <ion-navbar>
  //     <ion-title>Star</ion-title>
  //   </ion-navbar>
  // </ion-header>
  // <ion-content>Tab 2</ion-content>`
})
export class AccountPage implements OnInit{

    @ViewChild('bitcoin') bitcoin;
    @ViewChild('ethereum') ethereum;
    @ViewChild('litecoin') litecoin;
    @ViewChild('ripple') ripple;
    @ViewChild('total') total;

    //bitcoin : any;

    walletDoc : AngularFirestoreDocument <Wallet>;

    userwallet : Observable<Wallet>;
    wallets: Wallet[];
    wallet: Wallet;

    email: string;
    userId: string;

    // linkRef: AngularFirestoreDocument<any>;
    // link: Observable<any>;
    // path: string;

    //wallets: AngularFireList<any>;

    transactionArray : Array<number> = [];

    constructor(private fire: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams,
                private walletService: HashTableProvider,
                private afs: AngularFirestore,
                public alertCtrl: AlertController
                ){
                // private db: AngularFireDatabase) {

        this.email = fire.auth.currentUser.email;

        this.userId = this.fire.auth.currentUser.uid;

        console.log('logged in user id', this.userId);

        //this.wallets = db.list('account info');
    }

    ngOnInit(){
        // this.walletDoc = this.walletService.getWalletDoc();
        //
        // this.walletDoc.ref.get().then(function(doc) {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });


        // this.walletService.getWallet().subscribe(wallet => {
        //     this.wallet = wallet; // items coming from the service are being set to the items property
        //     console.log("wallet", this.wallet);
        //     console.log("wallet id:", this.wallet.id);
        // });
        //
        this.walletService.getWallets().subscribe(wallets =>{
            this.wallets = wallets;
            console.log("observable wallets", wallets);
            console.log("wallet.id", wallets[1].id);
        });
    }

    updateFields(){

        this.afs.collection('USER WALLETS').doc(this.userId).update({
             bitcoinamount: +this.bitcoin.value,
            ethereumamount: +this.ethereum.value,
            litecoinamount: +this.litecoin.value,
            ripplecurrencyamount: +this.ripple.value
        })
            .then(function() {
                console.log("Bitcoin amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    updateBitcoinField(){

        this.afs.collection('USER WALLETS').doc(this.userId).update({
             bitcoinamount: +this.bitcoin.value,
            // ethereumamount: this.ethereum.value,
            // litecoinamount: this.litecoin.value,
            // ripplecurrencyamount: this.ripple.value
        })
            .then(function() {
                console.log("Bitcoin amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    updateEthereumField(){

        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
             ethereumamount: +this.ethereum.value,
            // litecoinamount: this.litecoin.value,
            // ripplecurrencyamount: this.ripple.value
        })
            .then(function() {
                console.log("Ethereum amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    updateLitecoinField(){

        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            //ethereumamount: this.ethereum.value,
             litecoinamount: +this.litecoin.value,
            // ripplecurrencyamount: this.ripple.value
        })
            .then(function() {
                console.log("Litecoin amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    updateRippleField(){

        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            // ethereumamount: this.ethereum.value,
            // litecoinamount: this.litecoin.value,
             ripplecurrencyamount: +this.ripple.value
        })
            .then(function() {
                console.log("Ripple amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    updateAmountField(){
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            // ethereumamount: this.ethereum.value,
            // litecoinamount: this.litecoin.value,
            //ripplecurrencyamount: this.ripple.value
            totalamount: +this.total.value
        })
            .then(function() {
                console.log("Total amount successfully updated");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }
}

