import { emailRegex } from './../data/regex';
export class Email {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  isValid(): boolean {
    return emailRegex.test(this.value);
  }
}
