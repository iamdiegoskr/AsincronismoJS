const somethingWillHappen = () => {

    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey lo logramos ohhh si ohh si");
        } else {
            reject("Ups, error keloke");
        }
    })

}


// somethingWillHappen()
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     })


const somethingWillHappenTwo = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True keloke');
            }, 2000)
        } else {
            reject(new Error('False keloke'));
        }
    })
}

// somethingWillHappenTwo()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));


Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error(error)
    })