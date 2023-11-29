import { Component } from '@angular/core';
import { IDATSignErrorResponse, IDATSignParameters, IDATSignSuccessResponse } from 'ngx-idat-sign';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pdfBase64: string = "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURl" +
    "Y29kZT4+CnN0cmVhbQp4nDPQM1Qo5ypUMABCM0MjBXNLI4WiVK5wLYU8qKiBQlE6l1MIl6mZnoWC" +
    "uZEJUENIioK+m6ECUHlIWrSNgaGdmYWNgZGdoY2BsZ2ukY2BiV1siBeXawhXIFegAgAD9hUCCmVu" +
    "ZHN0cmVhbQplbmRvYmoKCjMgMCBvYmoKOTcKZW5kb2JqCgo1IDAgb2JqCjw8L0xlbmd0aCA2IDAg" +
    "Ui9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoMSA3MTQwPj4Kc3RyZWFtCnic5Vh/UBt3dn/fXUlI" +
    "CJCEAbOWjVZeC4MlJIyM8Q9iBEhCGGzEr0TCASSjBSkxSJFkcnaSmrtMEleOazdp86NxG9/N9SbT" +
    "ZsaLnXbITRrINGmnM0mczE3mLr04YXo30z/OnH1pk+lcYtP3XS3YOL9mep3pH/0i7b73ee993vu+" +
    "73dXu2TTR0UoghlgwTM2GU2VqVUMALwNQErHprP8cpuHR3kRgKkYT01M1rh/+VsA9r8ACtQTR46N" +
    "fzn82x8D6DFEHY+L0djQJo0LwBhHYCcFum4eK0D9POpb4pPZ71mZiyWov4l62ZHkWPQn7Mss6r9A" +
    "vWgy+r3UjzQzKtR/jTo/FZ0Uu8XzfwZgQkzbnUpmsjHYsgzABak9lRZTnw09q0U9hfVlESP4R0cR" +
    "ihqqM6wK/j8P9Wkoh4D6LjBASj6uGezLwNHz8tW1x5vdy7//36xCmz89Bz+BV+A0fAjDisEPQUjA" +
    "UURuH2/A+4jSEYQh+BvIfQPtyzCH9rxfBM7A89/gF4Rn4RL885osQZiEh7CWv4MPyXb4F9wqSfiU" +
    "aOH78BayforYga+jYnD3wrgsjt+G/hJeYE7Bfobu2+ephXExRngTzpERZM7iPE+vzrj5K6RPwCN4" +
    "7Ic4TKMsD/VdX/4r6Jb/A2f1COyHH0ArHLkt4jXyIluI6zcAL2JP35Ax14qxIMDex/w9w9x4GpU/" +
    "hQn8RgnOnTnNtoJXbSKvAHh84dDgQH9fb7Dn4IHurv2dgQ6/z9ve1upp2XdX8949u3c17WzcXu9y" +
    "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" +
    "+Of9rMdf6/J7/FVW/8aAebDCXT5odBsGGQKDxA2DLsOygTEYRg0nDKwBWoCZqSBqMkfOzg702+1d" +
    "cwXLfV2SNnhIIiclWz89enqHJM1JCQaHDoVmCfmT8GOnT0Pbpi6poT8kRTaFu6QYCh4qzKBg3DRb" +
    "AW3hTCZrp4PY7SgexSPYjyI0ksmDYF8xgz1DMhnIZIid2mQREcjYKUwRGkMwciQD9ECtdtmLSplM" +
    "5ch/A/czZpsKZW5kc3RyZWFtCmVuZG9iagoKNiAwIG9iago0MTgzCmVuZG9iagoKNyAwIG9iago8" +
    "PC9UeXBlL0ZvbnREZXNjcmlwdG9yL0ZvbnROYW1lL0JBQUFBQStMaWJlcmF0aW9uU2VyaWYKL0Zs" +
    "YWdzIDQKL0ZvbnRCQm94Wy0xNzYgLTMwMyAxMDA1IDk4MV0vSXRhbGljQW5nbGUgMAovQXNjZW50" +
    "IDg5MQovRGVzY2VudCAtMjE2Ci9DYXBIZWlnaHQgOTgxCi9TdGVtViA4MAovRm9udEZpbGUyIDUg" +
    "MCBSCj4+CmVuZG9iagoKOCAwIG9iago8PC9MZW5ndGggMjQwL0ZpbHRlci9GbGF0ZURlY29kZT4+" +
    "CnN0cmVhbQp4nF1Qy2rDMBC86yv2mByCbMdpL0YQEgI+9EHdfoAsrV1BLQlZPvjvu5LTFnqQmGF2" +
    "htnll/baWhP5a3CqwwiDsTrg7JagEHocjWVlBdqoeGf5V5P0jJO3W+eIU2sH1zSMv5E2x7DC7qxd" +
    "j3vGX4LGYOwIu49LR7xbvP/CCW2EggkBGgfKeZL+WU7Is+vQapJNXA9k+Rt4Xz1ClXm5VVFO4+yl" +
    "wiDtiKwpCgHN7SYYWv1PqzdHP6hPGWiypMmiONWCcJXxwynhY8aPx4TrDdc57+5MyWn1n8aglhCo" +
    "bb5PrpkKGou/J/TOJ1d+37eXdGIKZW5kc3RyZWFtCmVuZG9iagoKOSAwIG9iago8PC9UeXBlL0Zv" +
    "bnQvU3VidHlwZS9UcnVlVHlwZS9CYXNlRm9udC9CQUFBQUErTGliZXJhdGlvblNlcmlmCi9GaXJz" +
    "dENoYXIgMAovTGFzdENoYXIgNAovV2lkdGhzWzM2NSA2MTAgNDQzIDM4OSAyNzcgXQovRm9udERl" +
    "c2NyaXB0b3IgNyAwIFIKL1RvVW5pY29kZSA4IDAgUgo+PgplbmRvYmoKCjEwIDAgb2JqCjw8L0Yx" +
    "IDkgMCBSCj4+CmVuZG9iagoKMTEgMCBvYmoKPDwvRm9udCAxMCAwIFIKL1Byb2NTZXRbL1BERi9U" +
    "ZXh0XQo+PgplbmRvYmoKCjEgMCBvYmoKPDwvVHlwZS9QYWdlL1BhcmVudCA0IDAgUi9SZXNvdXJj" +
    "ZXMgMTEgMCBSL01lZGlhQm94WzAgMCA2MTIgNzkyXS9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L0NT" +
    "L0RldmljZVJHQi9JIHRydWU+Pi9Db250ZW50cyAyIDAgUj4+CmVuZG9iagoKNCAwIG9iago8PC9U" +
    "eXBlL1BhZ2VzCi9SZXNvdXJjZXMgMTEgMCBSCi9NZWRpYUJveFsgMCAwIDYxMiA3OTIgXQovS2lk" +
    "c1sgMSAwIFIgXQovQ291bnQgMT4+CmVuZG9iagoKMTIgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1Bh" +
    "Z2VzIDQgMCBSCi9PcGVuQWN0aW9uWzEgMCBSIC9YWVogbnVsbCBudWxsIDBdCi9MYW5nKGVuLVVT" +
    "KQo+PgplbmRvYmoKCjEzIDAgb2JqCjw8L0NyZWF0b3I8RkVGRjAwNTcwMDcyMDA2OTAwNzQwMDY1" +
    "MDA3Mj4KL1Byb2R1Y2VyPEZFRkYwMDRDMDA2OTAwNjIwMDcyMDA2NTAwNEYwMDY2MDA2NjAwNjkw" +
    "MDYzMDA2NTAwMjAwMDMzMDAyRTAwMzY+Ci9DcmVhdGlvbkRhdGUoRDoyMDEzMDYxODA3NTcxMysw" +
    "MicwMCcpPj4KZW5kb2JqCgp4cmVmCjAgMTQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDA1MjYw" +
    "IDAwMDAwIG4gCjAwMDAwMDAwMTkgMDAwMDAgbiAKMDAwMDAwMDE4NyAwMDAwMCBuIAowMDAwMDA1" +
    "NDAzIDAwMDAwIG4gCjAwMDAwMDAyMDYgMDAwMDAgbiAKMDAwMDAwNDQ3MyAwMDAwMCBuIAowMDAw" +
    "MDA0NDk0IDAwMDAwIG4gCjAwMDAwMDQ2ODkgMDAwMDAgbiAKMDAwMDAwNDk5OCAwMDAwMCBuIAow" +
    "MDAwMDA1MTczIDAwMDAwIG4gCjAwMDAwMDUyMDUgMDAwMDAgbiAKMDAwMDAwNTUwMiAwMDAwMCBu" +
    "IAowMDAwMDA1NTk5IDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSAxNC9Sb290IDEyIDAgUgovSW5m" +
    "byAxMyAwIFIKL0lEIFsgPDkwQzhFODgyMkY1Qzk1QkFCOUZEQTAwMzBFQ0UxNEQxPgo8OTBDOEU4" +
    "ODIyRjVDOTVCQUI5RkRBMDAzMEVDRTE0RDE+IF0KL0RvY0NoZWNrc3VtIC9GMENEQ0IyRTc4ODcy" +
    "MTI4Nzc1Q0JBRDRCQjJGMDRFQQo+PgpzdGFydHhyZWYKNTc3NAolJUVPRgo=";

  public signInProgress: boolean = false;

  public signedPdfUrl: string | null = null;
  public error: IDATSignErrorResponse | null = null;

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
    this.error = response;
    this.signInProgress = false;
  }

  public signSuccess(response: IDATSignSuccessResponse) {
    this.signedPdfUrl = decodeURIComponent(response.pdfUrl);
    this.signInProgress = false;
  }

  public startSign() {
    this.signedPdfUrl = null;
    this.error = null;
    this.signInProgress = true;
  }

  title = 'ngx-idat-sign-demo';
}
