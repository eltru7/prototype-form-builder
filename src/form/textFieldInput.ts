import {Field} from "../formTemplate/field";

export class TextFieldInput {
  public template;
  public answer = ""

  constructor(template: Field) {
    this.template = template;
  }

  submitAnswer(answer: string) {
    this.answer = answer;
  }
}