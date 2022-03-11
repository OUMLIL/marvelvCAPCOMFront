import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteCharacterComponent } from './admin-delete-character.component';

describe('AdminDeleteCharacterComponent', () => {
  let component: AdminDeleteCharacterComponent;
  let fixture: ComponentFixture<AdminDeleteCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
