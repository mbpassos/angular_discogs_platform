import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskMainPageComponent } from './disk-main-page.component';

describe('DiskMainPageComponent', () => {
  let component: DiskMainPageComponent;
  let fixture: ComponentFixture<DiskMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
