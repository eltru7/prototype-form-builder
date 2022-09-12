import {Field} from "../formTemplate/field";

export class FileFieldInput {
  public template;
  public answer = "";

  constructor(template: Field) {
    this.template = template;
  }

  submitAnswer(answer: File) {
    // Some logic depending on the file type
    // Store the file (in a blob store, on the disk, etc.)
  }
}