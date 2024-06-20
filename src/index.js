import './style.css';
import {homeSetup} from './home.js';
import {aboutSetup} from './about.js';
import {menuSetup} from './menu.js';

const myContent=document.querySelector("#content");
//Creating action listener for the navigation buttons
let homeButton=document.querySelector("#home");
homeButton.addEventListener('click',()=>homeSetup());

let aboutButton=document.querySelector("#about");
aboutButton.addEventListener('click',()=>aboutSetup());

let menuButton=document.querySelector("#menu");
menuButton.addEventListener('click',()=>menuSetup());
//This function is used for clearing the page after another button in the navigation is clicked
function clearContent(){
    document.getElementById('content').innerHTML="";
    myContent.style.opacity="0.7";
    homeButton.style.borderBottomColor="none";
    homeButton.style.borderBottomStyle="none";
    aboutButton.style.borderBottomColor="none";
    aboutButton.style.borderBottomStyle="none";
    menuButton.style.borderBottomColor="none";
    menuButton.style.borderBottomStyle="none";
}
//Used when the page is initializing so that the page will start loading with the home page
let initial=0;
if(initial===0){
    homeSetup();
    initial+=1;
}

export {homeButton,aboutButton,menuButton,clearContent,myContent};