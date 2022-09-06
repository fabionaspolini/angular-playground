import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedLineComponent } from './stacked-line.component';

describe('StackedLineComponent', () => {
  let component: StackedLineComponent;
  let fixture: ComponentFixture<StackedLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
