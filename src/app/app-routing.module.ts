import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {OneComponent} from "./one/one.component";
import {NumberComponent} from "./number/number.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'one', component: OneComponent},
  {path: 'number/:num', component: NumberComponent},
  {path: '**', redirectTo: '/one'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
