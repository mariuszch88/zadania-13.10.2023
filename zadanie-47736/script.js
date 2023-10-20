function reversedString(str) {

    const res = str.split('').reverse().join("");
    return res;
}

let result = reversedString("Akademia108");
console.log(result);