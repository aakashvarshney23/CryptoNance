// import { Injectable } from '@angular/core';
//
// /*
//   Generated class for the HashTableProvider provider.
//
//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class HashTableProvider {
//
//   constructor() {
//     console.log('Hello HashTableProvider Provider');
//   }
//
//   oneplusone() {
//   	this.alert(1+1);
//   }
//
// }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,  AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import {Item} from '../../app/models/Item'; //export allows use in other files

import * as firebase from 'firebase/app';

@Injectable()
export class HashTableProvider {
    itemsCollection: AngularFirestoreCollection<Item>; //type: item
    items: Observable<Item[]>;
    itemDoc: AngularFirestoreDocument<Item>; //type: item

    constructor(public afs:AngularFirestore){
        this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));//.valueChanges(); // returns the collection as a observable

        this.items = this.itemsCollection.snapshotChanges().map(changes => {
            //use snapshot changes and map the id
            //items is the collection
            return changes.map(a => {
                const data = a.payload.doc.data() as Item; //Item comes from the models folder
                data.id = a.payload.doc.id; //how you get the doc id
                return data;
            });
        });
    }

    getItems(){
        return this.items;
    }

    addItem(item: Item){
        this.itemsCollection.add(item);
    }

    deleteItem(item: Item){ //takes in item, type of item
        this.itemDoc = this.afs.doc(`items/${item.id}`); //picks a specific item
        this.itemDoc.delete(); //once you identified the specific item, it should delete
    }

}