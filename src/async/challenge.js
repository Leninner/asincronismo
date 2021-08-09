const fetchData = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (API) => {
    try {
        const data = await fetchData(API),
            character = await fetchData(`${API}${data.results[0].id}`),
            origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
};

console.log("Before");
anotherFunction(API);
console.log("After");
