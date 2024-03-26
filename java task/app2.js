
let text = 'Coders Azerbaycan';
console.log(text);
console.log(text.length);



let text1 = 'Coders Azerbaycan'
console.log(text1.includes("c"));
console.log(text1.startsWith("a"));
console.log(text1.endsWith("n"));


let text2 = 'Coders Azerbaycan'
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());
console.log(text2.toLocaleLowerCase());
console.log(text2.toString());


// repeat 
let text3 ="Qarabag Azerbaycandir!";
console.log(text3);
console.log(text3.repeat(6));



// concat 
const gul1=[ "Nergiz","Lale"];
const gul2=["Papatya","Qerenfil","Qizil gul"];
const flowers=gul1.concat(gul2);
console.log(flowers);




// match
// let text4="Coders Azerbaycan proqramlasdirma kursudur";
// let resurt=text.match("kurs");
// console.log(text4);
// console.log(resurt.match)





// test-(true)
let text5="Coders Azerbaycan proqramlasdirma kursudur";
let pattern=/e/;
let result=pattern.test(text5);
console.log(result);


// test-(fals)
let text6="Coders Azerbaycan proqramlasdirma kursudur";
let pattern1=/x/;
let result1=pattern1.test(text6);
console.log(result1);
