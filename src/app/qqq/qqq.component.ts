import { Component } from '@angular/core';

@Component({
  selector: 'qqq-component',
  templateUrl: './qqq.component.html', // html 템플릿과 연결하기 위해 주소를 적는다.
  // 또 이 템플릿 url 대신 <p>바로 태그로 작성 가능</p> 이렇게 바로 태그로 작성이 가능하다.
  // 바로 작성을 하려면 template 속성을 이용해야 한다.
  styleUrls: ['./qqq.component.css'],
})
export class QqqComponent {
  myText = '텍스트 변수입니다.';
  myCount = 1;
  myBoolean = false;

  onClickCount() {
    this.myCount++;
    console.log(this.myCount);
  }

  onClickIsTrue() {
    this.myBoolean = !this.myBoolean;
  }
}
