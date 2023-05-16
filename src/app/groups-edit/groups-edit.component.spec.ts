import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsEditComponent } from './groups-edit.component';

describe('GroupsEditComponent', () => {
  let component: GroupsEditComponent;
  let fixture: ComponentFixture<GroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
