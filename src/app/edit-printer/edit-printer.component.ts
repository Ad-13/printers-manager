import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';

@Component({
  selector: 'app-edit-printer',
  templateUrl: './edit-printer.component.html',
  styleUrls: ['./edit-printer.component.scss']
})
export class EditPrinterComponent implements OnInit {

  @Input()
  printer: Printer = new Printer();

  constructor(
    private printerService: PrinterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPrinter();
  }

  onSubmit() {
    if ( this.printer.id ) {
      this.updatePrinter();
    } else {
      this.addPrinter(this.printer);
    }
  }

  getPrinter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.printerService.getPrinter(id)
        .subscribe(printer => this.printer = printer);
    }
  }

  addPrinter(printer: Printer) {
    if (!printer) { return; }
    this.printerService.addPrinter(printer)
    .subscribe(() => {
        this.printer = new Printer();
      });
  }

  updatePrinter(): void {
    this.printerService.updatePrinter(this.printer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
