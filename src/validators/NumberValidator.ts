import { isNumberObject } from "util/types";
import { BaseValidator } from "./BaseValidator";

export class NumberValidator extends BaseValidator<number> {
  required(message = "Required"): this {
    return this.addRule((val) =>
      val !== undefined && val !== null ? null : message
    );
  }

  positive(message: "Must have positive"): this {
    return this.addRule((val) => (val > 0 ? null : message));
  }

  integer(message: "Must be integer"): this {
    return this.addRule((val) => (Number.isInteger(val) ? null : message));
  }

  min(minValue: number, message?: string): this {
    return this.addRule((val) =>
      val >= minValue ? null : message || `Must be at least ${minValue}`
    );
  }

  max(maxValue: number, message?: string): this {
    return this.addRule((val) =>
      val <= maxValue ? null : message || `Must be les than ${maxValue}`
    );
  }
}
