import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';

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

  constructor(private printerService: PrinterService) { }

  ngOnInit() {
    this.subscription = this.printerService.subscribeNewPrinterObserver().subscribe((printerName: string) => {
      this.getPrinters(printerName);
      console.log('FilmListComponent getFilms');
    });
    this.getPrinters();
  }

  sortByProp(event, propName: string) {
    let elem = event.target,
        elemClasses = elem.classList;
    if ( !elemClasses.contains('sorted') ) {
      elemClasses.add('sorted');
      elemClasses.remove('reversed');
      this.printers.sort(simpleCompare.bind(null, propName));
    } else {
      elemClasses.add('reversed');
      elemClasses.remove('sorted');
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
