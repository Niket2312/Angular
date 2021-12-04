import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeAngularCompComponent } from './exe-angular-comp.component';

describe('ExeAngularCompComponent', () => {
  let component: ExeAngularCompComponent;
  let fixture: ComponentFixture<ExeAngularCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeAngularCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeAngularCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
