function armor1Click(item){
    let itemSRC = item.getAttribute("src");
    let armor1 = document.querySelector("#armor1");
    armor1.setAttribute("src", itemSRC);
    armor1.setAttribute("draggable", false);
}
function armor2Click(item){
    let itemSRC = item.getAttribute("src");
    let armor2 = document.querySelector("#armor2");
    armor2.setAttribute("src", itemSRC);
}
function armor3Click(item){
    let itemSRC = item.getAttribute("src");
    let armor3 = document.querySelector("#armor3");
    armor3.setAttribute("src", itemSRC);
}
function armor4Click(item){
    let itemSRC = item.getAttribute("src");
    let armor4 = document.querySelector("#armor4");
    armor4.setAttribute("src", itemSRC);
}
function noArmor(item){
    item.removeAttribute("src");
}

function weaponClick(item){
    let itemSRC = item.getAttribute("src");
    let weaponSlot = document.querySelector("#weaponSlot");
    weaponSlot.setAttribute("src", itemSRC);
    weaponSlot.setAttribute("style", "display: block;");
}

//ALT solution
const headList = [
    {
        name: "Chain Helmet",
        img: "assets/imgs/h_c.png",
        equipped: false
    },
    {
        name: "Leather Helmet",
        img: "assets/imgs/h_l.png",
        equipped: false
    },
    {
        name: "Gold Helmet",
        img: "assets/imgs/h_g.png",
        equipped: false
    },
    {
        name: "Iron Helmet",
        img: "assets/imgs/h_i.png",
        equipped: false
    },
    {
        name: "Diamond Helmet",
        img: "assets/imgs/h_d.png",
        equipped: false
    },
];
const chestList = [
    {
        name: "Chain Chest",
        img: "assets/imgs/c_c.png",
    },
    {
        name: "Leather Chest",
        img: "assets/imgs/c_l.png",
    },
    {
        name: "Gold Chest",
        img: "assets/imgs/c_g.png",
    },
    {
        name: "Iron Chest",
        img: "assets/imgs/c_i.png",
    },
    {
        name: "Diamond Chest",
        img: "assets/imgs/c_d.png",
    },
];
const trousList = [
    {
        name: "Chain Trouser",
        img: "assets/imgs/t_c.png",
    },
    {
        name: "Leather Trouser",
        img: "assets/imgs/t_l.png",
    },
    {
        name: "Gold Trouser",
        img: "assets/imgs/t_g.png",
    },
    {
        name: "Iron Trouser",
        img: "assets/imgs/t_i.png",
    },
    {
        name: "Diamond Trouser",
        img: "assets/imgs/t_d.png",
    },
];
const bootList = [
    {
        name: "Chain Boots",
        img: "assets/imgs/s_c.png",
    },
    {
        name: "Leather Boots",
        img: "assets/imgs/s_l.png",
    },
    {
        name: "Gold Boots",
        img: "assets/imgs/s_g.png",
    },
    {
        name: "Iron Boots",
        img: "assets/imgs/s_i.png",
    },
    {
        name: "Diamond Boots",
        img: "assets/imgs/s_d.png",
    },
];
const weaponList = [
    {
        name: "Diamond Axe",
        img: "assets/imgs/d_a.png",
    },
    {
        name: "Diamond Sword",
        img: "assets/imgs/d_sw.png",
    },
    {
        name: "Diamond Shovel",
        img: "assets/imgs/d_s.png",
    },
    {
        name: "Diamond Pickaxe",
        img: "assets/imgs/d_p.png",
    },
    {
        name: "Diamond Hoe",
        img: "assets/imgs/d_h.png",
    },
    {
        name: "Iron Axe",
        img: "assets/imgs/i_a.png",
    },
    {
        name: "Iron Sword",
        img: "assets/imgs/i_sw.png",
    },
    {
        name: "Iron Shovel",
        img: "assets/imgs/i_s.png",
    },
    {
        name: "Iron Pickaxe",
        img: "assets/imgs/i_p.png",
    },
    {
        name: "Iron Hoe",
        img: "assets/imgs/i_h.png",
    },
];
    
/*window.addEventListener("load", (event) => {

});*/

const weaponDialog = document.querySelector("#weapon");
const shieldDialog = document.querySelector("#shield");


window.onload = (event) => {
    console.log("Niga loaded");

    let weaponChooser = document.querySelector(".weapon");
    weaponChooser.onclick = (event) => {
        console.log("OPEN - weapon dialog");
        weaponDialog.showModal(); //showModal beépített függvény, kinyitja a dialogot
    }
    let shieldChooser = document.querySelector(".shield");
    shieldChooser.onclick = (event) => {
        console.log("OPEN - shield dialog");
        shieldDialog.showModal();
    }

    let weapon = document.querySelector(".weaponSelect")
    //let weaponIMG = document.createElement("img");
    for(let i = 0; i < weaponList.length; i++){
        let img = document.createElement("img");
        img.src = weaponList[i].img;
        img.alt = weaponList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            weaponClick(img);
        }
    weapon.appendChild(img);
    }

    let head = document.querySelector(".flex1");
    let headC = document.querySelector(".armor1");
    let headIMG = document.createElement("img");
    headC.appendChild(headIMG);
    
    for(let i = 0; i< headList.length; i++){
        let img = document.createElement("img");
        img.src = headList[i].img;
        img.alt = headList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            headC.removeChild(headIMG);
            console.log("img clicked - " + img.alt);
            //armor1Click(img);
            headIMG.src = img.src;
            headIMG.alt = img.alt;
            headIMG.draggable = false;
            headC.appendChild(headIMG);
        };
        head.appendChild(img);
    }
    //---------------
    let chest = document.querySelector(".flex2");
    let chestC = document.querySelector(".armor2");
    let chestIMG = document.createElement("img");
    chestC.appendChild(chestIMG);
    
    for(let i = 0; i< chestList.length; i++){
        let img = document.createElement("img");
        img.src = chestList[i].img;
        img.alt = chestList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            chestC.removeChild(chestIMG);
            console.log("img clicked - " + img.alt);
            //armor2Click(img);
            chestIMG.src = img.src;
            chestIMG.alt = img.alt;
            chestIMG.draggable = false;
            chestC.appendChild(chestIMG);
        };
        chest.appendChild(img);
    }
    //---------------
    let trous = document.querySelector(".flex3");
    let trousC = document.querySelector(".armor3");
    let trousIMG = document.createElement("img");
    trousC.appendChild(trousIMG);
    
    for(let i = 0; i< trousList.length; i++){
        let img = document.createElement("img");
        img.src = trousList[i].img;
        img.alt = trousList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            trousC.removeChild(trousIMG);
            console.log("img clicked - " + img.alt);
            //armor3Click(img);
            trousIMG.src = img.src;
            trousIMG.alt = img.alt;
            trousIMG.draggable = false;
            trousC.appendChild(trousIMG);
        };
        trous.appendChild(img);
    }
    //---------------
    let boot = document.querySelector(".flex4");
    let bootC = document.querySelector(".armor4");
    let bootIMG = document.createElement("img");
    bootC.appendChild(bootIMG);
    
    for(let i = 0; i< bootList.length; i++){
        let img = document.createElement("img");
        img.src = bootList[i].img;
        img.alt = bootList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            bootC.removeChild(bootIMG);
            console.log("img clicked - " + img.alt);
            //armor4Click(img);
            bootIMG.src = img.src;
            bootIMG.alt = img.alt;
            bootIMG.draggable = false;
            bootC.appendChild(bootIMG);
        };
        boot.appendChild(img);
    }
};