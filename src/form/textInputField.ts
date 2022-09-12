import {Field} from "../formTemplate/field";

export class TextInputField {
  public template;
  public answer = ""

  constructor(template: Field) {
    this.template = template;
  }

  submitAnswer(answer: string) {
    this.answer = answer;
  }
}