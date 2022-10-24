let person = {
    fname: "Shmuel",
    lname: "Daniel", 
    age: 18,
    isMarried: false,
}

let vals = Object.values(person);

for (let i = 0; i < vals.length; i++){
    let upperCase = [];
    if (typeof vals[i] == string){
        upperCase.push(vals[i].toUpperCase());
    }
    console.log(upperCase);
}

