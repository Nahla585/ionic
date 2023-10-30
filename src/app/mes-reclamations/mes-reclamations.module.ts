import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesReclamationsPageRoutingModule } from './mes-reclamations-routing.module';

import { MesReclamationsPage } from './mes-reclamations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesReclamationsPageRoutingModule
  ],
  declarations: [MesReclamationsPage]
})
export class MesReclamationsPageModule {}
