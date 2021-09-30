export class Paginator {
  data
  pageSize
  currentPage

  constructor(arr, IPP, parent) {
    this.parent = parent
    this.data = arr
    this.pageSize = Math.floor(this.data.length / IPP)
    this.numberOfPages = this.data / this.pageSize
    this.currentPage = 0

    this.buildControls()
  }

  getData() {

  }

  navigate(e) {
    switch (e.target.id) {
      case 'prev':
        if (this.currentPage > 0) {
          this.currentPage--
        }
        break;
      case 'next':
        console.log(this.currentPage)
        if (this.currentPage <= this.numberOfPages) {
          this.currentPage++
        }
        break;

      default:
        console.log(`Current Page: ${this.currentPage} - NOP: ${this.numberOfPages}`)
        break;
    }
  }

  buildControls() {
    let prev = document.createElement('span')
    prev.appendChild(this.buildButton('prev'))

    let next = document.createElement('span')
    prev.appendChild(this.buildButton('next'))

    this.parent.appendChild(prev)
    this.parent.appendChild(next)

  }

  buildButton(txt) {
    let tmp = document.createElement('button')
    tmp.id = txt
    tmp.addEventListener('click', e => { this.navigate(e) })
    tmp.innerText = txt
    return tmp
  }
}
