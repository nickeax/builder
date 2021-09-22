import { Address } from './address.js';
const l = console.log
export class Person {
  fName;
  lName;
  email;
  mobile;
  address;

  printAddress() {
    let tmp = ""
    Object.values(this.address).forEach(x => {
      tmp += `${x} `
    })

    return tmp
  }
}
