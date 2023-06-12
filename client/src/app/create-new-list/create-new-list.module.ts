import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewListPageRoutingModule } from './create-new-list-routing.module';

import { CreateNewListPage } from './create-new-list.page';

import { CreateService } from '../services/create.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewListPageRoutingModule
  ],
  providers: [CreateService],
  declarations: [CreateNewListPage]
})
export class CreateNewListPageModule {}
