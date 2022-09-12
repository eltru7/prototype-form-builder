import {Form} from "../form/form";
import {Field} from "./field";
import {BooleanField} from "./booleanField";
import {SingleSelectField} from "./singleSelectField";
import {SingleSelectInputField} from "../form/singleSelectInputField";
import {FileInputField} from "../form/fileInputField";
import {BooleanInputField} from "../form/booleanInputField";
import {EmailInputField} from "../form/emailinputField";
import {TextInputField} from "../form/textInputField";
import {FileField} from "./fileField";

export class FormTemplate {
  textFields = [] as Field[];
  emailFields = [] as Field[];
  booleanFields = [] as BooleanField[];
  fileFields = [] as FileField[];
  singleSelectFields = [] as SingleSelectField[];

  addField(field: Field) {
    this.textFields.push(field);
  };

  addEmailField(field: Field) {
    this.emailFields.push(field);
  };

  addBooleanField(field: BooleanField) {
    this.booleanFields.push(field);
  };

  addFileField(field: FileField) {
    this.fileFields.push(field);
  };

  addSingleSelectField(field: SingleSelectField) {
    this.singleSelectFields.push(field);
  };

  generateForm() {
    const form = new Form();
    for(let field of this.textFields) {
      form.addTextField(new TextInputField(field));
    }
    for(let field of this.emailFields) {
      form.addEmailField(new EmailInputField(field));
    }
    for(let field of this.booleanFields) {
      form.addBooleanField(new BooleanInputField(field));
    }

    for(let field of this.fileFields) {
      form.addFileField(new FileInputField(field));
    }
    for(let field of this.singleSelectFields) {
      form.addSingleSelectField(new SingleSelectInputField(field));
    }
    return form;
  }
}

