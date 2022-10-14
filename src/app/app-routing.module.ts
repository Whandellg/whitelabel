import { TermsComponent } from './terms/terms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'underconstruction' , component: UnderConstructionComponent },
  { path: 'procedure' , component: ProcedureComponent },
  { path: 'terms', component: TermsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }

