import { Component, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

import { CircleComponent } from './components/circle/circle.component';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent {
  @ViewChild('viewCompRef', { read: ViewContainerRef }) viewCompRef: any;
  left: number = 0;
  top: number = 0;
  radius: number = 15;
  color: string = 'red';
  circles: {xPos: number, yPos: number}[] = [];

  constructor() { }

  private addCircle(xPos: number, yPos: number): void {
    this.circles.push({
      xPos: xPos,
      yPos: yPos
    });
  }

  private isIntersecting(xPos: number, yPos: number): boolean {
    return this.circles.some(circle => {
      return Math.sqrt(Math.pow(Math.abs(circle.xPos - xPos), 2) + Math.pow(Math.abs(circle.yPos - yPos), 2)) < 15*16;
    });
  }

  @HostListener('document:click', ['$event'])
  mouseClickHandler(event: any): void {
    const compRef = this.viewCompRef.createComponent(CircleComponent);
    compRef.setInput('radius', '15');
    compRef.setInput('left', event.x - 7.5*16);
    compRef.setInput('top', event.y - 7.5*16);
    if (this.isIntersecting(event.x - 7.5*16, event.y - 7.5*16)) {
      compRef.setInput('color', 'blue');
    }
    this.addCircle(event.x - 7.5*16, event.y - 7.5*16);
  }
  @HostListener('document:mousemove', ['$event'])
  mouseTrackHandler(event: any): void {
    this.left = (event.x - 7.5*16);
    this.top = (event.y - 7.5*16);
    if (this.isIntersecting(event.x - 7.5*16, event.y - 7.5*16)) {
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }
}
