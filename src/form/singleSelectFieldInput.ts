import {SingleSelectField} from "../formTemplate/singleSelectField";

export class SingleSelectFieldInput{
  public template;
  public answer = "";

  constructor(template: SingleSelectField) {
    this.template = template
  }

  submitAnswer(answer: string) {
    this.answer = answer;
  }
}