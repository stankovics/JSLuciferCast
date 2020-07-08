const actors = [
    {
        id: 1,
        name:"lauren german",
        role:"chloe decker",
        img:"./img/2.jpg",
        text:"Lauren Christine German is an American actress. She had her first major role in the 2002 romantic drama film A Walk to Remember, followed by roles in the horror films The Texas Chainsaw Massacre and Hostel: Part II.",
    },
    {
        id: 2,
        name:"Lesley-Ann brandt",
        role:"mazikeen",
        img:"./img/3.jpg",
        text:"Lesley-Ann Brandt is a South African actress. Brandt has acted in a number of New Zealand television series and first came to international notice with her role as a slave girl Naevia in the series Spartacus: Blood and Sand. Since January 2016, she plays the role of Maze on the television series Lucifer.",
    },
    {
        id: 3,
        name:"D.B. woodside",
        role:"Amenadiel",
        img:"./img/4.jpg",
        text:"David Bryan Woodside is an American actor, perhaps best known for his portrayal of the White House Chief of Staff Wayne Palmer on the Fox action/drama series 24.",
    },
    {
        id: 4,
        name:"kevin alejandro",
        role:"Dan",
        img:"./img/5.jpg",
        text:"Kevin Michael Alejandro is an American actor and film director. He is known for his roles as Nate Moretta in the crime drama Southland, Forklift Mike in Parenthood, Jesús Velázquez in the supernatural ...",
    },
];
//select info
const img = document.getElementById("person-img");
const actor = document.getElementById("actor");
const roles = document.getElementById("roles");
const info = document.getElementById("info");
// select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;
// show actor based on item

function showActor(actor) {
    const item = actors[actor];
    img.src = item.img;
    actor.textContent = item.name;
    roles.textContent = item.role;
    info.textContent = item.text;
}
//show next actor
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>actors.length-1) {
        currentItem = 0;
    }
    showActor(currentItem);
});
//show prev actor 
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0) {
        currentItem = actors.length-1;
    }
    showActor(currentItem);
});
//show random actor
randomBtn.addEventListener("click", function(){
currentItem = Math.floor(Math.random() * actors.length);
showActor(currentItem);
});
// Math.floor returns the largest integer less than or equal to a given number.
//Math.random returns number between 0 - 1