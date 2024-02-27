import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskMoreInfoComponent } from './disk-more-info.component';

describe('DiskMoreInfoComponent', () => {
  let component: DiskMoreInfoComponent;
  let fixture: ComponentFixture<DiskMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskMoreInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
