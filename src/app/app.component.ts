import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_study';
  isTrue = false;

  onClickIsTrue() {
    this.isTrue = !this.isTrue;
  }
}
