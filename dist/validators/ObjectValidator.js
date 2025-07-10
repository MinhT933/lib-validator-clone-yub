import { BaseValidator } from "./BaseValidator";
export class ObjectValidator extends BaseValidator {
    constructor(shape) {
        super();
        this.shape = shape;
    }
    validate(obj) {
        const errs = [];
        for (const key in this.shape) {
            const validator = this.shape[key]; // lấy ra validator tương ứng
            const val = obj[key]; // lấy giá trị từ object cần kiểm tra
            const err = validator.validate(val);
            if (err)
                errs.push(`${key}: ${err}`); // nếu có lỗi, thêm vào mảng lỗi
        }
        return errs.length ? errs.join("; ") : null;
    }
}
