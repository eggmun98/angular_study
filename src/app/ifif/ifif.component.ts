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
    // target 속성은 EventTarget 인터페이스를 따른다.
    // 하지만 EventTarget 인터페이스에서는 value 속성이 없다.
    // 그래서 as를 통해서 HTMLInputElement 타입을 써줘야 한다.
    console.log(this.eventData);
  }

  // 앵귤러에서 화살표 함수 쓰는법
  // onChangeData = (event: Event) => {
  //   this.eventData = (event.target as HTMLInputElement).value;
  //   console.log(this.eventData);
  // };
}
