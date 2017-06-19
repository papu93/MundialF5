import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTeamsComponent } from './national-teams.component';

describe('NationalTeamsComponent', () => {
  let component: NationalTeamsComponent;
  let fixture: ComponentFixture<NationalTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
