import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoinpage';

@NgModule({
    declarations: [
        BitcoinPage,
    ],
    imports: [
        IonicPageModule.forChild(BitcoinPage),
    ],
})
export class BitcoinPageModule {}