import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedEditComponent } from './banned-edit.component';

describe('BannedEditComponent', () => {
  let component: BannedEditComponent;
  let fixture: ComponentFixture<BannedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannedEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
