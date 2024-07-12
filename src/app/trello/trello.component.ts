import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.scss']
})
export class TrelloComponent {

  @ViewChild('trelloBoard', { read: ViewContainerRef }) trelloBoard!: any;
  @ViewChild('appCardContainerRef', { read: ViewContainerRef }) appCardContainerRef!: any;


  addCard(): void {
    this.appCardContainerRef.createComponent(CardComponent)
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    const timelines = document.querySelectorAll('.timeline');
    let smallestOffset = Number.POSITIVE_INFINITY;
    let closestTimeline;
    timelines.forEach(timeline => {
      const offset = Math.abs(event.clientX - (timeline.getClientRects()[0].left + timeline.getClientRects()[0].width / 2));
      if (offset < smallestOffset) {
        smallestOffset = offset;
        closestTimeline = timeline;
      }
    });
    const insertBeforeCard = [...closestTimeline!.querySelectorAll('app-card:not(.dragging)')].reduce((closest, current) => {
      const offset = (event.clientY - (current.getClientRects()[0].top + current.getClientRects()[0].height / 2));
      if (offset < 0 && closest.offset < offset) {
        return { element: current, offset }
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
    if (insertBeforeCard) {
      closestTimeline!.insertBefore(document.querySelector('.dragging')!, insertBeforeCard);
    } else {
      closestTimeline!.appendChild(document.querySelector('.dragging')!);
    }
  }
}