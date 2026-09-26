const data = {
    name:'gowrob',
    age: 18,
    pro: 'student',
    skill:['html','css','js','light-weight Python'],
    hobby: 'nothing to do',
}

// const datas = JSON.stringify(data)
// console.log(datas)

fetch("https://www.google.com/search?q=an+API%2C+JSON+goes&rlz=1C1BNSD_enBD1204BD1204&sourceid=chrome&ie=UTF-8").then(respon => respon.JSON()).then((otupu)=> console.log(otupu))