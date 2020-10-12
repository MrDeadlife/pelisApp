import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalideshowComponent } from './salideshow.component';

describe('SalideshowComponent', () => {
  let component: SalideshowComponent;
  let fixture: ComponentFixture<SalideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
