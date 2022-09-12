import {Form} from "../form/form";
import {Field} from "./field";
import {BooleanField} from "./booleanField";
import {SingleSelectField} from "./singleSelectField";
import {SingleSelectFieldInput} from "../form/singleSelectFieldInput";
import {FileFieldInput} from "../form/fileFieldInput";
import {BooleanFieldInput} from "../form/booleanFieldInput";
import {EmailFieldInput} from "../form/emailFieldInput";
import {TextFieldInput} from "../form/textFieldInput";
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
      form.addTextField(new TextFieldInput(field));
    }
    for(let field of this.emailFields) {
      form.addEmailField(new EmailFieldInput(field));
    }
    for(let field of this.booleanFields) {
      form.addBooleanField(new BooleanFieldInput(field));
    }

    for(let field of this.fileFields) {
      form.addFileField(new FileFieldInput(field));
    }
    for(let field of this.singleSelectFields) {
      form.addSingleSelectField(new SingleSelectFieldInput(field));
    }
    return form;
  }
}

