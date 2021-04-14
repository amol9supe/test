import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectuiLibComponent } from './multiselectui-lib.component';

describe('MultiselectuiLibComponent', () => {
  let component: MultiselectuiLibComponent;
  let fixture: ComponentFixture<MultiselectuiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectuiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
