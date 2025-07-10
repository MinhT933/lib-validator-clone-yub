import { BaseValidator } from "./BaseValidator";

type Shape = { [key: string]: BaseValidator<any> };

export class ObjectValidator extends BaseValidator<object> {
  constructor(private shape: Shape) {
    super();
  }

  validate(obj: object): string | null {
    const errs: string[] = [];

    for (const key in this.shape) {
      const validator = this.shape[key]; // lấy ra validator tương ứng
      const val = (obj as any)[key]; // lấy giá trị từ object cần kiểm tra
      const err = validator.validate(val);

      if (err) errs.push(`${key}: ${err}`); // nếu có lỗi, thêm vào mảng lỗi
    }

    return errs.length ? errs.join("; ") : null;
  }
}
