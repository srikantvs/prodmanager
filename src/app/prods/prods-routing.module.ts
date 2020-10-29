import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProdsComponent } from "./prods.component";
import { EditprodComponent } from "./editprod/editprod.component";
import { EditGuard } from '../guards/edit-guard';
import { LoginComponent } from '../login/login.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: "test", component: ProdsComponent },
  { path: "edit/:id", component: EditprodComponent, canActivate: [EditGuard] },
  { path: "add", component: AddComponent, canActivate: [EditGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdsRoutingModule { }
