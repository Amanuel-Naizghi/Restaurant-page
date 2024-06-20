import './style.css';
import { menuButton,clearContent,myContent} from './index.js';
import burger from './burger.jpg';
import chicken from './chicken.jpg';
import lasagna from './pasta.jpg';
import pasta from './macaroon.jpg';
import salad from './salad.jpg';
import soda from './soda.jpg';

export function menuSetup(){
    clearContent();
    myContent.style.background="#FFDE95";
    myContent.style.opacity="0.9";
    menuButton.style.borderBottomColor="#FFDE95";
    menuButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="hidden";

    let menuContainer=document.createElement("div");
    menuContainer.classList.add("menu-container");
    let burgerContainer=document.createElement("div");
    let chickenContainer=document.createElement("div");
    let lasagnaContainer=document.createElement("div");
    let pastaContainer=document.createElement("div");
    let saladContainer=document.createElement("div");
    let sodaContainer=document.createElement("div");

    let burgerImageContainer=document.createElement("div");
    let chickenImageContainer=document.createElement("div");
    let lasagnaImageContainer=document.createElement("div");
    let pastaImageContainer=document.createElement("div");
    let saladImageContainer=document.createElement("div");
    let sodaImageContainer=document.createElement("div");

    const myBurger=new Image();
    const myChicken=new Image();
    const myLasagna=new Image();
    const myPasta=new Image();
    const mySalad=new Image();
    const mySoda=new Image();
    myBurger.src=burger;
    myChicken.src=chicken;
    myLasagna.src=lasagna;
    myPasta.src=pasta;
    mySalad.src=salad;
    mySoda.src=soda;
    burgerImageContainer.appendChild(myBurger);
    chickenImageContainer.appendChild(myChicken);
    lasagnaImageContainer.appendChild(myLasagna);
    pastaImageContainer.appendChild(myPasta);
    saladImageContainer.appendChild(mySalad);
    sodaImageContainer.appendChild(mySoda);
    burgerContainer.appendChild(burgerImageContainer);
    chickenContainer.appendChild(chickenImageContainer);
    lasagnaContainer.appendChild(lasagnaImageContainer);
    pastaContainer.appendChild(pastaImageContainer);
    saladContainer.appendChild(saladImageContainer);
    sodaContainer.appendChild(sodaImageContainer);

    let burgerDetailContainer=document.createElement("div");
    let chickenDetailContainer=document.createElement("div");
    let lasagnaDetailContainer=document.createElement("div");
    let pastaDetailContainer=document.createElement("div");
    let saladDetailContainer=document.createElement("div");
    let sodaDetailContainer=document.createElement("div");

    let burgerIntro=document.createElement("h2");
    let chickenIntro=document.createElement("h2");
    let lasagnaIntro=document.createElement("h2");
    let pastaIntro=document.createElement("h2");
    let saladIntro=document.createElement("h2");
    let sodaIntro=document.createElement("h2");

    let burgerInfo=document.createElement("p");
    let chickenInfo=document.createElement("p");
    let lasagnaInfo=document.createElement("p");
    let pastaInfo=document.createElement("p");
    let saladInfo=document.createElement("p");
    let sodaInfo=document.createElement("p");

    let burgerPriceText=document.createElement("p");
    let chickenPriceText=document.createElement("p");
    let lasagnaPriceText=document.createElement("p");
    let pastaPriceText=document.createElement("p");
    let saladPriceText=document.createElement("p");
    let sodaPriceText=document.createElement("p");

    let burgerOldPrice=document.createElement("s");   
    let chickenOldPrice=document.createElement("p");  
    let lasagnaOldPrice=document.createElement("p");  
    let pastaOldPrice=document.createElement("s"); 
    let saladOldPrice=document.createElement("p"); 
    let sodaOldPrice=document.createElement("s");    

    let burgerNewPrice=document.createElement("p"); 
    let pastaNewPrice=document.createElement("p"); 
    let sodaNewPrice=document.createElement("p");  

    burgerIntro.textContent="Burger";
    chickenIntro.textContent="Chicken";
    lasagnaIntro.textContent="Lasagna";
    pastaIntro.textContent="Pasta";
    saladIntro.textContent="Salad";
    sodaIntro.textContent="Soda";

    burgerInfo.textContent="Our place special table served with high quality double meat burger and cheese";
    chickenInfo.textContent="Fried chicken with a quality taste, and chips, and chapati served along side it";
    lasagnaInfo.textContent="Delicious and spicy well toasted lasagna with fried meat balls and sauce inside";
    pastaInfo.textContent="The legendary Italian pasta macaroni with spicy sauce, grinded meat & cheese drops"
    saladInfo.textContent="With fresh vegetables like cabbage,potato, garlic, mushroom & small amount of meat"
    sodaInfo.textContent="We serve all kind of soft drinks, mineral water & different energy drinks";

    burgerPriceText.textContent="Price: ";
    chickenPriceText.textContent="Price: ";
    lasagnaPriceText.textContent="Price: ";
    pastaPriceText.textContent="Price: ";
    saladPriceText.textContent="Price: ";
    sodaPriceText.textContent="Price: ";

    burgerOldPrice.textContent="$7.99";
    chickenOldPrice.textContent="$9.00";
    lasagnaOldPrice.textContent="$5.00";
    pastaOldPrice.textContent="$5.99";
    saladOldPrice.textContent="$3.00"
    sodaOldPrice.textContent="$3.50";
    burgerNewPrice.textContent="$6.00";
    pastaNewPrice.textContent="$4.00";
    sodaNewPrice.textContent="$2.00";

    let burgerOrder=document.createElement("button");
    let chickenOrder=document.createElement("button");
    let lasagnaOrder=document.createElement("button");
    let pastaOrder=document.createElement("button");
    let saladOrder=document.createElement("button");
    let sodaOrder=document.createElement("button");

    burgerOrder.textContent="Order";
    chickenOrder.textContent="Order";
    lasagnaOrder.textContent="Order";
    pastaOrder.textContent="Order";
    saladOrder.textContent="Order";
    sodaOrder.textContent="Order";

    burgerDetailContainer.appendChild(burgerIntro);
    burgerDetailContainer.appendChild(burgerInfo);
    burgerDetailContainer.appendChild(burgerPriceText);
    burgerDetailContainer.appendChild(burgerOldPrice);
    burgerDetailContainer.appendChild(burgerNewPrice);
    burgerDetailContainer.appendChild(burgerOrder);
    chickenDetailContainer.appendChild(chickenIntro);
    chickenDetailContainer.appendChild(chickenInfo);
    chickenDetailContainer.appendChild(chickenPriceText);
    chickenDetailContainer.appendChild(chickenOldPrice);
    chickenDetailContainer.appendChild(chickenOrder);
    lasagnaDetailContainer.appendChild(lasagnaIntro);
    lasagnaDetailContainer.appendChild(lasagnaInfo);
    lasagnaDetailContainer.appendChild(lasagnaPriceText);
    lasagnaDetailContainer.appendChild(lasagnaOldPrice);
    lasagnaDetailContainer.appendChild(lasagnaOrder);
    pastaDetailContainer.appendChild(pastaIntro);
    pastaDetailContainer.appendChild(pastaInfo);
    pastaDetailContainer.appendChild(pastaPriceText);
    pastaDetailContainer.appendChild(pastaOldPrice);
    pastaDetailContainer.appendChild(pastaNewPrice);
    pastaDetailContainer.appendChild(pastaOrder);
    saladDetailContainer.appendChild(saladIntro);
    saladDetailContainer.appendChild(saladInfo);
    saladDetailContainer.appendChild(saladPriceText);
    saladDetailContainer.appendChild(saladOldPrice);
    saladDetailContainer.appendChild(saladOrder);
    sodaDetailContainer.appendChild(sodaIntro);
    sodaDetailContainer.appendChild(sodaInfo);
    sodaDetailContainer.appendChild(sodaPriceText);
    sodaDetailContainer.appendChild(sodaOldPrice);
    sodaDetailContainer.appendChild(sodaNewPrice);
    sodaDetailContainer.appendChild(sodaNewPrice);
    sodaDetailContainer.appendChild(sodaOrder);
    burgerContainer.appendChild(burgerDetailContainer);
    chickenContainer.appendChild(chickenDetailContainer);
    lasagnaContainer.appendChild(lasagnaDetailContainer);
    pastaContainer.appendChild(pastaDetailContainer);
    saladContainer.appendChild(saladDetailContainer);
    sodaContainer.appendChild(sodaDetailContainer);
    menuContainer.appendChild(burgerContainer);
    menuContainer.appendChild(chickenContainer);
    menuContainer.appendChild(lasagnaContainer);
    menuContainer.appendChild(pastaContainer);
    menuContainer.appendChild(saladContainer);
    menuContainer.appendChild(sodaContainer);
    myContent.appendChild(menuContainer);
}