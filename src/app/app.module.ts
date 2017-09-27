import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {FormsModule}  from '@angular/forms';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './banner/navbar.component';
import { JumboComponent } from './banner/jumbo.component';
import { RowsmarketingComponent } from './banner/rowsmarketing.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AssignmentdbComponent } from './assignmentdb/assignmentdb.component';
import { Imagecomp1Component } from './assignmentdb/imagecomp1.component';
import { Buttoncomp2Component } from './assignmentdb/buttoncomp2.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BannerComponent,
    NavbarComponent,
    JumboComponent,
    RowsmarketingComponent,
    DatabindingComponent,
    AssignmentdbComponent,
    Imagecomp1Component,
    Buttoncomp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
