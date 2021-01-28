/**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet (name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof name === 'string') {
        resolve('Hello there, ' + name)
      } else {
        reject('Name must be a string!')
      }
    }, 1000)
  })
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser (str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.toUpperCase())
      } else {
        reject('Argument to uppercaser must be string')
      }
    }, 1500)
  })
}

const spacer = str => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.split('').join(' '))
      } else {
        reject('Argument to spacer must be string')
      }
    }, 1500)
  })
}

name = 'Star'
my_str = 'String'

greet(name).then((greetResult) => {
  console.log(greetResult)
  return uppercaser(my_str)
}).then((uppercaserResult) => {
  console.log(uppercaserResult)
  return spacer(uppercaserResult)
}).then((spacerResult) => {
  console.log(spacerResult)
}).catch((err) => {
  console.log('Received an error!')
  console.log(err)
})
