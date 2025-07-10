import { BaseValidator } from "./BaseValidator";
export class NumberValidator extends BaseValidator {
    required(message = "Required") {
        return this.addRule((val) => val !== undefined && val !== null ? null : message);
    }
    positive(message) {
        return this.addRule((val) => (val > 0 ? null : message));
    }
    integer(message) {
        return this.addRule((val) => (Number.isInteger(val) ? null : message));
    }
    min(minValue, message) {
        return this.addRule((val) => val >= minValue ? null : message || `Must be at least ${minValue}`);
    }
    max(maxValue, message) {
        return this.addRule((val) => val <= maxValue ? null : message || `Must be les than ${maxValue}`);
    }
}
