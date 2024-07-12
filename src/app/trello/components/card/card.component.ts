import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @HostBinding('class') hostClass: string | null = null;

  @ViewChild('cardWrapper') cardWrapper!: ElementRef;

  colorPicker = new FormControl('#ffffff');

  ngOnInit(): void {
    this.colorPicker.valueChanges.subscribe(value => {
      this.cardWrapper.nativeElement.style.backgroundColor = value;
    });
  }

  dragStart(event: DragEvent): void {
    this.hostClass = 'dragging';
  }

  dragEnd(event: Event): void {
    this.hostClass = null;
  }

}
