import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanflyCasePipe } from './pipes/canfly-case.pipe';
import { SotByPipe } from "./pipes/sotBy.pipe";



@NgModule({
    declarations: [
        BasicsPagesComponent,
        NumbersPagesComponent,
        UncommonPagesComponent,
        OrderComponent,
        //PiPes
        ToggleCasePipe,
        CanflyCasePipe,
        SotByPipe
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        PrimeNgModule,

    ]
})
export class ProductsModule { }
