import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistEditComponent } from './blacklist-edit.component';

describe('BlacklistEditComponent', () => {
  let component: BlacklistEditComponent;
  let fixture: ComponentFixture<BlacklistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
