import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecativFormComponent } from './recativ-form/recativ-form.component';
import { TemplatDrivenFormComponent } from './templat-driven-form/templat-driven-form.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:"",
    component:RecativFormComponent
  },
  {
    path:"form/:id",
    component:TemplatDrivenFormComponent
  },
  {
    path:'form',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
