//alert("NIGA!");

//DOM - Documentum Object Model, memóriában építi fel a weboldalt

//document - egész oldalra vonatkozik
//getElementById - id alapján kérjük le az adott objektumot
//let +változónév - változó létrehozás
let f_div = document.getElementById("first")
//console.log - kiíratás a konzolra
console.log(f_div.className)
f_div.className = "";
//f_div.innerText = "<a>trapista</a>"; //szövegként kezeli és bennehagyja a tageket
f_div.innerHTML = "<a>NIGA BUY</a>"; //html kódból kiveszi a szöveget
console.log(f_div.className)

//let divs = document.getElementsByClassName("text"); //collection-t ad vissza, olyan mint a tömb
let divs = document.getElementsByTagName("div"); //tag alkapján lekérés
console.log(divs);
console.log(divs[1]); //indexelés
console.log("-----");

//C# foreach
for (let item in divs) {
    console.log("NIGAAA");
    console.log(item);
}

for(let i = 0; i < divs.length; i++){
    console.log("i: " + i);
    console.log("divs[i]: " + divs[i]);
}

console.log("----------");

//for of
console.log("-----for of");
for(let item of divs){
    console.log(item);
    item.className += " checked";
}

//for in
console.log("-----for in");
for(let item in divs){
    console.log(item);
}


console.log("-----QUERY SELECTOR")
//úgy működik mint a css, css szelektort kell megadni
//let tag = document.querySelector("html body div a");
let tag = document.querySelector("#second"); //id alapján is szelektálhatunk
tag.innerHTML = "NIGAAA";
console.log(tag);

console.log("-----QUERY SELECTOR ALL")
let tags = document.querySelectorAll(".checked");
console.log(tags);

/*
DOM elemek elérése
 - document.getElementBy
 - document.getElementByClassName
 - document.getElementByTagName

 - document.querySelector[All]

DOM elemek módosítása
 - .innerText
 - .innerHTML
 - .className
*/