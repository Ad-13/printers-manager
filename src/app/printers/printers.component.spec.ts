import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintersComponent } from './printers.component';

describe('PrintersComponent', () => {
  let component: PrintersComponent;
  let fixture: ComponentFixture<PrintersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
