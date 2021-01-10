const doSomethingAsync = () => {

    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve("Todo salio ok"), 3000): reject(new Error("Test error"));
    })

}



const doSomething = async() => {

    const some = await doSomethingAsync()
    console.log(some);

}


// console.log("Before");
// doSomething();
// console.log("After");


const anotherFunction = async() => {
    try {
        const data = await doSomethingAsync()
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

console.log("Before");
anotherFunction()
console.log("After");