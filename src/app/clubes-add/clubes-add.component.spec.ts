import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesAddComponent } from './clubes-add.component';

describe('ClubesAddComponent', () => {
  let component: ClubesAddComponent;
  let fixture: ComponentFixture<ClubesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
