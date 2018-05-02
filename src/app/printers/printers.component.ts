import { Component, OnInit } from '@angular/core';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss']
})
export class PrintersComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'status',
    'network address',
    'description',
    'colour',
    'year',
    'report link',
    'actions'
  ];
  printers: Printer[];

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.getPrinters();
  }

  getPrinters(): void {
    this.printerService.getPrinters()
    .subscribe(printers => this.printers = printers);
  }

}
