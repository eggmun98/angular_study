import { Component } from '@angular/core';

@Component({
  selector: 'ifif-component',
  templateUrl: './ifif.component.html',
  styleUrls: ['./ifif.component.css'],
})
export class IfifComponent {
  eventData = '';

  onChangeData(event: Event) {
    this.eventData = (event.target as HTMLInputElement).value;
    console.log(this.eventData);
  }
}
