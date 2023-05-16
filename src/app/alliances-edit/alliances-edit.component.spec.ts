import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliancesEditComponent } from './alliances-edit.component';

describe('AlliancesEditComponent', () => {
  let component: AlliancesEditComponent;
  let fixture: ComponentFixture<AlliancesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlliancesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlliancesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
