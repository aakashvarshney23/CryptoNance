import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hashtable} from "../../pages/hashtable/hashtable"; //"../../providers/hash-table/hash-table";

@NgModule({
    declarations: [
        Hashtable,
    ],
    imports: [
        IonicPageModule.forChild(Hashtable),
    ],
})
export class CurrencyPageModule {}