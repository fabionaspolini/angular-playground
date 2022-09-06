import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeyEnergyComponent } from './energy-sankey.component';

describe('SankeyEnergyComponent', () => {
  let component: SankeyEnergyComponent;
  let fixture: ComponentFixture<SankeyEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SankeyEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SankeyEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
