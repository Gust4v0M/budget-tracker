import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealcomePageComponent } from './wealcome-page.component';

describe('WealcomePageComponent', () => {
  let component: WealcomePageComponent;
  let fixture: ComponentFixture<WealcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WealcomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WealcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
