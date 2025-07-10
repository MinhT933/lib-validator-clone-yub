export class BaseValidator {
    constructor() {
        //protected chỉ truy cập biến hiện tại với biến kế thừa
        this.validations = [];
    }
    //method chaining rear về kiểu this để gọi tiếp các hàm khác
    addRule(rule) {
        this.validations.push(rule);
        return this;
    }
    validate(value) {
        for (const rule of this.validations) {
            const error = rule(value);
            if (error)
                return error;
        }
        return null;
    }
}
