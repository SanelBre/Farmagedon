import { CustomError, ErrorResponse } from "./CustomError";

export class ConflictError extends CustomError {
  statusCode = 409;

  name = "CONFLICT";

  constructor(public message: string = "") {
    super(message);

    Object.setPrototypeOf(this, ConflictError.prototype);
  }

  serialize(): ErrorResponse[] {
    return [
      {
        name: this.name,
        message: this.message,
      },
    ];
  }
}
