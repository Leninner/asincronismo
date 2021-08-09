const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Lo hicimos!");
        } else {
            reject("Rayos!");
        }
    });
};
