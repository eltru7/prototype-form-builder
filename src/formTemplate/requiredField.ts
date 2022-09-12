export class RequiredField {
  public name;
  public requiredValue;

  constructor(name: string, requiredValue?: string) {
    this.name = name;
    this.requiredValue = requiredValue;
  }
};