import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteAbComponent } from './admin-delete-ab.component';

describe('AdminDeleteAbComponent', () => {
  let component: AdminDeleteAbComponent;
  let fixture: ComponentFixture<AdminDeleteAbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteAbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
