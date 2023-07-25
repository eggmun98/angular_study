import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfifComponent } from './ifif.component';

describe('IfifComponent', () => {
  let component: IfifComponent;
  let fixture: ComponentFixture<IfifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfifComponent]
    });
    fixture = TestBed.createComponent(IfifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
