import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterSearchComponent } from './printer-search.component';

describe('PrinterSearchComponent', () => {
  let component: PrinterSearchComponent;
  let fixture: ComponentFixture<PrinterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
