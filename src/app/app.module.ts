import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // routing를 설치하면 생성이 된다.
import { AppComponent } from './app.component';
import { QqqComponent } from './qqq/qqq.component';
import { QqqDirective } from './qqq.directive';
import { BtnComponent } from './btn/btn.component';
import { IfifComponent } from './ifif/ifif.component';
import { AjaxComponent } from './ajax/ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    QqqComponent,
    QqqDirective,
    BtnComponent,
    IfifComponent,
    AjaxComponent,
  ], // 해당 모듈에 포함될 구성요소(컴포넌트나 디렉티브, 파이브)의 리스트를 선언한다.
  // exports: 해당 모듈의 컴포넌트나 디렉티브을 다른 모듈에서 사용하고 싶을 때 작성. AppModule(최상위 모듈)에는 존재하지 않는다.
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], //  FormsModule, AppRoutingModule 등과 같은 외부 모듈(혹은 라이브러리)을 사용하고 싶을 때 추가한다. 외부 모듈은 앵귤러 모듈일수도 있고, 사용자가 정의한 모듈일수도 있다.
  providers: [], // 모듈 내에 생성된 서비스 프로바이더를 작성한다. injector가 여기에서 서비스의 존재를 알아 차릴 수 있다.
  bootstrap: [AppComponent], // 프로젝트의 진입점으로 최상위 컴포넌트(일반적으로 app.module.ts)에만 작성한다.
})
export class AppModule {}

// 모든 앵귤러의 프로젝트에서는 하나 이상의 모듈이 존재 한다.
// 보통 app.module.ts 모듈이 최상위 모듈이다.
// 리액트의 App.js와 비슷하다.

// 새로 생성된 컴포넌트는 하나의 NgModule에서 불러와야 사용할 수 있다.

// 앵귤러의 기본 포트는 4200이다.

// 아래는 앵귤러의 포트를 변경하는 방법이다.
// ng serve --port 3000
// ng serve --open --port 4300
