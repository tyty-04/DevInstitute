//Exercise 1
function age(myAge){
    let momAge = myAge*2;
    let dadAge = Math.floor(momAge*1.2);
    console.log("Mom: " + momAge);
    console.log("Dad: " + dadAge);
}
age(18);

//Exercise 2
function age2(myAge){
    return myAge*2;
}

console.log("Mom: " + age2(18));