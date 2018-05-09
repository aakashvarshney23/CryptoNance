webpackJsonp([11],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hashtable_hashtable__ = __webpack_require__(195);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\home\home.html"*/'<ion-card>\n\n    <html>\n\n    <body>\n\n    <h1> <b>CryptoNance </b></h1>\n\n    <img src="https://cdn.wccftech.com/wp-content/uploads/2017/12/Bulgarian-Bitcoin-Horde-01-Header-2060x1133.jpg" alt="Sample" style="width:358px;height:270px;">\n\n\n\n    <p style="text-align:center;" > A Cryptocurreny trading website</p>\n\n\n\n\n\n    <div id="topButtons">\n\n        <button ion-button color="default" (click)="signIn()">Sign In</button>\n\n        <button ion-button color="default" (click)="register()">Register?</button>\n\n    </div>\n\n    <div id="topButtons">\n\n        <button ion-button color="default" (click)="hash_view()">Database Testing</button>\n\n    </div>\n\n\n\n\n\n    </body>\n\n    </html>\n\n\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

// public navCtrl: NavController
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(73);
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
    function AccountPage(fire, navCtrl, navParams, walletService, afs, alertCtrl) {
        // private db: AngularFireDatabase) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.walletService = walletService;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        // linkRef: AngularFirestoreDocument<any>;
        // link: Observable<any>;
        // path: string;
        //wallets: AngularFireList<any>;
        this.transactionArray = [];
        this.email = fire.auth.currentUser.email;
        this.userId = this.fire.auth.currentUser.uid;
        console.log('logged in user id', this.userId);
        this.num = 50000;
        //this.wallets = db.list('account info');
    }
    AccountPage.prototype.ngOnInit = function () {
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
        var _this = this;
        // this.walletService.getWallet().subscribe(wallet => {
        //     this.wallet = wallet; // items coming from the service are being set to the items property
        //     console.log("wallet", this.wallet);
        //     console.log("wallet id:", this.wallet.id);
        // });
        //
        this.walletService.getWallets().subscribe(function (wallets) {
            _this.wallets = wallets;
            console.log("observable wallets", wallets);
            console.log("wallet.id", wallets[1].id);
        });
    };
    AccountPage.prototype.updateFields = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            bitcoinamount: +this.bitcoin.value,
            ethereumamount: +this.ethereum.value,
            litecoinamount: +this.litecoin.value,
            ripplecurrencyamount: +this.ripple.value
        })
            .then(function () {
            console.log("Bitcoin amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    AccountPage.prototype.updateBitcoinField = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            bitcoinamount: +this.bitcoin.value,
        })
            .then(function () {
            console.log("Bitcoin amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    AccountPage.prototype.updateEthereumField = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            ethereumamount: +this.ethereum.value,
        })
            .then(function () {
            console.log("Ethereum amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    AccountPage.prototype.updateLitecoinField = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            //ethereumamount: this.ethereum.value,
            litecoinamount: +this.litecoin.value,
        })
            .then(function () {
            console.log("Litecoin amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    AccountPage.prototype.updateRippleField = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            // ethereumamount: this.ethereum.value,
            // litecoinamount: this.litecoin.value,
            ripplecurrencyamount: +this.ripple.value
        })
            .then(function () {
            console.log("Ripple amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    AccountPage.prototype.updateAmountField = function () {
        this.afs.collection('USER WALLETS').doc(this.userId).update({
            // bitcoinamount: this.bitcoin.value,
            // ethereumamount: this.ethereum.value,
            // litecoinamount: this.litecoin.value,
            //ripplecurrencyamount: this.ripple.value
            totalamount: +this.total.value
        })
            .then(function () {
            console.log("Total amount successfully updated");
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('bitcoin'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "bitcoin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ethereum'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "ethereum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('litecoin'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "litecoin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ripple'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "ripple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('total'),
        __metadata("design:type", Object)
    ], AccountPage.prototype, "total", void 0);
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\accountpage\accountpage.html"*/'\n\n<!--<ion-card>-->\n\n<!--&lt;!&ndash;<li class = "collection-item"> <strong> {{items.title}}: </strong> {{items.description}} </li> &lt;!&ndash; trying to get the item field &ndash;&gt;&ndash;&gt;-->\n\n<!--<strong> ID: {{wallet.id}} </strong>-->\n\n    <!--&lt;!&ndash;bitcoin amount: {{userwallet.bitcoinamount}} ,&ndash;&gt;-->\n\n    <!--&lt;!&ndash;ethereum amount: {{userwallet.ethereumamount}},&ndash;&gt;-->\n\n    <!--&lt;!&ndash;litecoin amount: {{userwallet.litecoinamount}},&ndash;&gt;-->\n\n    <!--&lt;!&ndash;ripple amount: {{userwallet.ripplecurrencyamount}},&ndash;&gt;-->\n\n    <!--&lt;!&ndash;transaction amount: {{userwallet.transaction}}&lt;!&ndash; use wallet.id to see the actual id of the document &ndash;&gt;&ndash;&gt;-->\n\n<!--</ion-card>-->\n\n\n\n<ion-content padding>\n\n\n\n<div *ngIf= "wallets?.length > 0; else noWallets" > <!-- if the length of the fetched data is greater than zero -->\n\n\n\n    <ul *ngFor="let wallet of wallets" class="collection"> <!-- run the loop -->\n\n\n\n    <div *ngIf = "wallet.id == userId; else noItems" >\n\n        <ion-card>\n\n        <!--<li class = "collection-item"> <strong> {{items.title}}: </strong> {{items.description}} </li> &lt;!&ndash; trying to get the item field &ndash;&gt;-->\n\n        <ul>\n\n            <strong> ID : {{wallet.id}} </strong>\n\n        </ul>\n\n           <ul>Bitcoin Currency Amount : {{wallet.bitcoinamount}}</ul> <!-- use items.id to see the actual id of the document -->\n\n            <ul>Ethereum Currency Amount : {{wallet.ethereumamount}}</ul>\n\n            <ul>Litecoin Currency Amount : {{wallet.litecoinamount}}</ul>\n\n            <ul>Ripple Currency Amount : {{wallet.ripplecurrencyamount}}</ul>\n\n            <ul>TOTAL AMOUNT : {{wallet.totalamount}}</ul>\n\n        </ion-card>\n\n    </div>\n\n\n\n    </ul>\n\n\n\n</div>\n\n\n\n<ng-template #noWallets> <!-- run the else statement -->\n\n<hr>\n\n<h5> There are no items to list </h5>\n\n</ng-template>\n\n\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-label floating>Bitcoin Amount Edit</ion-label>\n\n            <ion-input type="number" #bitcoin></ion-input>\n\n            <!--<ion-input type="number" min="1" [value]="bitcoin" [(ngModel)]="bitcoin"></ion-input>-->\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button block ion-button (click)="updateBitcoinField()">Update</button>\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Ethereum Amount Edit</ion-label>\n\n            <ion-input type="number" #ethereum></ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button block ion-button (click)="updateEthereumField()">Update</button>\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Litecoin Amount Edit</ion-label>\n\n            <ion-input type="number" #litecoin></ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button block ion-button (click)="updateLitecoinField()">Update</button>\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Ripple Amount Edit</ion-label>\n\n            <ion-input type="number" #ripple></ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button block ion-button (click)="updateRippleField()">Update</button>\n\n        </div>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Total Amount Edit</ion-label>\n\n            <ion-input type="number" #total></ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button block ion-button (click)="updateAmountField()">Update</button>\n\n        </div>\n\n        <!--<div>-->\n\n            <!--<button block ion-button (click)="updateFields()">Update</button>-->\n\n        <!--</div>-->\n\n    </ion-card>\n\n\n\n<ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\accountpage\accountpage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object])
    ], AccountPage);
    return AccountPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=accountpage.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currencypage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(73);
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
var bitcoin_val = 9375;
var BitcoinPage = /** @class */ (function () {
    function BitcoinPage(alertCtrl, fire, navCtrl, navParams, walletService, afs) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.walletService = walletService;
        this.afs = afs;
        this.transactionArray = [];
        this.userId = this.fire.auth.currentUser.uid;
        this.walletService.getWallets().subscribe(function (wallet) {
            _this.wallets = wallet;
            console.log("Wallets from sell", _this.wallets);
            for (var _i = 0, _a = _this.wallets; _i < _a.length; _i++) {
                var wallet_1 = _a[_i];
                if (wallet_1.id == _this.userId) {
                    _this.wallet = wallet_1;
                    console.log('WALLET ID: ', _this.wallet.id);
                    console.log("array", wallet_1);
                }
                if (wallet_1.id == 'VAyYAeU9r7YZ2J8tg1aUXc1k3Bk1') {
                    _this.wallet2 = wallet_1;
                    // console.log('WALLET2 ID: ', this.wallet.id);
                }
            }
            //this.transactionArray = this.wallet.transaction;
            //this.transaction = this.wallet.transaction;
            _this.bitcoinamount = _this.wallet.bitcoinamount;
            _this.totalamount = _this.wallet.totalamount;
            _this.bitcoinamount2 = _this.wallet2.bitcoinamount;
            _this.totalamount2 = _this.wallet2.totalamount;
            // this.trans_no = this.wallet.trans_no;
            //this.transaction = this.wallet.transaction[this.wallet.trans_no];
        });
    }
    BitcoinPage.prototype.goback_currencypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__currencypage__["a" /* CurrencyPage */]);
    };
    BitcoinPage.prototype.sell = function () {
        console.log(this.transactionArray);
        this.transactionArray.push(1234);
        this.afs.collection("USER WALLETS").doc(this.userId).update({
            bitcoinamount: this.bitcoinamount - +this.sellCoins.value * bitcoin_val,
            totalamount: this.totalamount + +this.sellCoins.value * bitcoin_val,
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
    };
    BitcoinPage.prototype.buy = function () {
        this.afs.collection("USER WALLETS").doc(this.userId).update({
            totalamount: this.totalamount - +this.buyCoins.value * bitcoin_val,
            bitcoinamount: this.bitcoinamount + +this.buyCoins.value * bitcoin_val,
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sellamount'),
        __metadata("design:type", Object)
    ], BitcoinPage.prototype, "sellCoins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('buyamount'),
        __metadata("design:type", Object)
    ], BitcoinPage.prototype, "buyCoins", void 0);
    BitcoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bitcoinpage',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\bitcoinpage\bitcoinpage.html"*/'<!DOCTYPE html>\n\n<html lang="en">\n\n<head>\n\n    <meta charset="UTF-8">\n\n    <title>Title</title>\n\n</head>\n\n<body>\n\n\n\n<button ion-button icon-only (click)="goback_currencypage();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n    <ion-card>\n\n        <ion-card-content> <!-- presentActionSheet() -->\n\n             Welcome to the Bitcoin Page!\n\n            Current Bitcoin Price: 9753\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n<ion-card>\n\n    <div padding>\n\n        <ion-item>\n\n            <ion-label floating>Sell Amount</ion-label>\n\n            <ion-input type="number" #sellamount></ion-input>\n\n        </ion-item>\n\n        <button block ion-button (click)="sell()">Sell</button>\n\n\n\n    </div>\n\n\n\n    <div padding>\n\n        <ion-item>\n\n            <ion-label floating>Buy Amount</ion-label>\n\n            <ion-input type="number" #buyamount></ion-input>\n\n        </ion-item>\n\n        <button block ion-button (click)="buy()">Buy</button>\n\n    </div>\n\n\n\n</ion-card>\n\n\n\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\currencypage\bitcoinpage\bitcoinpage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _f || Object])
    ], BitcoinPage);
    return BitcoinPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=bitcoinpage.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthereumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(56);
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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LitecoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(56);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RipplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage__ = __webpack_require__(56);
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(193);
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currencypage_currencypage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountpage_accountpage__ = __webpack_require__(187);
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(73);
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
    function RegisterPage(walletService, alertCtrl, fire, navCtrl, navParams, afs) {
        this.walletService = walletService;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.transaction_array = [];
        this.wallet = {
            id: '',
            totalamount: 0,
            bitcoinamount: 0,
            ethereumamount: 0,
            litecoinamount: 0,
            ripplecurrencyamount: 0,
            //transaction : 0;
            transaction: this.transaction_array
        };
        this.transactionArray = [];
        //this.userId = fire.auth.currentUser.uid;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.ngOnInit = function () {
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
            _this.userId = _this.fire.auth.currentUser.uid;
            _this.onReg(_this.userId);
            console.log("new user id", _this.userId);
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would register user with', this.user.value, this.password.value);
    };
    RegisterPage.prototype.onReg = function (uid) {
        this.wallet.id = uid;
        this.walletService.addNewWallet(this.wallet, uid); //, this.userId); //pass in item which is submitted through the form
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\register.html"*/'<ion-card>\n\n\n\n    <ion-card-header>\n\n        New User -> Register\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" #username></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" #password></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n        <button block ion-button (click)="registerUser()">Register</button>\n\n\n\n    </div>\n\n\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _f || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hashtable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hash_table_hash_table__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(157);
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
    //items: Item[]; //items is set as property
    //take in HashTableProvider as a depency
    function Hashtable(itemService, navCtrl) {
        this.itemService = itemService;
        this.navCtrl = navCtrl;
    }
    Hashtable.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Hashtable');
    };
    Hashtable.prototype.ngOnInit = function () {
    };
    //where you do the initilizations and do the fetching of stuff
    // ngOnInit(){ //life cycle method to run automically when component generated
    //     //console.log("Ng did init");
    //     this.itemService.getItems().subscribe(items => {
    //         //console.log(items);
    //         this.items = items; // items coming from the service are being set to the items property
    //     });
    // }
    //
    // deleteItem(event,item){
    //     this.itemService.deleteItem(item);
    // }
    Hashtable.prototype.goback_home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Hashtable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-hashtable',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\hashtable\hashtable.html"*/'<button ion-button icon-only (click)="goback_home();">\n\n    <ion-icon name="arrow-back"></ion-icon>\n\n</button>\n\n\n\n<!--<ion-card>-->\n\n    <!--<ion-card-content>-->\n\n        <!--<page-add-wallet>-->\n\n        <!--</page-add-wallet>-->\n\n    <!--</ion-card-content>-->\n\n<!--</ion-card>-->\n\n\n\n<!--<div *ngIf="items?.length > 0; else noItems" > &lt;!&ndash; if the length of the fetched data is greater than zero &ndash;&gt;-->\n\n    <!--<ul *ngFor="let item of items" class="collection"> &lt;!&ndash; run the loop &ndash;&gt;-->\n\n        <!--<ion-card>-->\n\n            <!--<button ion-button icon-only (click)= "deleteItem($event, item)" class = "collection-items" >-->\n\n                <!--<ion-icon name = "close" ></ion-icon>-->\n\n            <!--</button>-->\n\n            <!--&lt;!&ndash;<li class = "collection-item"> <strong> {{items.title}}: </strong> {{items.description}} </li> &lt;!&ndash; trying to get the item field &ndash;&gt;&ndash;&gt;-->\n\n             <!--<strong> {{item.id}} : </strong> {{item.title}} , {{item.description}} &lt;!&ndash; use items.id to see the actual id of the document &ndash;&gt;-->\n\n        <!--</ion-card>-->\n\n   <!--</ul>-->\n\n<!--</div>-->\n\n\n\n<!--<ng-template #noItems> &lt;!&ndash; run the else statement &ndash;&gt;-->\n\n    <!--<hr>-->\n\n    <!--<h5> There are no items to list </h5>-->\n\n<!--</ng-template>-->\n\n\n\n'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\hashtable\hashtable.html"*/,
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

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountpage/accountpage.module": [
		545,
		10
	],
	"../pages/currencypage/bitcoinpage/bitcoinpage.module": [
		546,
		9
	],
	"../pages/currencypage/currencypage.module": [
		548,
		8
	],
	"../pages/currencypage/ethereumpage/ethereumpage.module": [
		549,
		7
	],
	"../pages/currencypage/litecoinpage/litecoinpage.module": [
		550,
		6
	],
	"../pages/currencypage/ripplepage/ripplepage.module": [
		547,
		5
	],
	"../pages/hashtable/hashtable.module": [
		554,
		4
	],
	"../pages/login/login.module": [
		551,
		3
	],
	"../pages/register/add-wallet/add-wallet.module": [
		552,
		2
	],
	"../pages/register/register.module": [
		553,
		1
	],
	"../pages/tabs/tabs.module": [
		555,
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
webpackAsyncContext.id = 249;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__ = __webpack_require__(59);
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
    function AddWallet(walletService, navCtrl, fire) {
        this.walletService = walletService;
        this.navCtrl = navCtrl;
        this.fire = fire;
    }
    AddWallet.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad add-wallet');
        // console.log('uid',this.fire.auth.currentUser.uid);
    };
    AddWallet.prototype.ngOnInit = function () {
    };
    AddWallet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-wallet',template:/*ion-inline-start:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\add-wallet\add-wallet.html"*/'<!--<div class = "card">-->\n\n        <!--<div class = "card-content">-->\n\n            <!--<span class = "card-title"> Add Item</span>-->\n\n            <!--<form (ngSubmit)= "onSubmit()" class = "cols6">-->\n\n                <!--<div class="row">-->\n\n                    <!--<div class = "input-field col s6">-->\n\n                        <!--<input type="text" placeholder = "Add Title" [(ngModel)]="item.title" name="title"> &lt;!&ndash;use NgModel to bind the tile item.title &ndash;&gt;-->\n\n                        <!--<label>Title</label>-->\n\n                    <!--</div>-->\n\n                    <!--<div class = "input-field col s6">-->\n\n                        <!--<input type="text" placeholder="Add Description" [(ngModel)] = "item.description" name="description" >-->\n\n                        <!--<label>Description</label>-->\n\n                    <!--</div>-->\n\n                <!--</div>-->\n\n                <!--<input type="submit" value="Submit" class="btn">-->\n\n            <!--</form>-->\n\n        <!--</div>-->\n\n<!--</div>-->\n\n\n\n<ion-card>\n\n    <ion-content>\n\n        A new wallet has been created!\n\n    </ion-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Nikkitha\WebstormProjects\cryptonance_v3\src\pages\register\add-wallet\add-wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_hash_table_hash_table__["a" /* HashTableProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AddWallet);
    return AddWallet;
}());

//# sourceMappingURL=add-wallet.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_bitcoinpage_bitcoinpage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_litecoinpage_litecoinpage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ethereumpage_ethereumpage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_currencypage_ripplepage_ripplepage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_accountpage_accountpage__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_currencypage_currencypage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_hash_table_hash_table__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hashtable_hashtable__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_add_wallet_add_wallet__ = __webpack_require__(351);
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
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_accountpage_accountpage__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_bitcoinpage_bitcoinpage__["a" /* BitcoinPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_currencypage_currencypage__["a" /* CurrencyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ethereumpage_ethereumpage__["a" /* EthereumPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_litecoinpage_litecoinpage__["a" /* LitecoinPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_currencypage_ripplepage_ripplepage__["a" /* RipplePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hashtable_hashtable__["a" /* Hashtable */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_add_wallet_add_wallet__["a" /* AddWallet */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accountpage/accountpage.module#AccountPageModule', name: 'AccountPage', segment: 'accountpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/bitcoinpage/bitcoinpage.module#BitcoinPageModule', name: 'BitcoinPage', segment: 'bitcoinpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/ripplepage/ripplepage.module#RipplePageModule', name: 'RipplePage', segment: 'ripplepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/currencypage.module#CurrencyPageModule', name: 'CurrencyPage', segment: 'currencypage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/ethereumpage/ethereumpage.module#EthereumPageModule', name: 'EthereumPage', segment: 'ethereumpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencypage/litecoinpage/litecoinpage.module#LitecoinPageModule', name: 'LitecoinPage', segment: 'litecoinpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/add-wallet/add-wallet.module#CurrencyPageModule', name: 'AddWallet', segment: 'add-wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hashtable/hashtable.module#CurrencyPageModule', name: 'Hashtable', segment: 'hashtable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_accountpage_accountpage__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencypage_bitcoinpage_bitcoinpage__["a" /* BitcoinPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_currencypage_currencypage__["a" /* CurrencyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_currencypage_ethereumpage_ethereumpage__["a" /* EthereumPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_currencypage_litecoinpage_litecoinpage__["a" /* LitecoinPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_currencypage_ripplepage_ripplepage__["a" /* RipplePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hashtable_hashtable__["a" /* Hashtable */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_add_wallet_add_wallet__["a" /* AddWallet */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_hash_table_hash_table__["a" /* HashTableProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(157);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currencypage_bitcoinpage_bitcoinpage__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currencypage_ethereumpage_ethereumpage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currencypage_litecoinpage_litecoinpage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currencypage_ripplepage_ripplepage__ = __webpack_require__(191);
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashTableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(34);
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
    //itemDoc: AngularFirestoreDocument<Wallet>; //type: item
    function HashTableProvider(afs, afAuth) {
        //private db: AngularFireDatabase) {
        // this.afAuth.authState.subscribe(user => {
        //     if (user) this.userId = user.uid
        // })
        this.afs = afs;
        this.afAuth = afAuth;
        // this.userId = this.afAuth.auth.currentUser.uid;
        //
        // console.log('injector uid', this.userId);
        //this.walletsCollection = this.afs.collection('account info', ref => ref.orderBy('id', 'asc'));//.valueChanges(); // returns the collection as a observable
        this.walletsCollection = this.afs.collection('USER WALLETS'); //ref()
        this.wallets = this.walletsCollection.snapshotChanges().map(function (changes) {
            //use snapshot changes and map the id
            //items is the collection
            return changes.map(function (a) {
                var data = a.payload.doc.data(); //Wallet comes from the models folder
                data.id = a.payload.doc.id; //how you get the doc id
                return data;
            });
        });
        this.walletsCollection = this.afs.collection('USER WALLETS'); //ref()
        // this.wallets2 = this.walletsCollection.valueChanges();
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // this.walletDoc = afs.doc<Wallet>(`account info/${this.userId}`);
        //
        //  this.walletDoc = this.getWalletDoc();
        //
        //  // this.userwallet = this.walletDoc.valueChanges();
        //
        //   this.userwallet = this.walletDoc.snapshotChanges().map(changes => {
        //     return changes.payload.data() as Wallet;
        // });
        //
        //  this.userwallet.subscribe(res=>{
        //      console.log("user's document:", res);
        //  });
    }
    // setUID() {
    //     this.afAuth.authState.subscribe(user => {
    //         if (user) this.userId = user.uid;
    //     })
    // }
    HashTableProvider.prototype.getWallet = function () {
        return this.userwallet;
    };
    HashTableProvider.prototype.getWallets = function () {
        return this.wallets;
    };
    HashTableProvider.prototype.addNewWallet = function (wallet, uid) {
        // this.afs.collection("account info").doc(uid).set({wallet})
        //     .then(function() {
        //
        //         console.log("Document successfully written!");
        //     })
        //     .catch(function(error) {
        //         console.error("Error writing document: ", error);
        //     });
        this.walletsCollection.doc(uid).set(wallet);
    };
    HashTableProvider.prototype.deleteItem = function (wallet) {
        this.walletDoc = this.afs.doc("USER WALLETS/" + wallet.id); //picks a specific item
        this.walletDoc.delete(); //once you identified the specific item, it should delete
    };
    HashTableProvider.prototype.returnid = function () {
        return this.userId;
    };
    HashTableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], HashTableProvider);
    return HashTableProvider;
    var _a, _b;
}());

//# sourceMappingURL=hash-table.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map