webpackJsonp([11],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hashtable_hashtable__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {Hashtable} from '../hashtable/hashtable'

var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.hash_view = function () {
        //this.navCtrl.push(Hashtable);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hashtable_hashtable__["a" /* Hashtable */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\home\home.html"*/'<ion-card>\n\n\n\n    <ion-card-header>\n\n        CryptoNance- A Cryptocurrency Exchange Platform\n\n    </ion-card-header>\n\n\n\n    <div id="topButtons">\n\n        <button ion-button color="default" (click)="signIn()">Sign In</button>\n\n\n\n        <button ion-button color="default" (click)="register()">Register</button>\n\n\n\n        <button ion-button color="default" (click)="hash_view()">Hashbrown</button>\n\n    </div>\n\n\n\n</ion-card>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

// public navCtrl: NavController
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(fire, navCtrl, navParams, actionSheetCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.email = fire.auth.currentUser.email;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "password", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\accountpage\accountpage.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Account Page for {{email}} </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\accountpage\accountpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=accountpage.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currencypage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BitcoinPage = /** @class */ (function () {
    function BitcoinPage(alertCtrl, fire, navCtrl, navParams, hashTable) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hashTable = hashTable;
        //this.hashTable.oneplusone()
    }
    BitcoinPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    BitcoinPage.prototype.goback_currencypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__currencypage__["a" /* CurrencyPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], BitcoinPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], BitcoinPage.prototype, "password", void 0);
    BitcoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bitcoinpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\bitcoinpage\bitcoinpage.html"*/'<!DOCTYPE html>\n\n<html lang="en">\n\n<head>\n\n    <meta charset="UTF-8">\n\n    <title>Title</title>\n\n</head>\n\n<body>\n\n\n\n<button ion-button icon-only (click)="goback_currencypage();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n    <ion-card>\n\n        <ion-card-content> <!-- presentActionSheet() -->\n\n             Welcome to the Bitcoin Page!\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\bitcoinpage\bitcoinpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */]])
    ], BitcoinPage);
    return BitcoinPage;
}());

//# sourceMappingURL=bitcoinpage.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthereumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EthereumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EthereumPage = /** @class */ (function () {
    function EthereumPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EthereumPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    EthereumPage.prototype.goback_currencypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__currencypage__["a" /* CurrencyPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], EthereumPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], EthereumPage.prototype, "password", void 0);
    EthereumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ethereumpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\ethereumpage\ethereumpage.html"*/'<!DOCTYPE html>\n\n<html lang="en">\n\n<head>\n\n    <meta charset="UTF-8">\n\n    <title>Title</title>\n\n</head>\n\n<body>\n\n<button ion-button icon-only (click)="goback_currencypage();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n    <ion-card>\n\n        <ion-card-content> <!-- presentActionSheet() -->\n\n             Welcome to the Ethereum Page!\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\ethereumpage\ethereumpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EthereumPage);
    return EthereumPage;
}());

//# sourceMappingURL=ethereumpage.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LitecoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LitecoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LitecoinPage = /** @class */ (function () {
    function LitecoinPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LitecoinPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LitecoinPage.prototype.goback_currencypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__currencypage__["a" /* CurrencyPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LitecoinPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LitecoinPage.prototype, "password", void 0);
    LitecoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-litecoinpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\litecoinpage\litecoinpage.html"*/'<!DOCTYPE html>\n\n<html lang="en">\n\n<head>\n\n    <meta charset="UTF-8">\n\n    <title>Title</title>\n\n</head>\n\n<body>\n\n<button ion-button icon-only (click)="goback_currencypage();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n<ion-card>\n\n    <ion-card-content> <!-- presentActionSheet() -->\n\n        Welcome to the Litecoin Page!\n\n    </ion-card-content>\n\n</ion-card>\n\n\n\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\litecoinpage\litecoinpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LitecoinPage);
    return LitecoinPage;
}());

//# sourceMappingURL=litecoinpage.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RipplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RipplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RipplePage = /** @class */ (function () {
    function RipplePage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RipplePage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RipplePage.prototype.goback_currencypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__currencypage__["a" /* CurrencyPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], RipplePage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RipplePage.prototype, "password", void 0);
    RipplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ripplepage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\ripplepage\ripplepage.html"*/'<!DOCTYPE html>\n\n<html lang="en">\n\n<head>\n\n    <meta charset="UTF-8">\n\n    <title>Title</title>\n\n</head>\n\n<body>\n\n<button ion-button icon-only (click)="goback_currencypage();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n<ion-card>\n\n    <ion-card-content> <!-- presentActionSheet() -->\n\n        Welcome to the Ripple Page!\n\n    </ion-card-content>\n\n</ion-card>\n\n\n\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\ripplepage\ripplepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RipplePage);
    return RipplePage;
}());

//# sourceMappingURL=ripplepage.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hashtable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hash_table_hash_table__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {Component} from '@angular/core';

//import { ActionSheetController } from 'ionic-angular';



/**
 * Generated class for the Hashtable page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Hashtable = /** @class */ (function () {
    //take in HashTableProvider as a depency
    function Hashtable(itemService, navCtrl) {
        this.itemService = itemService;
        this.navCtrl = navCtrl;
    }
    Hashtable.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hashtable');
    };
    //where you do the initilizations and do the fetching of stuff
    Hashtable.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("Ng did init");
        this.itemService.getItems().subscribe(function (items) {
            //console.log(items);
            _this.items = items; // items coming from the service are being set to the items property
        });
    };
    Hashtable.prototype.deleteItem = function (event, item) {
        this.itemService.deleteItem(item);
    };
    Hashtable.prototype.goback_home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Hashtable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-hashtable',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\hashtable\hashtable.html"*/'<button ion-button icon-only (click)="goback_home();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n<ion-card>\n\n    <ion-card-content>\n\n        <page-add-wallet>\n\n        </page-add-wallet>\n\n    </ion-card-content>\n\n</ion-card>\n\n\n\n<div *ngIf="items?.length > 0; else noItems" > <!-- if the length of the fetched data is greater than zero -->\n\n    <ul *ngFor="let item of items" class="collection"> <!-- run the loop -->\n\n        <ion-card>\n\n            <button ion-button icon-only (click)= "deleteItem($event, item)" class = "collection-items" >\n\n                <ion-icon name = "close" ></ion-icon>\n\n            </button>\n\n            <!--<li class = "collection-item"> <strong> {{items.title}}: </strong> {{items.description}} </li> &lt;!&ndash; trying to get the item field &ndash;&gt;-->\n\n             <strong> {{item.id}} : </strong> {{item.title}} , {{item.description}} <!-- use items.id to see the actual id of the document -->\n\n        </ion-card>\n\n   </ul>\n\n</div>\n\n\n\n<ng-template #noItems> <!-- run the else statement -->\n\n    <hr>\n\n    <h5> There are no items to list </h5>\n\n</ng-template>\n\n\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\hashtable\hashtable.html"*/,
        })
        //export class Hashtable {
        //private accountInfo: AngularFirestoreCollection<Account>;
        //accounts: Observable<AccountId[]>
        //public actionSheetCtrl: ActionSheetController,
        // constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public hashTable: HashTableProvider, private readonly afs: AngularFirestore) {
        //     //this.hashTable.create();
        //     //this.accountInfo = afs.collection<Account>('account info');
        // }
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hash_table_hash_table__["a" /* HashTableProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */]])
    ], Hashtable);
    return Hashtable;
}());

//# sourceMappingURL=hashtable.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (data) {
            console.log('got data', _this.fire.auth.currentUser.displayName);
            _this.alert('Success! You are logged in');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would sign in with', this.user.value, this.password.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\login\login.html"*/'<ion-card>\n\n\n\n    <ion-card-header>\n\n        User Login\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" #username></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" #password></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n        <button block ion-button (click)="signInUser()">Sign In</button>\n\n    </div>\n\n\n\n\n\n</ion-card>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currencypage_currencypage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountpage_accountpage__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        // constructor(public navCtrl: NavController, public navParams: NavParams) {
        // }
        // ionViewDidLoad() {
        //   console.log('ionViewDidLoad TabsPage');
        // }
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__currencypage_currencypage__["a" /* CurrencyPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__accountpage_accountpage__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tabs</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n	<ion-tabs> \n\n    <ion-tab [root]="tab1Root" tabTitle = "Currencies" tabIcon = "star"> Currencies </ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle = "Account" tabIcon = "book"> Account </ion-tab>\n\n    </ion-tabs>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
            .then(function (data) {
            console.log('got data', data);
            _this.alert('Registered');
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would register user with', this.user.value, this.password.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\register.html"*/'<ion-card>\n\n\n\n    <ion-card-header>\n\n        New User -> Register\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" #username></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" #password></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n        <button block ion-button (click)="registerUser()">Register</button>\n\n    </div>\n\n\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountpage/accountpage.module": [
		431,
		10
	],
	"../pages/currencypage/bitcoinpage/bitcoinpage.module": [
		432,
		9
	],
	"../pages/currencypage/currencypage.module": [
		433,
		8
	],
	"../pages/currencypage/ethereumpage/ethereumpage.module": [
		434,
		7
	],
	"../pages/currencypage/litecoinpage/litecoinpage.module": [
		435,
		6
	],
	"../pages/currencypage/ripplepage/ripplepage.module": [
		436,
		5
	],
	"../pages/hashtable/hashtable.module": [
		437,
		4
	],
	"../pages/login/login.module": [
		438,
		3
	],
	"../pages/register/add-wallet/add-wallet.module": [
		439,
		2
	],
	"../pages/register/register.module": [
		440,
		1
	],
	"../pages/tabs/tabs.module": [
		441,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hash_table_hash_table__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ActionSheetController } from 'ionic-angular';


/**
 * Generated class for add-wallet page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddWallet = /** @class */ (function () {
    function AddWallet(itemService, navCtrl) {
        this.itemService = itemService;
        this.navCtrl = navCtrl;
        this.item = {
            title: '',
            description: ''
        };
    }
    AddWallet.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad add-wallet');
    };
    AddWallet.prototype.ngOnInit = function () {
    };
    AddWallet.prototype.onSubmit = function () {
        if (this.item.title != '' && this.item.description != '') {
            this.itemService.addItem(this.item); //pass in item which is submitted through the form
            this.item.title = ' ';
            this.item.description = ' ';
        }
    };
    AddWallet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-wallet',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\add-wallet\add-wallet.html"*/'<div class = "card">\n\n        <div class = "card-content">\n\n            <span class = "card-title"> Add Item</span>\n\n            <form (ngSubmit)= "onSubmit()" class = "cols6">\n\n                <div class="row">\n\n                    <div class = "input-field col s6">\n\n                        <input type="text" placeholder = "Add Title" [(ngModel)]="item.title" name="title"> <!--use NgModel to bind the tile item.title -->\n\n                        <label>Title</label>\n\n                    </div>\n\n                    <div class = "input-field col s6">\n\n                        <input type="text" placeholder="Add Description" [(ngModel)] = "item.description" name="description" >\n\n                        <label>Description</label>\n\n                    </div>\n\n                </div>\n\n                <input type="submit" value="Submit" class="btn">\n\n            </form>\n\n        </div>\n\n</div>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\add-wallet\add-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hash_table_hash_table__["a" /* HashTableProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */]])
    ], AddWallet);
    return AddWallet;
}());

//# sourceMappingURL=add-wallet.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_currencypage_bitcoinpage_bitcoinpage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_litecoinpage_litecoinpage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_ethereumpage_ethereumpage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ripplepage_ripplepage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_accountpage_accountpage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_currencypage_currencypage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_hash_table_hash_table__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_hashtable_hashtable__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_add_wallet_add_wallet__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //imports all the ionic functionality




















var firebaseAuth = {
    apiKey: "AIzaSyC4bTy3yTV6NAdtLTLi8yZSiXc7bAv_nYU",
    authDomain: "cryptonance-444b1.firebaseapp.com",
    databaseURL: "https://cryptonance-444b1.firebaseio.com",
    projectId: "cryptonance-444b1",
    storageBucket: "cryptonance-444b1.appspot.com",
    messagingSenderId: "480834052882"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_accountpage_accountpage__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_currencypage_bitcoinpage_bitcoinpage__["a" /* BitcoinPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencypage_currencypage__["a" /* CurrencyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_ethereumpage_ethereumpage__["a" /* EthereumPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_litecoinpage_litecoinpage__["a" /* LitecoinPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ripplepage_ripplepage__["a" /* RipplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hashtable_hashtable__["a" /* Hashtable */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_add_wallet_add_wallet__["a" /* AddWallet */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accountpage/accountpage.module#AccountPageModule', name: 'AccountPage', segment: 'accountpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/bitcoinpage/bitcoinpage.module#BitcoinPageModule', name: 'BitcoinPage', segment: 'bitcoinpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/currencypage.module#CurrencyPageModule', name: 'CurrencyPage', segment: 'currencypage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/ethereumpage/ethereumpage.module#EthereumPageModule', name: 'EthereumPage', segment: 'ethereumpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/litecoinpage/litecoinpage.module#LitecoinPageModule', name: 'LitecoinPage', segment: 'litecoinpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/ripplepage/ripplepage.module#RipplePageModule', name: 'RipplePage', segment: 'ripplepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hashtable/hashtable.module#CurrencyPageModule', name: 'Hashtable', segment: 'hashtable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/add-wallet/add-wallet.module#CurrencyPageModule', name: 'AddWallet', segment: 'add-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_accountpage_accountpage__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_currencypage_bitcoinpage_bitcoinpage__["a" /* BitcoinPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencypage_currencypage__["a" /* CurrencyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_ethereumpage_ethereumpage__["a" /* EthereumPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_litecoinpage_litecoinpage__["a" /* LitecoinPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ripplepage_ripplepage__["a" /* RipplePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_hashtable_hashtable__["a" /* Hashtable */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_add_wallet_add_wallet__["a" /* AddWallet */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_hash_table_hash_table__["a" /* HashTableProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage_bitcoinpage_bitcoinpage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currencypage_ethereumpage_ethereumpage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currencypage_litecoinpage_litecoinpage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currencypage_ripplepage_ripplepage__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrencyPage = /** @class */ (function () {
    function CurrencyPage(fire, navCtrl, navParams, actionSheetCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.email = fire.auth.currentUser.email;
    }
    CurrencyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoggedinPage');
    };
    CurrencyPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CurrencyPage.prototype.BitCoin_view = function () {
        //this.presentActionSheet();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__currencypage_bitcoinpage_bitcoinpage__["a" /* BitcoinPage */]);
    };
    CurrencyPage.prototype.Ethereum_view = function () {
        //this.presentActionSheet();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__currencypage_ethereumpage_ethereumpage__["a" /* EthereumPage */]);
    };
    CurrencyPage.prototype.Litecoin_view = function () {
        //this.presentActionSheet();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__currencypage_litecoinpage_litecoinpage__["a" /* LitecoinPage */]);
    };
    CurrencyPage.prototype.Ripple_view = function () {
        //this.presentActionSheet();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__currencypage_ripplepage_ripplepage__["a" /* RipplePage */]);
    };
    CurrencyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currencypage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\currencypage.html"*/'<!--\n\n  Generated template for the LoggedinPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Hello User, {{email}} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n<ion-card>\n\n    <ion-card-content>\n\n        <h1> Currencies </h1>\n\n    </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header> Ripple </ion-card-header>\n\n\n\n    <ion-list>\n\n        <!--<button ion-button color="light" round>-->\n\n            <!--<ion-icon name="buy" item-start></ion-icon>-->\n\n            <!--Buy-->\n\n        <!--</button>-->\n\n\n\n        <!--<button ion-button color="dark" round>-->\n\n            <!--<ion-icon name="sell" item-start></ion-icon>-->\n\n            <!--Sell-->\n\n        <!--</button>-->\n\n\n\n        <button  ion-button color = "dark" round (click)="Ripple_view()"> View </button>\n\n    </ion-list>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header> Litecoin </ion-card-header>\n\n\n\n    <ion-list>\n\n        <!--<button ion-button color="light" round>-->\n\n            <!--<ion-icon name="buy" item-start></ion-icon>-->\n\n            <!--Buy-->\n\n        <!--</button>-->\n\n\n\n        <!--<button ion-button color="dark" round>-->\n\n            <!--<ion-icon name="sell" item-start></ion-icon>-->\n\n            <!--Sell-->\n\n        <!--</button>-->\n\n\n\n        <button  ion-button color = "dark" round (click)="Litecoin_view()"> View </button>\n\n    </ion-list>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header> Ethereum </ion-card-header>\n\n\n\n    <ion-list>\n\n        <!--<button ion-button color="light" round>-->\n\n            <!--<ion-icon name="buy" item-start></ion-icon>-->\n\n            <!--Buy-->\n\n        <!--</button>-->\n\n\n\n        <!--<button ion-button color="dark" round>-->\n\n            <!--<ion-icon name="sell" item-start></ion-icon>-->\n\n            <!--Sell-->\n\n        <!--</button>-->\n\n\n\n        <button  ion-button color = "dark" round (click)="Ethereum_view()"> View </button>\n\n\n\n    </ion-list>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header> Bitcoin </ion-card-header>\n\n\n\n    <ion-list>\n\n        <!-- <button ion-button color="light" round>\n\n             <ion-icon name="buy" item-start></ion-icon>\n\n             Buy\n\n         </button>\n\n\n\n         <button ion-button color="dark" round>\n\n             <ion-icon name="sell" item-start></ion-icon>\n\n             Sell\n\n         </button> -->\n\n\n\n        <button  ion-button color = "dark" round (click)="BitCoin_view()"> View </button>\n\n\n\n    </ion-list>\n\n</ion-card>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\currencypage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CurrencyPage);
    return CurrencyPage;
}());

//# sourceMappingURL=currencypage.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashTableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(226);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HashTableProvider = /** @class */ (function () {
    function HashTableProvider(afs) {
        this.afs = afs;
        this.itemsCollection = this.afs.collection('items', function (ref) { return ref.orderBy('title', 'asc'); }); //.valueChanges(); // returns the collection as a observable
        this.items = this.itemsCollection.snapshotChanges().map(function (changes) {
            //use snapshot changes and map the id
            //items is the collection
            return changes.map(function (a) {
                var data = a.payload.doc.data(); //Item comes from the models folder
                data.id = a.payload.doc.id; //how you get the doc id
                return data;
            });
        });
    }
    HashTableProvider.prototype.getItems = function () {
        return this.items;
    };
    HashTableProvider.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    HashTableProvider.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id); //picks a specific item
        this.itemDoc.delete(); //once you identified the specific item, it should delete
    };
    HashTableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], HashTableProvider);
    return HashTableProvider;
    var _a;
}());

//# sourceMappingURL=hash-table.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map