import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QqqComponent } from './qqq.component';

describe('QqqComponent', () => {
  let component: QqqComponent;
  let fixture: ComponentFixture<QqqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QqqComponent]
    });
    fixture = TestBed.createComponent(QqqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
