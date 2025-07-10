import { NumberValidator } from "./validators/NumberValidator";
import { ObjectValidator } from "./validators/ObjectValidator";
import { StringValidator } from "./validators/StringValidator";

const Validator = {
  string: () => new StringValidator(),
  number: () => new NumberValidator(),
  object: (shape: any) => new ObjectValidator(shape),
};

export default Validator;
