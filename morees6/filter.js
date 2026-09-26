const students = [
    {
        name: 'faisal' , age: 19,
        name: 'sab' , age: 16,
        name: 'sal' , age: 24,
        name: 'fai' , age: 22
    }
]

const NS = students.filter(frd => frd.age>25);
console.log(NS)