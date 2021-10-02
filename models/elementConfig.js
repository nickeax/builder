export class ElementConfig {
  elementClass
  class
  id
  parent
  data

  constructor(ec, c, i, p, d) {
    this.elementClass = ec
    this.class = c
    this.id = i
    this.parent = p
    this.data = d
  }
}