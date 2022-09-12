import {FormTemplate} from "./formTemplate/formTemplate";
import {SingleSelectField} from "./formTemplate/singleSelectField";
import {BooleanField} from "./formTemplate/booleanField";
import {Field} from "./formTemplate/field";
import {FileField} from "./formTemplate/fileField";

// Example how to create a form with fields

let formTemplate = new FormTemplate();

const nameField = new Field("name", "What is your name?", false);

const ageRangeField = new SingleSelectField("age", "What is your age?", false);
ageRangeField.addSelectOption("26-35", "Betwwen 26-35");
ageRangeField.addSelectOption("35-45", "Betwwen 36-45");

const emailField = new Field("email", "What is your email address?", false);

const isVeteranField = new BooleanField("veteran", "Are you a veteran?", true);
isVeteranField.addRequiredFieldForVisibility("name", 1, "John");

const fileField = new FileField("", "Upload a photo",false);

formTemplate.addField(nameField);
formTemplate.addEmailField(emailField);
formTemplate.addBooleanField(isVeteranField);
formTemplate.addFileField(fileField);
formTemplate.addSingleSelectField(ageRangeField);

// Example with a user filling/answering the form

let userForm = formTemplate.generateForm();

const field1 = userForm.getFields()[0]; // Getting the first question
console.log(field1.template.description); // What is your name?
field1.submitAnswer("John"); // User submits his answer

const field2 = userForm.getFields()[1]; // Getting the second question. Fields are recomputed after each answer in order to make some fields appear depending on the answers
console.log(field2.template.description); //What is your email address?
field2.submitAnswer("john@gmail.com");

const field3 = userForm.getFields()[2]; // Getting the third question
console.log(field3.template.description);// Are you a veteran?
console.log(field3.template.options[0].description); // True
console.log(field3.template.options[1].description); // False
field3.submitAnswer(false);

const field4 = userForm.getFields()[3]; // Getting the fourth question
console.log(field4.template.description);// Upload a photo
field4.submitAnswer("data:image/png;base64,...");

const field5 = userForm.getFields()[4]; // / Getting the fifth question
console.log(field5.template.description); // What is your age?
console.log(field5.template.options[0].description); // 26-35
console.log(field5.template.options[1].description); // 36-46
field5.submitAnswer("26-35");

console.log(userForm.fields);