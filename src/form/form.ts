import {EmailInputField} from "./emailinputField";
import {FileInputField} from "./fileInputField";
import {BooleanInputField} from "./booleanInputField";
import {SingleSelectInputField} from "./singleSelectInputField";
import {TextInputField} from "./textInputField";

export interface FormFields {
  textFields: TextInputField[];
  emailFields: EmailInputField[];
  booleanFields: BooleanInputField[];
  fileFields: FileInputField[];
  singleSelectFields: SingleSelectInputField[];
}

export class Form {
  fields = {textFields: [] as TextInputField[], emailFields: [] as EmailInputField[], booleanFields: [] as BooleanInputField[], fileFields: [] as FileInputField[], singleSelectFields:[] as SingleSelectInputField[]} as FormFields;

  addTextField(field: TextInputField) {
    this.fields.textFields.push(field);
  }

  addEmailField(field: EmailInputField) {
    this.fields.emailFields.push(field);
  }

  addBooleanField(field: BooleanInputField) {
    this.fields.booleanFields.push(field);
  }

  addFileField(field: FileInputField) {
    this.fields.fileFields.push(field);
  }

  addSingleSelectField(field: SingleSelectInputField) {
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
    const fieldsVisibilityRequirements = field.template.fieldsVisibilityRequirements;
    for(let requiredField of fieldsVisibilityRequirements.requiredFields) {
      let requiredFieldAnswer = this.findRequiredFieldAnswer(requiredField.name);
      if(requiredFieldAnswer){
        if(requiredField.requiredValue && requiredFieldAnswer === requiredField.requiredValue || !requiredField.requiredValue && requiredFieldAnswer) {
          countRequiredFieldFilled += 1;
        }
      }
    }
    return countRequiredFieldFilled >= fieldsVisibilityRequirements.qtyRequiredFields;
  };

  private findRequiredFieldAnswer(requiredFieldName: string) {
    // TODO clean this, try lodash functions + change fields type
    let foundField;
    foundField = this.fields.textFields.find(field => field.template.name === requiredFieldName);
    if(!foundField){
      foundField = this.fields.emailFields.find(field => field.template.name === requiredFieldName);
      if(!foundField) {
        foundField = this.fields.booleanFields.find(field => field.template.name === requiredFieldName);
        if(!foundField) {
          foundField = this.fields.fileFields.find(field => field.template.name === requiredFieldName);
          if(!foundField) {
            foundField = this.fields.singleSelectFields.find(field => field.template.name === requiredFieldName);
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

