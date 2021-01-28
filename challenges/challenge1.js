function snooze (action) {
  setTimeout(function () {
    action()
  }, 0)
}
console.log('Step 1')

snooze(function () {
  console.log('Step 2')
  console.log('Async Action completed via callback')
})

console.log('Step 3')

