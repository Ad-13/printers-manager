webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__printers_printers_component__ = __webpack_require__("./src/app/printers/printers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_printer_edit_printer_component__ = __webpack_require__("./src/app/edit-printer/edit-printer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/printers', pathMatch: 'full' },
    { path: 'printers', component: __WEBPACK_IMPORTED_MODULE_2__printers_printers_component__["a" /* PrintersComponent */] },
    { path: 'edit-printer/:id', component: __WEBPACK_IMPORTED_MODULE_3__edit_printer_edit_printer_component__["a" /* EditPrinterComponent */] },
    { path: 'edit-printer', component: __WEBPACK_IMPORTED_MODULE_3__edit_printer_edit_printer_component__["a" /* EditPrinterComponent */] },
    { path: "**", redirectTo: '/printers', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<mat-drawer-container class=\"main\">\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 20px 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__printers_printers_component__ = __webpack_require__("./src/app/printers/printers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_printer_edit_printer_component__ = __webpack_require__("./src/app/edit-printer/edit-printer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_printer_service__ = __webpack_require__("./src/app/services/printer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__printer_search_printer_search_component__ = __webpack_require__("./src/app/printer-search/printer-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__printers_printers_component__["a" /* PrintersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_printer_edit_printer_component__["a" /* EditPrinterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__printer_search_printer_search_component__["a" /* PrinterSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_printer_service__["a" /* PrinterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MOCK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_OPTIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");

var MOCK_URL = 'http://localhost:3000/printers';
var HTTP_OPTIONS = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};


/***/ }),

/***/ "./src/app/edit-printer/edit-printer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"printer-name\">{{printer.name}}</h2>\n  <p *ngIf=\"printer.id\"  class=\"printer-id\">Id: {{printer.id}}</p>\n  <form (ngSubmit)=\"onSubmit();\" \n        class=\"printer-form\" \n        [formGroup]=\"printerForm\">\n    <mat-form-field class=\"edit-printer__input\">\n      <input matInput \n             placeholder=\"Name\" \n             formControlName=\"name\">\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.name.invalid && (printerForm.controls.name.dirty || printerForm.controls.name.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.name.errors.required\">\n        Name is required.\n      </div>\n      <div *ngIf=\"printerForm.controls.name.errors.minlength\">\n        Name must be at least 4 characters long.\n      </div>\n    </div>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Status\" formControlName=\"status\">\n        <mat-option value=\"active\">Active</mat-option>\n        <mat-option value=\"inactive\">Inactive</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.status.invalid && (printerForm.controls.status.dirty || printerForm.controls.status.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.status.errors.required\">\n          Status is required.\n      </div>\n    </div>\n\n    <mat-form-field class=\"edit-printer__input\">\n      <input matInput placeholder=\"Network Address\" formControlName=\"networkAddress\">\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.networkAddress.invalid && (printerForm.controls.networkAddress.dirty || printerForm.controls.networkAddress.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.networkAddress.errors.required\">\n          Network Address is required.\n      </div>\n      <div *ngIf=\"printerForm.controls.networkAddress.errors.validIP\">\n          Network Address is incorrect.\n      </div>\n    </div>\n  \n    <mat-form-field class=\"edit-printer__input\">\n      <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.description.invalid && (printerForm.controls.description.dirty || printerForm.controls.description.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.description.errors.required\">\n          Description is required.\n      </div>\n    </div>\n\n    <mat-form-field class=\"edit-printer__input\">\n      <input matInput placeholder=\"Colour\" formControlName=\"colour\">\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.colour.invalid && (printerForm.controls.colour.dirty || printerForm.controls.colour.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.colour.errors.required\">\n          Colour is required.\n      </div>\n    </div>\n\n    <mat-form-field class=\"edit-printer__input\">\n      <input matInput placeholder=\"Year\" formControlName=\"year\">\n    </mat-form-field>\n    <div *ngIf=\"printerForm.controls.year.invalid && (printerForm.controls.year.dirty || printerForm.controls.year.touched)\"\n          class=\"alert alert-danger\">\n      <div *ngIf=\"printerForm.controls.year.errors.required\">\n          Year is required.\n      </div>\n      <div *ngIf=\"printerForm.controls.year.errors.onlyNumbers\">\n        Only number can be set.\n      </div>\n    </div>\n\n    <div class=\"printer-form__btns\">\n      <button mat-button type=\"submit\" [disabled]=\"!printerForm.valid\" class=\"printer-form__submit\">Save!</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/edit-printer/edit-printer.component.scss":
/***/ (function(module, exports) {

module.exports = ".edit-printer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.edit-printer__input {\n  width: 100%; }\n\n.alert {\n  color: #f00; }\n\n.printer-name {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 10px; }\n\n.printer-id {\n  font-size: 25px;\n  text-align: center;\n  margin-bottom: 20px; }\n\n.printer-form__submit {\n  background: #1c9cf7;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/edit-printer/edit-printer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPrinterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_printer_service__ = __webpack_require__("./src/app/services/printer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_printer__ = __webpack_require__("./src/app/interfaces/printer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPrinterComponent = /** @class */ (function () {
    function EditPrinterComponent(printerService, route, location) {
        this.printerService = printerService;
        this.route = route;
        this.location = location;
        this.printer = new __WEBPACK_IMPORTED_MODULE_5__interfaces_printer__["a" /* Printer */]();
    }
    EditPrinterComponent.prototype.ngOnInit = function () {
        this.getPrinter();
        this.printerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.name, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(4)
            ]),
            'status': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.status, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
            ]),
            'networkAddress': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.networkAddress, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__utils_utils__["d" /* validIP */]
            ]),
            'description': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.description, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
            ]),
            'colour': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.colour, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
            ]),
            'year': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.printer.year, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_6__utils_utils__["b" /* onlyNumbers */]
            ])
        });
    };
    EditPrinterComponent.prototype.onSubmit = function () {
        if (this.printerForm.status === 'INVALID') {
            return;
        }
        var editedPrinter = Object.assign(this.printer, this.printerForm.value);
        if (this.printer.id) {
            this.updatePrinter(editedPrinter);
        }
        else {
            this.addPrinter(editedPrinter);
        }
    };
    EditPrinterComponent.prototype.updateform = function () {
        this.printerForm.setValue({
            'name': this.printer.name,
            'status': this.printer.status,
            'networkAddress': this.printer.networkAddress,
            'description': this.printer.description,
            'colour': this.printer.colour,
            'year': this.printer.year
        });
    };
    EditPrinterComponent.prototype.getPrinter = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        if (id) {
            this.printerService.getPrinterById(id)
                .subscribe(function (printer) {
                _this.printer = printer;
                _this.updateform();
            });
        }
    };
    EditPrinterComponent.prototype.addPrinter = function (printer) {
        var _this = this;
        if (!printer) {
            return;
        }
        this.printerService.addPrinter(printer)
            .subscribe(function () { return _this.goBack(); });
    };
    EditPrinterComponent.prototype.updatePrinter = function (printer) {
        var _this = this;
        this.printerService.updatePrinter(printer)
            .subscribe(function () { return _this.goBack(); });
    };
    EditPrinterComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__interfaces_printer__["a" /* Printer */])
    ], EditPrinterComponent.prototype, "printer", void 0);
    EditPrinterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-printer',
            template: __webpack_require__("./src/app/edit-printer/edit-printer.component.html"),
            styles: [__webpack_require__("./src/app/edit-printer/edit-printer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_printer_service__["a" /* PrinterService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], EditPrinterComponent);
    return EditPrinterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h2>Footer</h2>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header\">\n  <nav class=\"nav\">\n    <a mat-button routerLink=\"/printers\" class=\"nav-link\">Printers List</a>\n    <a mat-button routerLink=\"/edit-printer\" class=\"nav-link\">Add Printer</a>\n  </nav>\n  <h1 class=\"header-title\">Printers Application</h1>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: auto;\n  padding: 20px 10px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.nav-link {\n  background: #6379ef;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n\n.nav-link:hover {\n    background: #798cf4;\n    text-decoration: none; }\n\n.nav-link .mat-button-focus-overlay {\n    display: none; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/printer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Printer; });
var Printer = /** @class */ (function () {
    function Printer() {
        this.id = null;
        this.name = null;
        this.status = null;
        this.networkAddress = null;
        this.description = null;
        this.colour = null;
        this.year = null;
        this.reportLink = null;
    }
    return Printer;
}());



/***/ }),

/***/ "./src/app/interfaces/sortedColumns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortedColumns; });
var SortedColumns = /** @class */ (function () {
    function SortedColumns(id, name) {
        this.id = null;
        this.name = null;
        this.id = id;
        this.name = name;
    }
    return SortedColumns;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatListModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/printer-search/printer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <form class=\"printer-search\">\n    <mat-form-field class=\"printer-search-inputs\">\n      <input matInput \n          placeholder=\"Search Printer\"\n          class=\"input\"\n          [formControl]=\"firstNameControl\">\n    </mat-form-field>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/printer-search/printer-search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/printer-search/printer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_printer_service__ = __webpack_require__("./src/app/services/printer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrinterSearchComponent = /** @class */ (function () {
    function PrinterSearchComponent(printerService) {
        this.printerService = printerService;
        this.firstNameControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
    }
    PrinterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstNameControl.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (printerName) { return _this.printerService.emitNewPrinterObserver(printerName); });
    };
    PrinterSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-printer-search',
            template: __webpack_require__("./src/app/printer-search/printer-search.component.html"),
            styles: [__webpack_require__("./src/app/printer-search/printer-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_printer_service__["a" /* PrinterService */]])
    ], PrinterSearchComponent);
    return PrinterSearchComponent;
}());



/***/ }),

/***/ "./src/app/printers/printers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-printer-search></app-printer-search>\n  <mat-table #printersTable [dataSource]=\"printers\" class=\"printers-table mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef\n        [ngClass]=\"sortedColumns.id\"\n        class=\"sorted-col\">\n          <span class=\"txt\" (click)=\"sortByProp($event, 'id')\">No.<i class=\"sort-arr material-icons\">arrow_downward</i></span>\n        </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.id}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef\n        [ngClass]=\"sortedColumns.name\" \n        class=\"sorted-col\"\n        >\n          <span class=\"txt\" (click)=\"sortByProp($event, 'name')\">Name<i class=\"sort-arr material-icons\">arrow_downward</i></span>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef>Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.status}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <mat-header-cell *matHeaderCellDef>Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.description}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"network address\">\n      <mat-header-cell *matHeaderCellDef>Network Address </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.networkAddress}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"colour\">\n      <mat-header-cell *matHeaderCellDef>Colour </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.colour}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"year\">\n      <mat-header-cell *matHeaderCellDef>Year </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\"> {{printer.year}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"report link\">\n      <mat-header-cell *matHeaderCellDef>Printer Report </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\">\n        <a *ngIf=\"printer.reportLink\" \n            href=\"{{printer.reportLink}}\"\n            class=\"action-btn\"\n            download>\n            <i class=\"material-icons\">file_download</i>\n        </a>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>Actions </mat-header-cell>\n      <mat-cell *matCellDef=\"let printer\">\n        <a routerLink=\"/edit-printer/{{printer.id}}\" \n           class=\"action-btn\">\n            <i class=\"material-icons\">mode_edit</i>\n        </a>\n        <span (click)=\"deletePrinter(printer)\" class=\"action-btn action-btn--delete\"><i class=\"material-icons\">delete_forever</i></span>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/printers/printers.component.scss":
/***/ (function(module, exports) {

module.exports = ".printers-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  overflow: auto;\n  max-height: 500px;\n  min-width: 717px; }\n\n.mat-row {\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out; }\n\n.mat-row:hover {\n    background: #efefef; }\n\n.mat-column-id {\n  -webkit-box-flex: .4;\n      -ms-flex: .4;\n          flex: .4; }\n\n.mat-column-description {\n  -webkit-box-flex: 1.4;\n      -ms-flex: 1.4;\n          flex: 1.4; }\n\n.mat-column-network-address,\n.mat-column-status,\n.mat-column-year {\n  -webkit-box-flex: 0.8;\n      -ms-flex: 0.8;\n          flex: 0.8; }\n\n.mat-column-report-link {\n  -webkit-box-flex: 0.7;\n      -ms-flex: 0.7;\n          flex: 0.7; }\n\n.mat-column-report-actions {\n  -webkit-box-flex: 0.9;\n      -ms-flex: 0.9;\n          flex: 0.9; }\n\n.action-btn {\n  background: transparent;\n  border-radius: 50%;\n  color: #1a62bf;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  height: 40px;\n  width: 40px;\n  cursor: pointer; }\n\n.action-btn:hover {\n    background: #f7f7f7;\n    text-decoration: none; }\n\n.action-btn--delete {\n    color: #d74c4c; }\n\n.sorted-col .txt {\n  cursor: pointer;\n  position: relative;\n  display: inline-block; }\n\n.sorted-col.sorted .sort-arr {\n  opacity: 1; }\n\n.sorted-col.sorted-reversed .sort-arr {\n  opacity: 1;\n  -webkit-transform: translate(0, -50%) rotate(180deg);\n          transform: translate(0, -50%) rotate(180deg); }\n\n.sorted-col .sort-arr {\n  position: absolute;\n  font-size: 10px;\n  top: 50%;\n  left: 120%;\n  opacity: 0;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n"

/***/ }),

/***/ "./src/app/printers/printers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_printer_service__ = __webpack_require__("./src/app/services/printer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_sortedColumns__ = __webpack_require__("./src/app/interfaces/sortedColumns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintersComponent = /** @class */ (function () {
    function PrintersComponent(printerService) {
        this.printerService = printerService;
        this.displayedColumns = [
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
        this.sortedColumns = new __WEBPACK_IMPORTED_MODULE_2__interfaces_sortedColumns__["a" /* SortedColumns */]();
    }
    PrintersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.printerService.subscribeNewPrinterObserver().subscribe(function (printerName) {
            _this.getPrinters(printerName);
        });
        this.getPrinters();
    };
    PrintersComponent.prototype.updateSortedColumns = function (propName, value) {
        var newSortedColumns = new __WEBPACK_IMPORTED_MODULE_2__interfaces_sortedColumns__["a" /* SortedColumns */]();
        newSortedColumns[propName] = value;
        this.sortedColumns = newSortedColumns;
    };
    PrintersComponent.prototype.sortByProp = function (event, propName) {
        var elem = event.target.parentElement, elemClasses = elem.classList;
        if (!elemClasses.contains('sorted')) {
            this.updateSortedColumns(propName, 'sorted');
            this.printers.sort(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["c" /* simpleCompare */].bind(null, propName));
        }
        else {
            this.updateSortedColumns(propName, 'sorted-reversed');
            this.printers.reverse();
        }
        this.printersTable.renderRows();
    };
    PrintersComponent.prototype.getPrinters = function (query) {
        var _this = this;
        this.printerService.getPrinters(query)
            .subscribe(function (printers) { return _this.printers = printers; });
    };
    PrintersComponent.prototype.deletePrinter = function (printerToDelete) {
        this.printers = this.printers.filter(function (printer) { return printer !== printerToDelete; });
        this.printerService.deletePrinter(printerToDelete).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('printersTable'),
        __metadata("design:type", Object)
    ], PrintersComponent.prototype, "printersTable", void 0);
    PrintersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-printers',
            template: __webpack_require__("./src/app/printers/printers.component.html"),
            styles: [__webpack_require__("./src/app/printers/printers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_printer_service__["a" /* PrinterService */]])
    ], PrintersComponent);
    return PrintersComponent;
}());



/***/ }),

/***/ "./src/app/services/printer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_constants__ = __webpack_require__("./src/app/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrinterService = /** @class */ (function () {
    function PrinterService(http) {
        this.http = http;
        this.newPrinterObserver = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
    }
    PrinterService.prototype.emitNewPrinterObserver = function (searchText) {
        this.newPrinterObserver.next(searchText);
    };
    PrinterService.prototype.subscribeNewPrinterObserver = function () {
        return this.newPrinterObserver.asObservable();
    };
    PrinterService.prototype.getPrinters = function (query) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */] + "/" + (query ? '?q=' + query : '');
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])('getPrinters', [])));
    };
    PrinterService.prototype.getPrinterById = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */] + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])("getPrinter id=" + id)));
    };
    PrinterService.prototype.addPrinter = function (printer) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */], printer, __WEBPACK_IMPORTED_MODULE_5__constants_constants__["a" /* HTTP_OPTIONS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])('addPrinter')));
    };
    PrinterService.prototype.deletePrinter = function (printer) {
        var id = typeof printer === 'number' ? printer : printer.id;
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */] + "/" + id;
        return this.http.delete(url, __WEBPACK_IMPORTED_MODULE_5__constants_constants__["a" /* HTTP_OPTIONS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])('deletePrinter')));
    };
    PrinterService.prototype.updatePrinter = function (printer) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */] + "/" + printer.id;
        return this.http.put(url, printer, __WEBPACK_IMPORTED_MODULE_5__constants_constants__["a" /* HTTP_OPTIONS */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])('updatePrinter')));
    };
    PrinterService.prototype.searchPrinters = function (term) {
        if (!term.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__constants_constants__["b" /* MOCK_URL */] + "/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* handleError */])('searchPrinters', [])));
    };
    PrinterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PrinterService);
    return PrinterService;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
/* harmony export (immutable) */ __webpack_exports__["b"] = onlyNumbers;
/* harmony export (immutable) */ __webpack_exports__["c"] = simpleCompare;
/* harmony export (immutable) */ __webpack_exports__["d"] = validIP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");

function handleError(operation, result) {
    if (operation === void 0) { operation = 'operation'; }
    return function (error) {
        console.error(operation + " failed: " + error.message);
        console.error(error);
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__["a" /* of */])(result);
    };
}
function onlyNumbers(control) {
    var forbidden = isNaN(control.value);
    return forbidden ? { 'onlyNumbers': true } : null;
}
function simpleCompare(propName, obj1, obj2) {
    if (obj1[propName] < obj2[propName]) {
        return -1;
    }
    if (obj1[propName] > obj2[propName]) {
        return 1;
    }
    return 0;
}
function validIP(control) {
    if (!control.value) {
        return null;
    }
    //Check Format
    var ip = control.value.split(".");
    if (ip.length != 4) {
        return { 'validIP': true };
    }
    //Check Numbers
    for (var c = 0; c < 4; c++) {
        //Perform Test
        if (ip[c] <= -1 || ip[c] > 255 ||
            isNaN(parseFloat(ip[c])) ||
            !isFinite(ip[c]) ||
            ip[c].indexOf(" ") !== -1) {
            return { 'validIP': true };
        }
    }
    return null;
}


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map