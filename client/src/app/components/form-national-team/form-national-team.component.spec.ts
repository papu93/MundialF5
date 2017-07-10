import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNationalTeamComponent } from './form-national-team.component';

describe('FormNationalTeamComponent', () => {
  let component: FormNationalTeamComponent;
  let fixture: ComponentFixture<FormNationalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNationalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNationalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
