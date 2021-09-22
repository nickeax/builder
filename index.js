import { Utils } from './modules/utils.js';
import { DataBuilder } from './modules/dataBuilder.js'
import { ElementBuilder } from './modules/elementBuilder.js'
import { ElementConfig } from './models/elementConfig.js'
import { Address } from './models/address.js';
import { Person } from './models/person.js';

// Write Javascript code!
const appDiv = document.getElementById('app');

let u = new Utils();

let db = new DataBuilder(new Utils())

let people = []
for (let i = 0; i < 30; i++) {
  people.push(db.buildPerson())
}

let testEl = new ElementBuilder(
  new ElementConfig('table', 'standard', 'peopleTable', appDiv, people),
  new Utils())