import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedAreaLineComponent } from './stacked-area-line.component';

describe('StackedAreaLineComponent', () => {
  let component: StackedAreaLineComponent;
  let fixture: ComponentFixture<StackedAreaLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedAreaLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedAreaLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
