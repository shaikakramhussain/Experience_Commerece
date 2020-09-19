import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {NextComponent} from './next/next.component'

const routes: Routes = [
  {path:'', component:FormComponent},
  {path:'form', component:FormComponent},
  {path:'next', component:NextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
