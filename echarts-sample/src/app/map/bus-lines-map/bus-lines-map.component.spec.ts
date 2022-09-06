import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLinesMapComponent } from './bus-lines-map.component';

describe('BusLinesMapComponent', () => {
  let component: BusLinesMapComponent;
  let fixture: ComponentFixture<BusLinesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusLinesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusLinesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
