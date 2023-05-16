import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliancesComponent } from './alliances.component';

describe('AlliancesComponent', () => {
  let component: AlliancesComponent;
  let fixture: ComponentFixture<AlliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
