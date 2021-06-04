import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { AppHeaderComponent } from './Component/app-header/app-header.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import {fas} from "@fortawesome/free-solid-svg-icons";
import { PdfComponent } from './Component/pdf/pdf.component';
import { PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ToolbarComponent,
    PdfComponent,

  ],
  imports: [
    BrowserModule,FontAwesomeModule,PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
