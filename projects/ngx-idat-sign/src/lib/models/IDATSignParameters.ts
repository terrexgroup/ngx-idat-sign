export interface IDATSignParameters {
    // the pdf as url
    // PDFURL: string,
    CONNECTOR: 'bku' | 'mobilebku' | null,
    // TYPE: 'TEXT' | 'PDF' | 'B64',
    //current URL
    // TARGETURL: string,
    // NEW: string,
    //a qr code to an pdf (why?)
    //QRCODE: string,
    LOCALE: 'DE' | 'EN',
    //Position of the signature (X, Y)
    SIG_POS_X: number,
    SIG_POS_Y: number,
    //Page where the signature should be placed
    SIG_POS_P: number,
    //Width of the signature
    SIG_POS_W: number,
    //Margin from the bottom of the page
    SIG_POS_F: number
}