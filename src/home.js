import './style.css';
import { homeButton,myContent,clearContent } from './index.js';

export function homeSetup(){
    clearContent();//For clearing the previous content, so that home page's content will be created
    myContent.style.background="#FFDE95";
    homeButton.style.borderBottomColor="#FFDE95";
    homeButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="visible";

    let welcomeContainer=document.createElement("div");
    let hoursContainer=document.createElement("div");
    let locationContainer=document.createElement("div");

    welcomeContainer.classList.add("welcome");
    hoursContainer.classList.add("hours");
    locationContainer.classList.add("location");

    let welcomeIntro=document.createElement("h2");
    let welcomeContent=document.createElement("p");
    let hoursIntro=document.createElement("h2");
    let hoursContent1=document.createElement("p");
    let hoursContent2=document.createElement("p");
    let locationIntro=document.createElement("h2");
    let locationContent=document.createElement("p");

    welcomeIntro.textContent="Welcome To A$D Modern Restaurant";
    welcomeContent.textContent="We are here by to serve our customers with the city's most delicious fast foods. Make sure you enjoy every bite."
    hoursIntro.textContent="Working Hours";
    hoursContent1.textContent="Monday To Friday  ------ 8:00Am to 10:00Pm ";
    hoursContent2.textContent="Saturday & Sunday ------ 8:00Am to 2:30Am ";
    locationIntro.textContent="Our Location";
    locationContent.textContent="North East Carolina, West Side High Way,4867 Purple Street, Block 125";
    
    welcomeContainer.appendChild(welcomeIntro);
    welcomeContainer.appendChild(welcomeContent);
    hoursContainer.appendChild(hoursIntro);
    hoursContainer.appendChild(hoursContent1);
    hoursContainer.appendChild(hoursContent2);
    locationContainer.appendChild(locationIntro);
    locationContainer.appendChild(locationContent);

    myContent.appendChild(welcomeContainer);
    myContent.appendChild(hoursContainer);
    myContent.appendChild(locationContainer);

}


