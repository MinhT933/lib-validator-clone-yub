import { BaseValidator } from "./BaseValidator";

export class StringValidator extends BaseValidator<string> {
  required(message = "Required"): this {
    return this.addRule((val) => (val ? null : message));
  }

  min(length: number, message?: string): this {
    return this.addRule((val) =>
      val.length >= length ? null : message || `Min ${length} chars`
    );
  }

  max(length: number, message?: string): this {
    return this.addRule((val) =>
      val.length <= length ? null : message || `Max ${length} chars`
    );
  }

  email(message = "Invalid email"): this {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return this.addRule((val) => (emailRegex.test(val) ? null : message));
  }
}
