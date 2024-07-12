import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { TrelloComponent } from './trello.component';
import { TrelloRoutingModule } from './trello-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    TrelloComponent
  ],
  imports: [
    ReactiveFormsModule,
    TrelloRoutingModule
  ]
})
export class TrelloModule { }
