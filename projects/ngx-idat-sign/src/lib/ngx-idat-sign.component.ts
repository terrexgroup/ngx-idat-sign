import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IDATSignParameters } from './models/IDATSignParameters';
import { IDATSignSuccessResponse } from './models/IDATSignSuccessResponse';
import { IDATSignErrorResponse } from './models/IDATSignErrorResponse';

@Component({
  selector: 'lib-ngx-idat-sign',
  template: `
  <div id="pdf-sign">
    <iframe src="" [id]="this.eventId + '_iframe'" width="100%" height="100%" name="pdf-sign-frame" style="overflow: auto;" frameborder="0"></iframe>
  </div>
  <!-- Using a form inside html throws a Security Error when transferring Data between windows. If we create a form using js the Security Error is still shown but a data transmission between windows is possible
    <form #initForm method="post" [action]="this.pdfAsUrl" target="pdf-sign-frame" enctype="application/x-www-form-urlencoded">
    <input type="hidden" name="PDFURL" [value]="this.pdfBase64">
    <input type="hidden" name="CONNECTOR" [value]="this.parameters?.CONNECTOR">
    <input type="hidden" name="EVENTID" [value]="this.parameters?.EVENTID">
    <input type="hidden" name="TYPE" [value]="'B64'">
    <input type="hidden" name="TARGETURL" [value]="this.parameters?.TARGETURL">
    <input type="hidden" name="LOCALE" [value]="this.parameters?.LOCALE">
    <input type="hidden" name="SIG_POS_X" [value]="this.parameters?.SIG_POS_X">
    <input type="hidden" name="SIG_POS_Y" [value]="this.parameters?.SIG_POS_Y">
    <input type="hidden" name="SIG_POS_P" [value]="this.parameters?.SIG_POS_P">
    <input type="hidden" name="SIG_POS_W" [value]="this.parameters?.SIG_POS_W">
    <input type="hidden" name="SIG_POS_F" [value]="this.parameters?.SIG_POS_F">
  </form> -->
  `,
  styles: ['#pdf-sign { display: flex; height: 100%; width: 100%; border: 1px solid red;}']
})

export class NgxIdatSignComponent implements OnInit, AfterViewInit {
  public pdfAsOrigin: string = 'https://pdf.egiz.gv.at';

  public pdfAsUrl: string = "https://pdf.egiz.gv.at/einfach-signieren/Start";
  public eventId: string = this.generateGuid();

  @ViewChild('initForm') initForm: ElementRef | undefined;
  @Input() parameters: IDATSignParameters | null = null;
  @Input() pdfBase64: string | null = null;
  @Output() success = new EventEmitter<IDATSignSuccessResponse>();
  @Output() error = new EventEmitter<IDATSignErrorResponse>();

  public signInProcess: boolean = false;

  constructor() {
  }

  private s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateGuid(): string {
    var guid =
      this.s4() +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      this.s4() +
      this.s4();

    return guid;
  }

  public createAsyncSignature() {
    // this.initForm?.nativeElement.submit();
    if (this.parameters && this.pdfBase64) {
      var form = document.createElement('form');
      form.method = "POST";
      form.action = this.pdfAsUrl;
      form.target = 'pdf-sign-frame';
      form.enctype = "application/x-www-form-urlencoded";
      Object.values(this.parameters).forEach((element, index) => {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = Object.keys(this.parameters ?? [])[index];
        input.value = element;
        form.appendChild(input);
      });
      var typeInput = document.createElement('input');
      typeInput.type = 'hidden';
      typeInput.name = "TYPE";
      typeInput.value = "B64";
      form.appendChild(typeInput);

      var pdfInput = document.createElement('input');
      pdfInput.type = 'hidden';
      pdfInput.name = "PDFURL";
      pdfInput.value = this.pdfBase64;
      form.appendChild(pdfInput);

      var eventId = document.createElement('input');
      eventId.type = 'hidden';
      eventId.name = "EVENTID";
      eventId.value = this.eventId;
      form.appendChild(eventId);

      document.getElementById('pdf-sign')?.appendChild(form);
      form.submit();
    }

  }

  //using arrow function to keep the 'this' context when using it for the eventlistener
  public messageHandler = (event: any) => {
    if (event.origin !== this.pdfAsOrigin) return;
    var data = JSON.parse(event.data);
    console.log('message received:  ' + data, event);
    if (data.suc || data.err) {
      if (data.suc) {
        var successResponse = new IDATSignSuccessResponse(decodeURIComponent(data.suc.pdfUrl));
        this.success.emit(successResponse);
        console.log('Success Message: ' + data.suc.pdfUrl);
      } else if (data.err) {
        var errorResponse = new IDATSignErrorResponse(data.err.error, data.cause);
        this.error.emit(errorResponse);
        console.log('Error Message: ' + data.err.error);
      }
    } else if (data.resize) {

    }
  }

  ngOnInit() {
    window.addEventListener('message', this.messageHandler);
  }
  ngAfterViewInit(): void {
    this.createAsyncSignature();
  }
}
