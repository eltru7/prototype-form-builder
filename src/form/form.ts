import {EmailFieldInput} from "./emailFieldInput";
import {FileFieldInput} from "./fileFieldInput";
import {BooleanFieldInput} from "./booleanFieldInput";
import {SingleSelectFieldInput} from "./singleSelectFieldInput";
import {TextFieldInput} from "./textFieldInput";

export interface FormFields {
  textFields: TextFieldInput[];
  emailFields: EmailFieldInput[];
  booleanFields: BooleanFieldInput[];
  fileFields: FileFieldInput[];
  singleSelectFields: SingleSelectFieldInput[];
}

export class Form {
  fields = {textFields: [] as TextFieldInput[], emailFields: [] as EmailFieldInput[], booleanFields: [] as BooleanFieldInput[], fileFields: [] as FileFieldInput[], singleSelectFields:[] as SingleSelectFieldInput[]} as FormFields;

  addTextField(field: TextFieldInput) {
    this.fields.textFields.push(field);
  }

  addEmailField(field: EmailFieldInput) {
    this.fields.emailFields.push(field);
  }

  addBooleanField(field: BooleanFieldInput) {
    this.fields.booleanFields.push(field);
  }

  addFileField(field: FileFieldInput) {
    this.fields.fileFields.push(field);
  }

  addSingleSelectField(field: SingleSelectFieldInput) {
    this.fields.singleSelectFields.push(field);
  }

  getFields() {
    const displayedFields = [] as any[];
    for(let field of this.fields.textFields) {
      if(this.isFieldDisplayed(field)) {
        displayedFields.push(field);
      }
    }
    for(let field of this.fields.emailFields) {
      if(this.isFieldDisplayed(field)) {
        displayedFields.push(field);
      }
    }
    for(let field of this.fields.booleanFields) {
      if(this.isFieldDisplayed(field)) {
        displayedFields.push(field);
      }
    }
    for(let field of this.fields.fileFields) {
      if(this.isFieldDisplayed(field)) {
        displayedFields.push(field);
      }
    }
    for(let field of this.fields.singleSelectFields) {
      if(this.isFieldDisplayed(field)) {
        displayedFields.push(field);
      }
    }
    return displayedFields;
  };

  private isFieldDisplayed(field: any) {
    let countRequiredFieldFilled = 0;
    const conditionals = field.template.conditionals;
    for(let conditionalField of conditionals.conditionalFields) {
      let conditionalFieldAnswer = this.findFieldAnswer(conditionalField.name);
      if(conditionalFieldAnswer){
        if(conditionalField.requiredValue && conditionalFieldAnswer === conditionalField.requiredValue || !conditionalField.requiredValue && conditionalFieldAnswer) {
          countRequiredFieldFilled += 1;
        }
      }
    }
    return countRequiredFieldFilled >= conditionals.qtyRequiredFields;
  };

  private findFieldAnswer(conditionalFieldName: string) {
    // TODO clean this, try lodash functions + change fields type
    let foundField;
    foundField = this.fields.textFields.find(field => field.template.name === conditionalFieldName);
    if(!foundField){
      foundField = this.fields.emailFields.find(field => field.template.name === conditionalFieldName);
      if(!foundField) {
        foundField = this.fields.booleanFields.find(field => field.template.name === conditionalFieldName);
        if(!foundField) {
          foundField = this.fields.fileFields.find(field => field.template.name === conditionalFieldName);
          if(!foundField) {
            foundField = this.fields.singleSelectFields.find(field => field.template.name === conditionalFieldName);
          }
        }
      }
    }
    if(foundField){
      return foundField.answer;
    }
    return "";
  };
}

