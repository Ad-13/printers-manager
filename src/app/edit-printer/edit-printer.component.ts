import { Component, OnInit } from '@angular/core';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';

@Component({
  selector: 'app-edit-printer',
  templateUrl: './edit-printer.component.html',
  styleUrls: ['./edit-printer.component.scss']
})
export class EditPrinterComponent implements OnInit {

  printer: Printer = new Printer();

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addPrinter(this.printer);
  }

  addPrinter(printer: Printer) {
    console.log(printer);
    // if (!name) { return; }
    this.printerService.addPrinter(printer)
      .subscribe(printer => {
        this.printer = printer;
      });
  }

}
