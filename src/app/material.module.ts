import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatTableModule
    ]
})

export class MaterialModule { }
