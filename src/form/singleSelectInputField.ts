import {SingleSelectField} from "../formTemplate/singleSelectField";

export class SingleSelectInputField{
  public template;
  public answer = "";

  constructor(template: SingleSelectField) {
    this.template = template
  }

  submitAnswer(answer: string) {
    this.answer = answer;
  }
}