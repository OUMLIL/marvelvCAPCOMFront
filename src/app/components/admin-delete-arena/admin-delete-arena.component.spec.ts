import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteArenaComponent } from './admin-delete-arena.component';

describe('AdminDeleteArenaComponent', () => {
  let component: AdminDeleteArenaComponent;
  let fixture: ComponentFixture<AdminDeleteArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
