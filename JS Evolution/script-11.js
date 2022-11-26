/*
let promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Success')
    console.log('After day')
    }, 500); 
})
*/
/*
let delay = new Promise(((resolve, reject) => {
    setTimeout( () => reject(`'Done!' ${ms}`), ms)
}))

delay(1000)
    .then(date => delay(500))
    .then(data => console.log(data))
    .catch(() => console.log(err))
    .finally(() => console.log('Finally'))
*/
/*
async function asyncDelay() {
    try {
      const data = await DelayNode(1000);
        console.log(data);  
    } catch {
        console.log('Error')
    }
}

asyncDelay();
*/
Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data));