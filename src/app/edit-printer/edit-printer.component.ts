import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PrinterService } from '../services/printer.service';

import { Printer } from '../interfaces/printer';

import {
  onlyNumbers,
  validIP
} from '../utils/utils'

@Component({
  selector: 'app-edit-printer',
  templateUrl: './edit-printer.component.html',
  styleUrls: ['./edit-printer.component.scss']
})
export class EditPrinterComponent implements OnInit {

  @Input()
  printer: Printer = new Printer();
  
  printerForm: FormGroup;

  constructor(
    private printerService: PrinterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPrinter();
    this.printerForm = new FormGroup({
      'name': new FormControl(this.printer.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'status': new FormControl(this.printer.status, [
        Validators.required
      ]),
      'networkAddress': new FormControl(this.printer.networkAddress, [
        Validators.required,
        validIP
      ]),
      'description': new FormControl(this.printer.description, [
        Validators.required
      ]),
      'colour': new FormControl(this.printer.colour, [
        Validators.required
      ]),
      'year': new FormControl(this.printer.year, [
        Validators.required,
        onlyNumbers
      ])
    });
  }

  onSubmit() {
    if (this.printerForm.status === 'INVALID' ) {
      return;      
    }
    let editedPrinter = Object.assign(this.printer, this.printerForm.value);
    if ( this.printer.id ) {
      this.updatePrinter(editedPrinter);
    } else {
      this.addPrinter(editedPrinter);
    }
  }

  updateform() {
    this.printerForm.setValue({
      'name': this.printer.name,
      'status': this.printer.status,
      'networkAddress': this.printer.networkAddress,
      'description': this.printer.description,
      'colour': this.printer.colour,
      'year': this.printer.year
    });
  }

  getPrinter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.printerService.getPrinterById(id)
        .subscribe(printer => {
          this.printer = printer;
          this.updateform();
        });
    }
  }

  addPrinter(printer: Printer) {
    if (!printer) { return; }
    this.printerService.addPrinter(printer)
      .subscribe(() => this.goBack());
  }

  updatePrinter(printer): void {
    this.printerService.updatePrinter(printer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
