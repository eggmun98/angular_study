import { Component } from '@angular/core';

@Component({
  selector: 'btn-component',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  onClickModal() {
    alert('알림창 입니다.');
  }
}
