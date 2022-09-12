import {RequiredField} from "./requiredField";
import {FieldsVisibilityRequirements} from "./fieldsVisibilityRequirements";

export class Field {
  public name = "";
  public description = "";
  public isMandatory = false;
  public fieldsVisibilityRequirements = new FieldsVisibilityRequirements();

  constructor(name: string, description: string, isMandatory: boolean) {
    this.name = name;
    this.description = description;
    this.isMandatory = isMandatory;
  };

  addRequiredFieldForVisibility(fieldName: string, qtyRequiredFields: number, requiredValue?: string) {
    const requiredField = new RequiredField(fieldName, requiredValue);
    this.fieldsVisibilityRequirements.requiredFields.push(requiredField);
    this.fieldsVisibilityRequirements.qtyRequiredFields = qtyRequiredFields;
  };
}


