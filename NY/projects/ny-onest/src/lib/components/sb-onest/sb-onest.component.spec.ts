import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbOnestComponent } from './ey-onest.component';

describe('SbOnestComponent', () => {
  let component: SbOnestComponent;
  let fixture: ComponentFixture<SbOnestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbOnestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbOnestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
