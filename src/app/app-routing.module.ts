import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrintersComponent } from './printers/printers.component';
import { EditPrinterComponent } from './edit-printer/edit-printer.component';

const routes: Routes = [
  { path: '', redirectTo: '/printers', pathMatch: 'full' },
  { path: 'printers', component: PrintersComponent },
  { path: 'edit-printer/:id', component: EditPrinterComponent },
  { path: 'edit-printer', component: EditPrinterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}