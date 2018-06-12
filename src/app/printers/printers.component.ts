import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Subscription } from 'rxjs';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';
import { SortedColumns } from '../interfaces/sortedColumns';

import {
	simpleCompare
} from '../utils/utils';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss']
})
export class PrintersComponent implements OnInit {
  @ViewChild('printersTable') printersTable: any;
  private subscription: Subscription;
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
  sortedColumns = new SortedColumns();

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.subscription = this.printerService.subscribeNewPrinterObserver().subscribe((printerName: string) => {
      this.getPrinters(printerName);
    });
    this.getPrinters();
  }

  updateSortedColumns(propName, value) {
    let newSortedColumns = new SortedColumns();
    newSortedColumns[propName] = value;
    this.sortedColumns = newSortedColumns;
  }

  sortByProp(event, propName: string) {
    let elem = event.target.parentElement,
        elemClasses = elem.classList;
    if ( !elemClasses.contains('sorted') ) {
      this.updateSortedColumns(propName, 'sorted');
      this.printers.sort(simpleCompare.bind(null, propName));
    } else {
      this.updateSortedColumns(propName, 'sorted-reversed');
      this.printers.reverse();
    }
    this.printersTable.renderRows();
  }

  getPrinters(query?: any): void {
    this.printerService.getPrinters(query)
      .subscribe(printers => this.printers = printers);
  }

  deletePrinter(printerToDelete: Printer): void {
    this.printers = this.printers.filter(printer => printer !== printerToDelete);
    this.printerService.deletePrinter(printerToDelete).subscribe();
  }

}
