import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanulokComponent } from './tanulok.component';

describe('TanulokComponent', () => {
  let component: TanulokComponent;
  let fixture: ComponentFixture<TanulokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanulokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanulokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
