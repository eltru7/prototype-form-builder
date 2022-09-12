import {BooleanField} from "../formTemplate/booleanField";

export class BooleanFieldInput {
  public template;
  public answer = false;

  constructor(template: BooleanField) {
    this.template = template
  }

  submitAnswer(answer: boolean) {
    this.answer = answer;
  }
}