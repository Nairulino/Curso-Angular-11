/** Asincronía y callbacks */

function hacerAsincrono(data, callback) {
  setTimeout(() => {
    callback(data)
  }, 1000);
}

hacerAsincrono(23,
  (data) => {
    console.log(`Resultado: ${data}`)
  }
)

/** Asincronía y promesas */

function hacerAsincronoPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random()
      if (num > 0.5) {
        resolve(num)
      } else {
        reject(new Error(num))
      }
    }, 1000);

  })
}

hacerAsincronoPromesa()
  .then((data) => {
    console.log('Resultado: ', data)
  })
  .catch((error) => {
    console.error('Error: ', error.message)
  });

/** Asincronía y asinc/await - ES2017 (ES8) */

(async () => {
  console.log('Función anónima autoinvocada')
  try {
    const data = await hacerAsincronoPromesa()
    console.log('Resultado (await): ', data)
  } catch (error) {
    console.error('Error (await): ', error.message)
  }
})()