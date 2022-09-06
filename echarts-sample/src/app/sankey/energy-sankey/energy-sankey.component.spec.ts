import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySankeyComponent } from './energy-sankey.component';

describe('SankeyEnergyComponent', () => {
  let component: EnergySankeyComponent;
  let fixture: ComponentFixture<EnergySankeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergySankeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergySankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
