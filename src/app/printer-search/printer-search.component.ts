import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { PrinterService } from '../services/printer.service';

@Component({
  selector: 'app-printer-search',
  templateUrl: './printer-search.component.html',
  styleUrls: ['./printer-search.component.scss']
})
export class PrinterSearchComponent implements OnDestroy, OnInit {
  firstNameControl = new FormControl();
  private subscription: Subscription;

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.subscription = this.firstNameControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(printerName => this.printerService.emitNewPrinterObserver(printerName));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
