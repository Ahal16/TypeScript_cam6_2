//Create an object from the given key-value pairs

const keyValuePairs: { [key: string]: any } = {
    name: "John Doe",
    age: 30,
    isActive: true,
    skills: ["JS", "TS"]
};

const obj = Object.assign({}, keyValuePairs);

console.log(obj);
