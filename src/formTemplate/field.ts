import {RequiredField} from "./requiredField";
import {FieldsRequirements} from "./fieldsRequirements";

export class Field {
  public name = "";
  public description = "";
  public isMandatory = false;
  public fieldsRequirements = new FieldsRequirements();

  constructor(name: string, description: string, isMandatory: boolean) {
    this.name = name;
    this.description = description;
    this.isMandatory = isMandatory;
  };

  addRequiredField(fieldName: string, qtyRequiredFields: number, requiredValue?: string) {
    const requiredField = new RequiredField(fieldName, requiredValue);
    this.fieldsRequirements.requiredFields.push(requiredField);
    this.fieldsRequirements.qtyRequiredFields = qtyRequiredFields;
  };
}


