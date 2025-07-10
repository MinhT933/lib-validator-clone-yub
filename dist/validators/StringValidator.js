import { BaseValidator } from "./BaseValidator";
export class StringValidator extends BaseValidator {
    required(message = "Required") {
        return this.addRule((val) => (val ? null : message));
    }
    min(length, message) {
        return this.addRule((val) => val.length >= length ? null : message || `Min ${length} chars`);
    }
    max(length, message) {
        return this.addRule((val) => val.length <= length ? null : message || `Max ${length} chars`);
    }
    email(message = "Invalid email") {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return this.addRule((val) => (emailRegex.test(val) ? null : message));
    }
}
