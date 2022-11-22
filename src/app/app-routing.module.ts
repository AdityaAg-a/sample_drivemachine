import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:"", component:MainComponent},
  { path:"home", component:MainComponent},
  { path:"aboutus", component:AboutusComponent},
  { path:"contactus", component:ContactusComponent},
  { path:"product", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
