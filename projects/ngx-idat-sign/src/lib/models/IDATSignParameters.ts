/**
 * Parameters for the Signature
 */
export interface IDATSignParameters {
    /**
     * The connectur which should be used for signing. Possible Values are 'bku' (Bürgerkartenumgebung), 'mobilebku' (Handy-Signatur/ID-Austria) or null. If null, the user gets asked which connectur to use.
     */
    CONNECTOR: 'bku' | 'mobilebku' | null,
    /**
     * The language of the signature
     */
    LOCALE: 'DE' | 'EN',
    /**
     * The position of the Signature in the PDF-Document on the X-Axis
     */
    SIG_POS_X: number,
    /**
     * The position of the Signature in the PDF-Document on the X-Axis
     */
    SIG_POS_Y: number,
    /**
     * The page where the signature should be placed
     */
    SIG_POS_P: number,
    /**
    * The width of the signature
    */
    SIG_POS_W: number,
    /**
     * The margin of the signature from the bottom of the Page
     */
    SIG_POS_F: number
}