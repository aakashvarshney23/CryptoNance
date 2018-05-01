import { Injectable } from '@angular/core';

/*
  Generated class for the HashTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HashTableProvider {

  constructor() {
    console.log('Hello HashTableProvider Provider');
  }

  oneplusone() {
  	console.log(1+1);
  }

}
