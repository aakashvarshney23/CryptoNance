import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular'; //imports all the ionic functionality
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';

import {BitcoinPage} from '../pages/currencypage/bitcoinpage/bitcoinpage';
import {LitecoinPage} from '../pages/currencypage/litecoinpage/litecoinpage';
import {EthereumPage} from '../pages/currencypage/ethereumpage/ethereumpage';
import {RipplePage} from '../pages/currencypage/ripplepage/ripplepage';

import {AccountPage} from "../pages/accountpage/accountpage";
import {CurrencyPage} from "../pages/currencypage/currencypage";
import {TabsPage} from "../pages/tabs/tabs";
import {HashTableProvider} from '../providers/hash-table/hash-table';
import {Hashtable} from '../pages/hashtable/hashtable'
import {AddWallet} from "../pages/register/add-wallet/add-wallet";


const firebaseAuth = {
    apiKey: "AIzaSyC4bTy3yTV6NAdtLTLi8yZSiXc7bAv_nYU",
    authDomain: "cryptonance-444b1.firebaseapp.com",
    databaseURL: "https://cryptonance-444b1.firebaseio.com",
    projectId: "cryptonance-444b1",
    storageBucket: "cryptonance-444b1.appspot.com",
    messagingSenderId: "480834052882"
};


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        RegisterPage,
        
        AccountPage,
        BitcoinPage,
        CurrencyPage,
        EthereumPage,
        LitecoinPage,
        RipplePage,
        TabsPage,
        Hashtable,
        AddWallet
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(MyApp), //use instead of browser module
        AngularFireModule.initializeApp(firebaseAuth),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        RegisterPage,
       
        AccountPage,
        BitcoinPage,
        CurrencyPage,
        EthereumPage,
        LitecoinPage,
        RipplePage, 
        TabsPage,
        Hashtable,
        AddWallet
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HashTableProvider
    ]
})
export class AppModule {
}
