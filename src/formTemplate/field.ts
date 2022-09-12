import {ConditionalField} from "./conditionalField";
import {Conditionals} from "./conditionals";

export class Field {
  public name = "";
  public description = "";
  public isMandatory = false;
  public conditionals = new Conditionals();

  constructor(name: string, description: string, isMandatory: boolean) {
    this.name = name;
    this.description = description;
    this.isMandatory = isMandatory;
  };

  addConditional(fieldName: string, qtyRequiredFields: number, requiredValue?: string) {
    const conditionalField = new ConditionalField(fieldName, requiredValue);
    this.conditionals.conditionalFields.push(conditionalField);
    this.conditionals.qtyRequiredFields = qtyRequiredFields;
  };
}


