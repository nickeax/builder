export class ElementBuilder {
  #processes = [];
  output
  data
  u

  constructor(config, u) {
    this.data = config.data
    this.id = config.id
    this.class = config.class
    this.u = u
    this.parent = config.parent
    let el;
    switch (config.elementClass) {
      case 'block':
        el = documument.createElement('div');
        el.setAttribute('class', config.class);
        el.setAttribute('id', config?.id);
        break;
      case 'table':
        this.parent.appendChild(this.buildTable())
    }
  }

  buildElement(type, val = "") {
    let el = document.createElement(type)
    el.innerText = val

    return el
  }

  buildHeaders() {
    let arr = Object.keys(this.data[0])
    return arr.map(x => this.u.capitalise(x))
  }

  buildTable() {
    let tbl = document.createElement('table')
    tbl.id = this.id
    tbl.classList.add(this.class)
    let headerRow = this.buildElement('tr', "")
    let newHeaders = this.buildHeaders()

    this.data.forEach((x, i) => {
      let tmpRow = this.buildElement('tr')
      if (i === 0) {
        newHeaders.forEach(x => {
          let th = this.buildElement('th', x)
          headerRow.appendChild(th)
        })
        tbl.appendChild(headerRow)
      }

      let currRow = this.buildElement('tr')
      Object.values(x).forEach((y, i) => {
        if (i === Object.values(x).length - 1) {
          console.log(x.printAddress());
          currRow.appendChild(this.buildElement('td', x.printAddress()))
        } else {
          currRow.appendChild(this.buildElement('td', y))
        }

      })
      tbl.appendChild(currRow);
    })

    return tbl
  }


}
