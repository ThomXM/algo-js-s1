let student = {
    name: 'Bob',
    favoriteFood : 'Pizza',
    city : 'groenland' 
    
}

let values = Object.values(student)
let result = 0

values.forEach((value) => {
    result += value.length


})

console.log( result )