import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LoggedinPage} from '../pages/loggedin/loggedin';

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
        LoggedinPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseAuth),
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        RegisterPage,
        LoggedinPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}


    ]
})
export class AppModule {
}
