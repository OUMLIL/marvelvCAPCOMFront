import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAbComponent } from './admin-add-ab.component';

describe('AdminAddAbComponent', () => {
  let component: AdminAddAbComponent;
  let fixture: ComponentFixture<AdminAddAbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddAbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
