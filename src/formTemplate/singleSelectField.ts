import {Field} from "./field";
import {SingleSelectOption} from "./singleSelectOption";

export class SingleSelectField extends Field {
  public options = [] as SingleSelectOption[];

  addSelectOption(value: string, description: string) {
    this.options.push(new SingleSelectOption(value, description))
  }
}