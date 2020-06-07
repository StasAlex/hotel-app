import { async, TestBed } from '@angular/core/testing';
import { HotelAppUiModule } from './hotel-app-ui.module';

describe('HotelAppUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HotelAppUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HotelAppUiModule).toBeDefined();
  });
});
