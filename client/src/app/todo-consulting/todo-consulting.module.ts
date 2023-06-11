import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListItemsServices } from '../services/todo-consulting.service';

import { IonicModule } from '@ionic/angular';

import { TodoConsultingPageRoutingModule } from './todo-consulting-routing.module';

import { TodoConsultingPage } from './todo-consulting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoConsultingPageRoutingModule
  ],
  providers: [ListItemsServices],
  declarations: [TodoConsultingPage]
})
export class TodoConsultingPageModule {}
