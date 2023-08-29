export class IDATSignErrorResponse {
    public message: string;
    public cause: string;

    constructor(message: string, cause: string) {
        this.message = message;
        this.cause = cause;
    }
}