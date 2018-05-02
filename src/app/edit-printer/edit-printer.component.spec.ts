import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrinterComponent } from './edit-printer.component';

describe('EditPrinterComponent', () => {
  let component: EditPrinterComponent;
  let fixture: ComponentFixture<EditPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
