import {Field} from "./field";

export class FileField extends Field {
  public acceptedFileTypes = ["png", "jpeg", "pdf", "txt"];
  public maxNbFiles = 1;
  public maxFileSizeGB = 10;

  constructor(name: string, description: string, isMandatory: boolean) {
    super(name, description, isMandatory);
  }

  setAcceptedFileTypes(acceptedFileTypes: string[]) {
    this.acceptedFileTypes = acceptedFileTypes;
  }

  setMaxNbFiles(quantity: number) {
    this.maxNbFiles = quantity;
  }

  setMaxFileSizeGB(size: number) {
    if(size <= this.maxNbFiles) {
      this.maxFileSizeGB = size;
    }
  }
}


