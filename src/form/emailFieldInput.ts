import {Field} from "../formTemplate/field";

export class EmailFieldInput {
  public template;
  public answer = "";

  constructor(template: Field) {
    this.template = template
  }

  submitAnswer(answer: string) {
    // Some logic to validate email address
    this.answer = answer;
  }
}