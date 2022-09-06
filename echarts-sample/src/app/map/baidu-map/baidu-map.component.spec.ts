import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduMapComponent } from './baidu-map.component';

describe('BaiduMapComponent', () => {
  let component: BaiduMapComponent;
  let fixture: ComponentFixture<BaiduMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiduMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaiduMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
