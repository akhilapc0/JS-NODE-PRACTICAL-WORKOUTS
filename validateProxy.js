let student = {
    name: "Akhila",
    age: 22
};

let studentProxy = new Proxy(student, {
    set(target, key, value) {

        if (key === "age") {
            if (typeof value !== "number" || value < 0) {
                console.log("Invalid Age");
                return false;
            }
        }

        if (key === "name") {
            if (value.length < 3) {
                console.log("Name must contain at least 3 letters");
                return false;
            }
        }

        target[key] = value;
        return true;
    }
});

studentProxy.age = 25;
studentProxy.name = "Anu";

console.log(student);