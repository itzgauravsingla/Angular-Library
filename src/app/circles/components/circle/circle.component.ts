import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  @HostBinding('style.width.rem') @Input() radius: number = 5;
  @HostBinding('style.left.px') @Input() left: number = 500;
  @HostBinding('style.top.px') @Input() top: number = 500;
  @HostBinding('style.backgroundColor') @Input() color: string = 'red';


  constructor() {}
}
