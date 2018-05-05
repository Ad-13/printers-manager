import { Component, OnInit } from '@angular/core';

import { PrinterService } from '../services/printer.service';

@Component({
  selector: 'app-printer-search',
  templateUrl: './printer-search.component.html',
  styleUrls: ['./printer-search.component.scss']
})
export class PrinterSearchComponent implements OnInit {

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
  }

  getPrinters(printerName: string) {
    this.printerService.emitNewPrinterObserver(printerName);
  }

}
