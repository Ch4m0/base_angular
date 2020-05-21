import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListPatientsComponent } from './show-list-patients.component';

describe('ShowListPatientsComponent', () => {
  let component: ShowListPatientsComponent;
  let fixture: ComponentFixture<ShowListPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
