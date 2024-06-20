import './style.css';
import { aboutButton,clearContent,myContent} from './index.js';

export function aboutSetup(){
    clearContent();
    myContent.style.background="#FFDE95";
    aboutButton.style.borderBottomColor="#FFDE95";
    aboutButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="visible";

    let aboutContainer=document.createElement("div");
    aboutContainer.classList.add("about");

    let aboutIntro=document.createElement("h2");
    let aboutContent1=document.createElement("p");
    let aboutContent2=document.createElement("p");
    let aboutContent3=document.createElement("p");
    let aboutContent4=document.createElement("p");
    let contactButtonContainer=document.createElement("div");
    let contactButton=document.createElement("button");
    let contactLink=document.createElement("a");

    aboutIntro.textContent="Thanks For Visiting A$D Modern Restaurant";
    aboutContent1.textContent="Our restaurant was established in 2003. We have been full filing customers needs for the past 20years with multiple regional awards for our services. Also we have two franchises in Africa as well as Europe, more over we are working day and night to expand globally so that the every one would enjoy our great products. Our greatest secret for all the success all this years is through hard work, persistance and our excellent employees who are working with their full potential."
    aboutContent2.textContent="You can contact us through the following email and phone number";
    aboutContent3.textContent="Email: AmanuelNaizghi93@gmail.com ModernA$D@yahoo.com";
    aboutContent4.textContent="Phone number: +1-354-4587-2587";
    contactLink.textContent="Contact Us";

    aboutContainer.appendChild(aboutIntro);
    aboutContainer.appendChild(aboutContent1);
    aboutContainer.appendChild(aboutContent2);
    aboutContainer.appendChild(aboutContent3);
    aboutContainer.appendChild(aboutContent4);
    contactButton.appendChild(contactLink);
    contactButtonContainer.appendChild(contactButton);
    aboutContainer.appendChild(contactButtonContainer);
    myContent.appendChild(aboutContainer);
//Used for creating a link that will direct you to send an email to the specified address
    contactLink.setAttribute('href','mailto:AmanuelNaizghi93@gmail.com');
}