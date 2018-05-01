import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hashtable } from './hashtable';

@NgModule({
    declarations: [
        Hashtable,
    ],
    imports: [
        IonicPageModule.forChild(Hashtable),
    ],
})
export class HashtableModule {}