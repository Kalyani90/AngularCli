import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './banner/navbar.component';
import { JumboComponent } from './banner/jumbo.component';
import { RowsmarketingComponent } from './banner/rowsmarketing.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BannerComponent,
    NavbarComponent,
    JumboComponent,
    RowsmarketingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
