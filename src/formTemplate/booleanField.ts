import {Field} from "./field";

export class BooleanField extends Field {
  public options = [{value: 1, description: "True"}, {value: 0, description: "False"}]
}