import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentenarComponent } from './centenar.component';

describe('CentenarComponent', () => {
  let component: CentenarComponent;
  let fixture: ComponentFixture<CentenarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentenarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
