//alert("NIGA!");

//DOM - Documentum Object Model, memóriában építi fel a weboldalt

//document - egész oldalra vonatkozik
//getElementById - id alapján kérjük le az adott objektumot
//let +változónév - változó létrehozás
let f_div = document.getElementById("first")
//console.log - kiíratás a konzolra
console.log(f_div.className)
f_div.className = "";
console.log(f_div.className)