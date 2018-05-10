import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ViewcurrencyPage} from "./viewcurrency";

@NgModule({
    declarations: [
        ViewcurrencyPage,
    ],
    imports: [
        IonicPageModule.forChild(ViewcurrencyPage),
    ],
})
export class CurrencyPageModule {}