import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsReclamationPageRoutingModule } from './details-reclamation-routing.module';

import { DetailsReclamationPage } from './details-reclamation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsReclamationPageRoutingModule
  ],
  declarations: [DetailsReclamationPage]
})
export class DetailsReclamationPageModule {}
