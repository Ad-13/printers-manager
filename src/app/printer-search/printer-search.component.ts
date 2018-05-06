import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PrinterService } from '../services/printer.service';

@Component({
  selector: 'app-printer-search',
  templateUrl: './printer-search.component.html',
  styleUrls: ['./printer-search.component.scss']
})
export class PrinterSearchComponent implements OnInit {
  firstNameControl = new FormControl();

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.firstNameControl.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(printerName => this.printerService.emitNewPrinterObserver(printerName))
  }

}
