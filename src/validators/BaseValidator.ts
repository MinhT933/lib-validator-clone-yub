//<T> là generic type
export type validationRule<T> = (value: T) => string | null;

export abstract class BaseValidator<T> {
  //protected chỉ truy cập biến hiện tại với biến kế thừa
  protected validations: validationRule<T>[] = [];

  //method chaining rear về kiểu this để gọi tiếp các hàm khác
  protected addRule(rule: validationRule<T>): this {
    this.validations.push(rule);
    return this;
  }

  validate(value: T): string | null {
    for (const rule of this.validations) {
      const error = rule(value);
      if (error) return error;
    }
    return null;
  }
}
