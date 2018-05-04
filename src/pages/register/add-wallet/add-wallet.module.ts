import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWallet} from "./add-wallet";

@NgModule({
    declarations: [
        AddWallet,
    ],
    imports: [
        IonicPageModule.forChild(AddWallet),
    ],
})
export class CurrencyPageModule {}