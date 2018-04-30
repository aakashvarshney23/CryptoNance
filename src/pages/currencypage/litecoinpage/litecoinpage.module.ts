import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LitecoinPage } from './litecoinpage';

@NgModule({
    declarations: [
        LitecoinPage,
    ],
    imports: [
        IonicPageModule.forChild(LitecoinPage),
    ],
})
export class LitecoinPageModule {}