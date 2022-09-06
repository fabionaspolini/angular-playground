import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapDiskTreeComponent } from './treemap-disk-tree.component';

describe('TreemapDiskTreeComponent', () => {
  let component: TreemapDiskTreeComponent;
  let fixture: ComponentFixture<TreemapDiskTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreemapDiskTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreemapDiskTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
