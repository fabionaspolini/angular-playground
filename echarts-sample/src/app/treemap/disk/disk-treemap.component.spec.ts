import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskTreemapComponent } from './disk-treemap.component';

describe('TreemapDiskTreeComponent', () => {
  let component: DiskTreemapComponent;
  let fixture: ComponentFixture<DiskTreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskTreemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
