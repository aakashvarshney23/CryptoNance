import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyPage } from './currencypage';

@NgModule({
    declarations: [
        CurrencyPage,
    ],
    imports: [
        IonicPageModule.forChild(CurrencyPage),
    ],
})
export class CurrencyPageModule {}