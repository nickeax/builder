import { Person } from '../models/person.js'
import { Address } from '../models/address.js'
import { Utils } from './utils.js'

const street = ['Dobell', 'Labernum', 'Beltana', 'Hill', 'Bayside', 'Jackson', 'Cross']
const type = ['St', 'Dve', 'Crt', 'Cres', 'Ln', 'Cl', 'Rd']
const city = ['Chelsea', 'Melbourne', 'New York', 'Seattle', 'Dingley', 'London', 'Paris']
const country = ['Australia', 'USA', 'France', 'England']
const state = ['VIC', 'WA', 'NY', 'DER']

const fName = ['Nick', 'Natalia', 'Matt', 'Claudia', 'Mandisa', 'Brad', 'Mark']
const lName = ['Fletcher', 'Anguita', 'Dillahunty', 'Oliva', 'Thomas', 'Liddicoat', 'Mackoiwiak']
const domains = ['yahoo', 'gmail', 'hotmail', 'outlook']

const u = new Utils()

export class DataBuilder {
  constructor(u) {
    this.u = u
  }

  buildPerson() {
    let obj = new Person()
    obj.fName = fName[u.randomScalar(fName.length)]
    obj.lName = lName[u.randomScalar(lName.length)]
    obj.email = this.buildEmail()
    obj.mobile = this.buildMobile()
    obj.address = this.buildAddress()

    return obj
  }

  buildAddress() {
    let obj = new Address()
    obj.street = this.buildStreet()
    obj.city = city[u.randomScalar(city.length)]
    obj.country = country[u.randomScalar(country.length)]
    obj.state = state[u.randomScalar(state.length)]
    obj.locationNumber = u.randomScalar(10000)
    obj.country = country[u.randomScalar(country.length)]

    return obj
  }

  displayTable(objArr) {

  }

  buildEmail() {
    let str = `${fName[u.randomScalar(fName.length)]}@${domains[u.randomScalar(domains.length)]}.com`
    return str.toLowerCase()
  }

  buildMobile() {
    let str = ''
    let output = []
    let template = {
      sectionA: 4,
      sectionB: 3,
      section: 3
    }

    let arr = Array.from(Object.values(template))
    arr.forEach(x => {
      for (let i = 0; i < x; i++) {
        str += this.u.randomScalar(9)
      }
      output.push(str)
      str = ''
    })

    return output.join('-')
  }

  buildStreet() {
    let str = `${u.randomScalar(5000)} ${street[u.randomScalar(street.length)]} ${type[u.randomScalar(type.length)]}`
    return str
  }
}