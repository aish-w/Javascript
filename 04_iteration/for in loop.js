const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(key) //js cpp rb swift
    //console.log(`${key} shortcut is for ${myObject[key]}`); //js shortcut is for javascript.....so on
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key) //0 1 2 3 4
    //console.log(programming[key]); //js rb py java cpp
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //nothing printed because map is not iteratable
// }