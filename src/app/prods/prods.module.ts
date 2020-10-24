import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdsRoutingModule } from './prods-routing.module';
import { ProdsComponent } from './prods.component';
import { EditprodComponent } from './editprod/editprod.component';
import {FormsModule} from '@angular/forms'
import { SearchPipe } from './search.pipe';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [ProdsComponent, EditprodComponent,SearchPipe, AddComponent],
  imports: [
    CommonModule,
    ProdsRoutingModule,FormsModule
  ]
})
export class ProdsModule { }
