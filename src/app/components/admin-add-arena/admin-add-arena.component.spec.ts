import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddArenaComponent } from './admin-add-arena.component';

describe('AdminAddArenaComponent', () => {
  let component: AdminAddArenaComponent;
  let fixture: ComponentFixture<AdminAddArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
