import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'ajax-component',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
})
export class AjaxComponent {
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        console.log('데이터: ', data);
      },
      (error) => {
        console.error('에러: ', error);
      }
    );
  }

  // get이 반환하는 Observable 객체 안에 subscribe 메서드가 있음
  // Observable은 HTTP 요청의 응답을 나타내는 비동기 데이터 스트림이다.

  //subscribe 메서드는 이 Observable을 구독하는 역할을 한다.
  // 즉, get 메서드로부터 반환받은 Observable 객체에 subscribe를 호출하여,
  // HTTP 요청의 응답을 처리하는 콜백 함수들을 등록하는 것이다.

  // subscribe 메서드는 비동기 작업을 도와줌
  // 첫번째 인자로 next는 Observable이 새로운 값을 방출할 때마다 호출되는 콜백 함수이다.
  // 두번째 인자로 error은 오류가 발생했을 때 호출되는 콜백함수이다.
  // 세번쨰 인자는 complete로 데이터의 스트림이 완료되었을 때 호출되는 콜백 함수이다. (이 함수는 인자를 받지 않는다.)
}
