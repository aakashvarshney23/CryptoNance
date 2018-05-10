import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { ActionSheetController } from 'ionic-angular';
import {HashTableProvider} from "../../../providers/hash-table/hash-table";
import MergeSort from "./mergesort";
import {Transaction} from "../../../app/models/Transaction";
import {Wallet} from "../../../app/models/Wallet";
import {Data} from "../../../app/models/Data";
import {AngularFirestore} from "angularfire2/firestore";
import {CurrencyPage} from "../currencypage";


/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-viewcurrency',
    templateUrl: 'viewcurrency.html',
    // template: `
    // <ion-header>
    //   <ion-navbar>
    //     <ion-title>Heart</ion-title>
    //   </ion-navbar>
    // </ion-header>
    // <ion-content>Tab 1</ion-content>`
})
export class ViewcurrencyPage implements OnInit{

    email: string;

    dataArray: Array<number> = [];
    //dataArray: number[];

    data:Data = {
        id : '',
        array: this.dataArray
    }

    datas: Data[];

constructor(private walletService: HashTableProvider,
                private fire: AngularFireAuth,
                public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                private afs: AngularFirestore) {

    this.walletService.getDatas().subscribe((data) => {
        this.datas = data;
        console.log("Currency stuff", this.data);
        for (let data of this.datas) {

            if (data.id == "Currencies") {
                this.data = data;
                console.log('ID1:', this.data.id);

                this.dataArray = this.data.array;
                console.log("Currency Array", this.dataArray);
                console.log("Sorted Array", MergeSort(this.dataArray));
                this.updateArray();
            }
        }



    });

    // console.log("Currency array", this.dataArray);
    //
    // console.log("Sorted Array", MergeSort(this.dataArray));

    //this.updateArray();
}

    ngOnInit(){
        //this.updateArray();
    }

    updateArray(){

        this.afs.collection("Data Storage").doc('Currencies').update({
            array: MergeSort(this.dataArray)
        })
            .then(function () {
                console.log("Sell Amount logged!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    // MergeSort(){
    //
    // }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoggedinPage');
    }


    goback_currencypage(){
        this.navCtrl.push(CurrencyPage);
    }
}
