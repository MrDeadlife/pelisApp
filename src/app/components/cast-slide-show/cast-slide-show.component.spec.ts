import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSlideShowComponent } from './cast-slide-show.component';

describe('CastSlideShowComponent', () => {
  let component: CastSlideShowComponent;
  let fixture: ComponentFixture<CastSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
