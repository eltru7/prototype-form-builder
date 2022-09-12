import {Field} from "../formTemplate/field";

export class EmailInputField {
  public template;
  public answer = "";

  constructor(template: Field) {
    this.template = template
  }

  submitAnswer(answer: string) {
    // Some logic to validate the email address
    this.answer = answer;
  }
}