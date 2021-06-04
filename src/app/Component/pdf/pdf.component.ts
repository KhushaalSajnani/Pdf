import {Component} from '@angular/core';
import printJS from "print-js";

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-pdf',
  template: `
    <div class="container">

      <div class="actions">
        <button><fa-icon [icon]="['fas','search-plus']" id="plus" (click)="zoomMe()" class="fa"></fa-icon></button>
        <button><fa-icon [icon]="['fas','search-minus']" id="minus" class="fa" (click)="zoomMe2()"></fa-icon></button>
        <button><fa-icon [icon]="['fas','cloud-download-alt']" id="download" (click)="downMe()" class="fa"></fa-icon></button>
        <button><fa-icon [icon]="['fas','print']" class="fa" (click)="printMe()" id="print"></fa-icon></button>
        <button><fa-icon [icon]="['fas','sync-alt']" [spin]="true" id="rotate" (click)="rotateMe()" class="fa"></fa-icon></button>
      </div>
    </div>

    <pdf-viewer [src]="pdf" [render-text]="true" [rotation]="angle" [zoom]="zoom" [zoom]="zoom"></pdf-viewer>
  `,
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  pdf = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"
  angle=0;
  zoom=0;

  rotateMe() {
    this.angle+=90;
  }

  zoomMe() {
    this.zoom+=0.5;
  }

  zoomMe2() {
    this.zoom-=0.5;
  }

  printMe() {
    printJS({printable:this.pdf, type:'pdf', showModal:true})
  }

  downMe() {
    const pdfUrl = this.pdf;
    const pdfName = 'Letter';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
