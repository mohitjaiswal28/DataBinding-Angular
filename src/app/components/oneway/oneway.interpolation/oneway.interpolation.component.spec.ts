import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayInterpolationComponent } from './oneway.interpolation.component';

describe('OnewayInterpolationComponent', () => {
  let component: OnewayInterpolationComponent;
  let fixture: ComponentFixture<OnewayInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnewayInterpolationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnewayInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
