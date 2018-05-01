// function HashTable(size){
//     this.values = {};
//     this.numberOfValues = 0;
//     this.size = size;
// }
//
// HashTable.prototype.add = function(key,value){
//     var has = this.calculateHash(key);
//     if(!this.values.hasOwnProperty(hash)){
//         this.values[hash] = {};
//     }
// }


"use strict";

import {IonicPage} from "ionic-angular/index";
import {Component} from "@angular/core/core";

@IonicPage()
@Component({
    selector: 'page-hashtable',
    templateUrl: 'hashtable.html',
})
export class Hashtable {
    print() {
        let message = 'Hello!'; // define the variable and assign the value
        let name = "Hey There!"

        this.alert(message); // Hello!
        this.alert(name); //Hey there!
    }
}
