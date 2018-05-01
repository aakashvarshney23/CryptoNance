import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {Hashtable} from '../hashtable/hashtable'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    @ViewChild('username') uname;
    @ViewChild('password') password;

    constructor(private alertCtrl: AlertController, public navCtrl: NavController) {


    }

    signIn() {
        this.navCtrl.push(LoginPage);
    }

    register() {
        this.navCtrl.push(RegisterPage);
    }

    hash_view(){
        this.navCtrl.push(Hashtable);
    }

}

// public navCtrl: NavController
