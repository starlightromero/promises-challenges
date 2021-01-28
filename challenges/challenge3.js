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
    }, 500)
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
    }, 500)
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

async function greetAndUppercase (name) {
  const greeting = await greet(name)
  const uppercasedGreeting = await uppercaser(greeting)
  const spacedGreeting = await spacer(uppercasedGreeting)
  return spacedGreeting
}

const result = greetAndUppercase('Ducky')
console.log(result)

greetAndUppercase('Ducky').then(function (result) {
  console.log(result)
}).catch(function (err) {
  console.log(err)
})
