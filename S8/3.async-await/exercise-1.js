// Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

// ```js
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const runTimeOut = async() => {
    return await  new Promise((resolve) => {
        setTimeout(function () {
            resolve(console.log('Time out!'));
        }, 2000);
    })

};

runTimeOut();