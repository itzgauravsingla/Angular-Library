import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleComponent } from './components/circle/circle.component';
import { CirclesComponent } from './circles.component';
import { CirclesRoutingModule } from './circles-routing.module';



@NgModule({
  declarations: [
    CircleComponent,
    CirclesComponent
  ],
  imports: [
    CirclesRoutingModule,
  ]
})
export class CirclesModule { }
