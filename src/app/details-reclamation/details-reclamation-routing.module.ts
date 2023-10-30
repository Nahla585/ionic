import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsReclamationPage } from './details-reclamation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsReclamationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsReclamationPageRoutingModule {}
