import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNationalTeamComponent } from './add-national-team.component';

describe('AddNationalTeamComponent', () => {
  let component: AddNationalTeamComponent;
  let fixture: ComponentFixture<AddNationalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNationalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNationalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
