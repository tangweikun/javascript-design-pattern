function step1() {
  return new Promise(function(resolve, reject) {
    console.log('step1')
    // setTimeout(resolve, 1000)
    setTimeout(reject, 1000)
  })
}

function step2() {
  return new Promise(function(resolve, reject) {
    console.log('step2')
    // setTimeout(resolve, 1000)
    setTimeout(reject, 1000)
  })
}

function step3() {
  return new Promise(function(resolve, reject) {
    console.log('step3')
    setTimeout(resolve, 1000) // We don't pass data into resolve to make this example simpler
    // setTimeout(reject, 1000)
  })
}

step1()
  .catch(step2)
  .catch(step3)
  .then(function() {
    console.log('done')
  })
  .catch(function() {
    console.log('failed')
  })
