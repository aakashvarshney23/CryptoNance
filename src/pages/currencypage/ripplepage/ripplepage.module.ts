import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RipplePage } from './ripplepage';

@NgModule({
    declarations: [
        RipplePage,
    ],
    imports: [
        IonicPageModule.forChild(RipplePage),
    ],
})
export class RipplePageModule {}