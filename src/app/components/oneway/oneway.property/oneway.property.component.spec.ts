import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayPropertyComponent } from './oneway.property.component';

describe('OnewayPropertyComponent', () => {
  let component: OnewayPropertyComponent;
  let fixture: ComponentFixture<OnewayPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnewayPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnewayPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
