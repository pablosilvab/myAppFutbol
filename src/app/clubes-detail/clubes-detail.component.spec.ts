import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesDetailComponent } from './clubes-detail.component';

describe('ClubesDetailComponent', () => {
  let component: ClubesDetailComponent;
  let fixture: ComponentFixture<ClubesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
