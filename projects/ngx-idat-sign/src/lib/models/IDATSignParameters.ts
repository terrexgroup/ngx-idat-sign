export interface IDATSignParameters {
    // the pdf as url
    // PDFURL: string,
    CONNECTOR: 'bku' | 'mobilebku',
    // TYPE: 'TEXT' | 'PDF' | 'B64',
    //current URL
    TARGETURL: string,
    NEW: string,
    //a qr code to an pdf (why?)
    //QRCODE: string,
    LOCALE: 'DE' | 'EN',
    //Position of the signature (X, Y)
    SIG_POS_X: string,
    SIG_POS_Y: string,
    //Page where the signature should be placed
    SIG_POS_P: string,
    //Width of the signature
    SIG_POS_W: string,
    //Margin from the bottom of the page
    SIG_POS_F: string
}