function armor1Click(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let armor1 = document.querySelector("#armor1");
    armor1.setAttribute("src", itemSRC);
    armor1.setAttribute("alt", itemALT);
    armor1.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function armor2Click(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let armor2 = document.querySelector("#armor2");
    armor2.setAttribute("src", itemSRC);
    armor2.setAttribute("alt", itemALT);
    armor2.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function armor3Click(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let armor3 = document.querySelector("#armor3");
    armor3.setAttribute("src", itemSRC);
    armor3.setAttribute("alt", itemALT);
    armor3.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function armor4Click(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let armor4 = document.querySelector("#armor4");
    armor4.setAttribute("src", itemSRC);
    armor4.setAttribute("alt", itemALT);
    armor4.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function noArmor(item){
    item.setAttribute("style", "display: none;");
}

function weaponClick(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let weaponSlot = document.querySelector("#weaponSlot");
    weaponSlot.setAttribute("src", itemSRC);
    weaponSlot.setAttribute("alt", itemALT);
    weaponSlot.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}
function toolClick(item){
    let itemSRC = item.getAttribute("src");
    let itemALT = item.getAttribute("alt");
    let toolSlot = document.querySelector("#toolSlot");
    toolSlot.setAttribute("src", itemSRC);
    toolSlot.setAttribute("alt", itemALT);
    toolSlot.setAttribute("style", "display: block;");
    console.log(item.getAttribute("alt") + " selected");
}

//ALT solution
const headList = [
    {
        name: "Chain Helmet",
        img: "assets/imgs/inventory/helmets/h_c.png",
    },
    {
        name: "Leather Helmet",
        img: "assets/imgs/inventory/helmets/h_l.png",
    },
    {
        name: "Gold Helmet",
        img: "assets/imgs/inventory/helmets/h_g.png",
    },
    {
        name: "Iron Helmet",
        img: "assets/imgs/inventory/helmets/h_i.png",
    },
    {
        name: "Diamond Helmet",
        img: "assets/imgs/inventory/helmets/h_d.png",
    },
];
const chestList = [
    {
        name: "Chain Chestplate",
        img: "assets/imgs/inventory/chestplates/c_c.png",
    },
    {
        name: "Leather Chestplate",
        img: "assets/imgs/inventory/chestplates/c_l.png",
    },
    {
        name: "Gold Chestplate",
        img: "assets/imgs/inventory/chestplates/c_g.png",
    },
    {
        name: "Iron Chestplate",
        img: "assets/imgs/inventory/chestplates/c_i.png",
    },
    {
        name: "Diamond Chestplate",
        img: "assets/imgs/inventory/chestplates/c_d.png",
    },
];
const trousList = [
    {
        name: "Chain Trouser",
        img: "assets/imgs/inventory/leggings/t_c.png",
    },
    {
        name: "Leather Trouser",
        img: "assets/imgs/inventory/leggings/t_l.png",
    },
    {
        name: "Gold Trouser",
        img: "assets/imgs/inventory/leggings/t_g.png",
    },
    {
        name: "Iron Trouser",
        img: "assets/imgs/inventory/leggings/t_i.png",
    },
    {
        name: "Diamond Trouser",
        img: "assets/imgs/inventory/leggings/t_d.png",
    },
];
const bootList = [
    {
        name: "Chain Boots",
        img: "assets/imgs/inventory/shoes/s_c.png",
    },
    {
        name: "Leather Boots",
        img: "assets/imgs/inventory/shoes/s_l.png",
    },
    {
        name: "Gold Boots",
        img: "assets/imgs/inventory/shoes/s_g.png",
    },
    {
        name: "Iron Boots",
        img: "assets/imgs/inventory/shoes/s_i.png",
    },
    {
        name: "Diamond Boots",
        img: "assets/imgs/inventory/shoes/s_d.png",
    },
];
const weaponList = [
    {
        name: "Netherite Axe",
        img: "assets/imgs/inventory/weapons/netherite/n_a.png",
    },
    {
        name: "Netherite Sword",
        img: "assets/imgs/inventory/weapons/netherite/n_sw.png",
    },
    {
        name: "Netherite Shovel",
        img: "assets/imgs/inventory/weapons/netherite/n_s.png",
    },
    {
        name: "Netherite Pickaxe",
        img: "assets/imgs/inventory/weapons/netherite/n_a.png",
    },
    {
        name: "Netherite Hoe",
        img: "assets/imgs/inventory/weapons/netherite/n_h.png",
    },
    {
        name: "Diamond Axe",
        img: "assets/imgs/inventory/weapons/diamond/d_a.png",
    },
    {
        name: "Diamond Sword",
        img: "assets/imgs/inventory/weapons/diamond/d_sw.png",
    },
    {
        name: "Diamond Shovel",
        img: "assets/imgs/inventory/weapons/diamond/d_s.png",
    },
    {
        name: "Diamond Pickaxe",
        img: "assets/imgs/inventory/weapons/diamond/d_p.png",
    },
    {
        name: "Diamond Hoe",
        img: "assets/imgs/inventory/weapons/diamond/d_h.png",
    },
    {
        name: "Iron Axe",
        img: "assets/imgs/inventory/weapons/iron/i_a.png",
    },
    {
        name: "Iron Sword",
        img: "assets/imgs/inventory/weapons/iron/i_sw.png",
    },
    {
        name: "Iron Shovel",
        img: "assets/imgs/inventory/weapons/iron/i_s.png",
    },
    {
        name: "Iron Pickaxe",
        img: "assets/imgs/inventory/weapons/iron/i_p.png",
    },
    {
        name: "Iron Hoe",
        img: "assets/imgs/inventory/weapons/iron/i_h.png",
    },
];
const toolList = [
    {
        name: "Shield",
        img: "assets/imgs/inventory/tools/shield.png",
    },
    {
        name: "Totem of Undying",
        img: "assets/imgs/inventory/tools/totem.png",
    },
    {
        name: "Enchanted Golden Apple",
        img: "assets/imgs/inventory/tools/golden_a.gif",
    },
    {
        name: "Golden Carrot",
        img: "assets/imgs/inventory/tools/golden_c.png",
    },
    {
        name: "Debug Stick",
        img: "assets/imgs/inventory/tools/debug_s.gif",
    },
    {
        name: "Milk",
        img: "assets/imgs/inventory/tools/milk.png",
    },
    {
        name: "Trial Key",
        img: "assets/imgs/inventory/tools/trial_key.png",
    },
    {
        name: "Fire Ball",
        img: "assets/imgs/inventory/tools/fireball.webp",
    },
    {
        name: "Fishing Rod",
        img: "assets/imgs/inventory/tools/f_rod.png",
    },
];

console.table(headList);
console.table(chestList);
console.table(trousList);
console.table(bootList);
console.table(weaponList);
console.table(toolList);
    
/*window.addEventListener("load", (event) => {

});*/

const weaponDialog = document.querySelector("#weapon");
const toolDialog = document.querySelector("#tool");

window.onload = (event) => {
    console.log("Niga loaded");

    let weaponChooser = document.querySelector(".weapon");
    weaponChooser.onclick = (event) => {
        console.log("OPENED - weapon dialog");
        weaponDialog.showModal(); //showModal beépített függvény, kinyitja a dialogot
    }
    let toolChooser = document.querySelector(".tool");
    toolChooser.onclick = (event) => {
        console.log("OPENED - tool dialog");
        toolDialog.showModal();
    }

    let tool = document.querySelector(".toolSelect");
    for(let i = 0; i < toolList.length; i++){
        let img = document.createElement("img");
        img.src = toolList[i].img;
        img.alt = toolList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            toolClick(img);
        }
        tool.appendChild(img);
    }

    let weapon = document.querySelector(".weaponSelect")
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
    
    for(let i = 0; i< headList.length; i++){
        let img = document.createElement("img");
        img.src = headList[i].img;
        img.alt = headList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            /*headC.removeChild(headIMG);
            console.log("img clicked - " + img.alt);*/
            armor1Click(img);
            /*headIMG.src = img.src;
            headIMG.alt = img.alt;
            headIMG.draggable = false;
            headC.appendChild(headIMG);*/
        };
        head.appendChild(img);
    }
    //---------------
    let chest = document.querySelector(".flex2");
    
    for(let i = 0; i< chestList.length; i++){
        let img = document.createElement("img");
        img.src = chestList[i].img;
        img.alt = chestList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            /*chestC.removeChild(chestIMG);
            console.log("img clicked - " + img.alt);*/
            armor2Click(img);
            /*chestIMG.src = img.src;
            chestIMG.alt = img.alt;
            chestIMG.draggable = false;
            chestC.appendChild(chestIMG);*/
        };
        chest.appendChild(img);
    }
    //---------------
    let trous = document.querySelector(".flex3");
    
    for(let i = 0; i< trousList.length; i++){
        let img = document.createElement("img");
        img.src = trousList[i].img;
        img.alt = trousList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            /*trousC.removeChild(trousIMG);
            console.log("img clicked - " + img.alt);*/
            armor3Click(img);
            /*trousIMG.src = img.src;
            trousIMG.alt = img.alt;
            trousIMG.draggable = false;
            trousC.appendChild(trousIMG);*/
        };
        trous.appendChild(img);
    }
    //---------------
    let boot = document.querySelector(".flex4");
    
    for(let i = 0; i< bootList.length; i++){
        let img = document.createElement("img");
        img.src = bootList[i].img;
        img.alt = bootList[i].name;
        img.draggable = false;
        img.onclick = (event) => {
            /*bootC.removeChild(bootIMG);
            console.log("img clicked - " + img.alt);*/
            armor4Click(img);
            /*bootIMG.src = img.src;
            bootIMG.alt = img.alt;
            bootIMG.draggable = false;
            bootC.appendChild(bootIMG);*/
        };
        boot.appendChild(img);
    }
};