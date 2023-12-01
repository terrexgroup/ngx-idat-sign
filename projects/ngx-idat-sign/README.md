# Welcome to ngx-idat-sign!

This library lets a client sign PDF Documents with an ID Austria (Handysignatur) using A-Trusts PDF Signing Services.

This library brings [this](https://pdf.egiz.gv.at/einfach-signieren/) Javascript Library into the angular world. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Installation

To get started install this library using the following command:

```bash
npm install ngx-idat-sign
```

## Usage

To use idat-sign in your angular project add it to your imports in your module file
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIdatSignModule } from 'ngx-idat-sign';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIdatSignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Afterwards you can use the ngx-idat-sign component in your application:

HTML:
```html
    <ngx-idat-sign class="signer"
        [pdfBase64]="this.pdfBase64"
        [parameters]="this.params"
        (error)="this.signError($event)"
        (success)="this.signSuccess($event)">
    </ngx-idat-sign>
```
Component file:
```typescript
import { Component } from '@angular/core';
import { IDATSignErrorResponse, IDATSignParameters, IDATSignSuccessResponse } from 'ngx-idat-sign';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pdfBase64: string = 'base64 string of your pdf file'

  public params: IDATSignParameters = {
    CONNECTOR: 'mobilebku',
    LOCALE: 'EN',
    SIG_POS_X: 100,
    SIG_POS_Y: 100,
    SIG_POS_P: 1,
    SIG_POS_W: 200,
    SIG_POS_F: 10,
  }

  public signError(response: IDATSignErrorResponse) {
    console.log("error");
    console.log(response);
  }

  public signSuccess(response: IDATSignSuccessResponse) {
    console.log('signing successful');
    console.log(response);
  }
}
```

## Signing Parameters

Next to the pdf file to sign you have to pass some configuration parameters to the component. These are defined in the ```IDATSignParameters```-Interface.

| Name      | Type     | Description                                                                                                                                                                                             |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CONNECTOR | `string` | The connectur which should be used for signing. Possible Values are 'bku' (Bürgerkartenumgebung), 'mobilebku' (Handy-Signatur/ID-Austria) or null. If null, the user gets asked which connectur to use. |
| LOCALE    | `string` | The language of the signature.                                                                                                                                                                          |
| SIG_POS_X | `number` | The position of the Signature in the PDF-Document on the X-Axis                                                                                                                                         |
| SIG_POS_Y | `number` | The position of the Signature in the PDF-Document on the Y-Axis                                                                                                                                         |
| SIG_POS_P | `number` | The page where the signature should be placed                                                                                                                                                           |
| SIG_POS_W | `number` | The width of the signature                                                                                                                                                                              |
| SIG_POS_F | `number` | The margin of the signature from the bottom of the Page                                                                                                                                                 |

## Responses/Event Emitters

After the signing process A-Trust returns either a success or an error-response.
These can be received via the implemented Event Emitters.

### Success response

This event emitter is fired if the signation of the Document was successful.
An ```IDATSignSuccessResponse``` is delivered with the ```(success)```Event emitter.

| Name   | Type     | Description               |
| ------ | -------- | ------------------------- |
| pdfUrl | `string` | The url to the signed PDF |

### Error response

If the signationprocess could not be completed A-Trust returns an Error response, which is passed via the ```IDATSignErrorResponse``` object in the ```(error)``` Event emitter.

| Name    | Type     | Description                      |
| ------- | -------- | -------------------------------- |
| message | `string` | The error message from A-Trust   |
| cause   | `string` | More Information about the error |

