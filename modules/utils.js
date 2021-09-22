export class Utils {
  l = console.log
  t = console.table
  randomRange(n, l, u) {
    let tmpArr = [];
    for (let i = 0; i < n; i++) {
      tmpArr.push(Math.floor(Math.random() * (u - l) + l));
    }

    return tmpArr;
  }

  randomScalar(u) {
    return Math.floor(Math.random() * u);
  }

  capitalise = str => {
    return str.split('').map((x, i) => {
      if(i === 0) return x.toUpperCase()
      return x.toLowerCase()
      }).join('')
  }
}
