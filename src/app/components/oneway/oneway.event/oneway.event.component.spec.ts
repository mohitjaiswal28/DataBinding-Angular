import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayEventComponent } from './oneway.event.component';

describe('OnewayEventComponent', () => {
  let component: OnewayEventComponent;
  let fixture: ComponentFixture<OnewayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnewayEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnewayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
