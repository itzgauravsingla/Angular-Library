import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @HostBinding('class') hostClass: string | null = null;

  @ViewChild('cardWrapper') cardWrapper!: ElementRef;

  colorPicker = new FormControl();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.colorPicker.valueChanges.subscribe(value => {
      this.cardWrapper.nativeElement.style.backgroundColor = value;
    });

    this.colorPicker.setValue(this.getRandomColor());
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  dragStart(event: DragEvent): void {
    this.hostClass = 'dragging';
  }

  dragEnd(event: Event): void {
    this.hostClass = null;
  }

}
