import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitatiComponent } from './activitati.component';

describe('ActivitatiComponent', () => {
  let component: ActivitatiComponent;
  let fixture: ComponentFixture<ActivitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
