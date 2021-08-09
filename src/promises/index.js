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
    return new Promise((resolve, reject) => {});
};
