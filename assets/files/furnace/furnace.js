function rawFoodClick(item) {
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let rawFoodSlot = document.querySelector("#rawFoodSlot");
    rawFoodSlot.setAttribute("src", itemSRC);
    rawFoodSlot.setAttribute("alt", itemALT);
    rawFoodSlot.setAttribute("gonnabe", foodList[foodID].gonnabe);
    rawFoodSlot.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function fuelClick(item) {
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let fuelSlot = document.querySelector("#fuelSlot");
    fuelSlot.setAttribute("src", itemSRC);
    fuelSlot.setAttribute("alt", itemALT);
    fuelSlot.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function noFood(item) {
    item.setAttribute("style", "display: none;");
    foodCooked = false;
    cooked = 0;
    Cooker();
    console.log(item.getAttribute("alt") + " removed");
}

const foodList = [
    {
        id: 0,
        name: "Raw Beef",
        gonnabe: "Steak",
        img: "../../../assets/imgs/furnace/raw_beef.png",
        cooked_name: "Steak",
        cooked_img: "../../../assets/imgs/furnace/steak.png",
    },
    {
        id: 1,
        name: "Raw Rabbit",
        gonnabe: "Cooked Rabbit",
        img: "../../../assets/imgs/furnace/raw_rabbit.png",
        cooked_name: "Cooked Rabbit",
        cooked_img: "../../../assets/imgs/furnace/cooked_rabbit.png",
    },
];
const fuelList = [
    {
        id: 0,
        name: "Coal",
        img: "../../../assets/imgs/furnace/coal.png",
        fuel: 3,

    },
    {
        id: 1,
        name: "Lava Bucket",
        img: "../../../assets/imgs/furnace/lava_bucket.png",
        fuel: 64,
    },
];

console.table(foodList);
console.table(fuelList);

const foodDialog = document.querySelector("#rawFood");
const fuelDialog = document.querySelector("#fuel");

let foodID = 0;
let fuelID = 0;
let fuelLeft = null;
let cooked = 0;
let foodCooked = false;

async function Cooker() {
    let isFood = document.querySelector("#rawFoodSlot");
    let isFuel = document.querySelector("#fuelSlot");
    let fuelCount = document.querySelector(".fuelCount");
    let cookedCount = document.querySelector(".cookedCount");
    if (isFood.alt != "raw food" && isFuel.alt != "fuel") {
        let cooked_img = document.querySelector("#cookedSlot");
        fuelCount.innerHTML = fuelLeft;
        cookedCount.innerHTML = cooked;
        console.log((cooked_img.getAttribute("alt") == isFood.getAttribute("gonnabe")) + " niga");
        if(foodCooked == false && fuelLeft > 0){
            await Sleep(2000);
            cooked_img.setAttribute("src", foodList[foodID].cooked_img);
            cooked_img.setAttribute("alt", foodList[foodID].cooked_name);
            cooked_img.setAttribute("style", "display: block;");
            isFood.style = "display: none;";
            isFood.alt = "raw food";
            fuelLeft -= 1;
            cooked++;
            fuelCount.innerHTML = fuelLeft;
            cookedCount.innerHTML = cooked;
            CheckForFuel(fuelLeft);
            foodCooked = true;
        }
        else if(cooked_img.getAttribute("alt") == foodList[foodID].gonnabe){
            await Sleep(2000);
            cooked_img.setAttribute("src", foodList[foodID].cooked_img);
            cooked_img.setAttribute("alt", foodList[foodID].cooked_name);
            cooked_img.setAttribute("style", "display: block;");
            isFood.style = "display: none;";
            isFood.alt = "raw food";
            fuelLeft -= 1;
            cooked++;
            fuelCount.innerHTML = fuelLeft;
            cookedCount.innerHTML = cooked;
            CheckForFuel(fuelLeft);
            foodCooked = true;
        }
    }
}

function CheckForFuel(fuelCount) {
    if (fuelCount < 1) {
        let isFuel = document.querySelector("#fuelSlot");
        isFuel.style = "display: none;";
    }
}

window.onload = (event) => {
    console.log("Niga loaded");

    let rawFood = document.querySelector(".rawFoodSlot");
    rawFood.onclick = (event) => {
        console.log("OPENED - raw food dialog");
        foodDialog.showModal(); //showModal beépített függvény, kinyitja a dialogot
    }
    let fuel = document.querySelector(".fuelSlot");
    fuel.onclick = (event) => {
        console.log("OPENED - fuel dialog");
        fuelDialog.showModal();
    }

    let rawFoodSelect = document.querySelector(".rawFoodSelect")
    for (let i = 0; i < foodList.length; i++) {
        let img = document.createElement("img");
        img.src = foodList[i].img;
        img.alt = foodList[i].name;
        img.gonnabe = foodList[i].gonnabe;
        img.draggable = false;
        img.onclick = (event) => {
            rawFoodClick(img);
            console.log(img.gonnabe);
            foodID = foodList[i].id;
            Cooker();
        }
        rawFoodSelect.appendChild(img);
    }
    let fuelSelect = document.querySelector(".fuelSelect");
    for (let i = 0; i < fuelList.length; i++) {
        let img = document.createElement("img");
        img.src = fuelList[i].img;
        img.alt = fuelList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            fuelClick(img);
            fuelID = fuelList[i].id;
            fuelLeft = fuelList[fuelID].fuel;
            Cooker();
        }
        fuelSelect.appendChild(img);
    }
};

function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}