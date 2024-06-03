var arr = ["a", 1, "b", 10, true, "Hello", false];
var filteredArray = [];

arr.forEach((element) => {
    if (typeof element === "string") {
        filteredArray.push(element);
    }
});
