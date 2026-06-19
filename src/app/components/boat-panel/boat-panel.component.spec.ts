import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatPanelComponent } from './boat-panel.component';

describe('BoatPanelComponent', () => {
  let component: BoatPanelComponent;
  let fixture: ComponentFixture<BoatPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
