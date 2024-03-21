//alert("NIGA!"); //értesítés

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
 - .<attribute> (attribútum nevét kell ide beírni)
   .<attribute> .setAttribute(<attribute>, <value>)
 - .style.<property>
 */

console.log("-----OTHERS")
let others = document.querySelectorAll(".other");

for (let other of others){
    other.style.backgroundColor = "aqua";
    other.style.color = "green";
}

console.log(others);

let as = document.querySelectorAll("a");
for(let a of as){
    a.setAttribute("href", "#");
    a.setAttribute("target", "_blank");
}

let del = document.getElementById("delme");
document.body.removeChild(del);

let lista = document.querySelector(".lista");
lista.removeChild(document.querySelector("#delme"));

//lista.remove(); - teljes element törlés

let p = document.createElement("p"); //elem létrehozás
p.innerText = "NIGA NIGA NIGA NIGA NIGA     I'm 100% nigga"
document.body.appendChild(p);

let newli = document.createElement("li");
newli.innerText = "Bananiga";
lista.appendChild(newli);

let newli2 = document.createElement("li");
newli2.innerText = "Barackos Nigaszkos";
lista.insertBefore(newli2, newli) //mit szúrok be, mi elé szúrom be