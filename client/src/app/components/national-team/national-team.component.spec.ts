import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTeamComponent } from './national-team.component';

describe('NationalTeamComponent', () => {
  let component: NationalTeamComponent;
  let fixture: ComponentFixture<NationalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
