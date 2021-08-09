const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Lo hicimos!");
        } else {
            reject("Rayos!");
        }
    });
};

somethingWillHappen()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
    //NOTE: Promise se debe escribir con mayúscula siempre
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("True");
            }, 2000);
        } else {
            const error = new Error("Whooops!");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((response) => console.log("Array of results: ", response))
    .catch((err) => console.error(err));
