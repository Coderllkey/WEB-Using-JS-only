let Div = document.createElement("div");
let Body =  document.body;
let CSS = Div.style;
let Content = document.createElement("div");
let Footer = document.createElement("div");
let startBtn = document.createElement("button");

// First DIV section 
 function start(){
 startBtn.remove();
    Body.appendChild(Div);
Div.classList.add("Container");
Div.textContent = "THE JS PROJECT";
CSS.width = "100%";
CSS.backgroundColor = "orange";
CSS.height = "15vh";
CSS.textAlign = "center";
CSS.fontSize = "40px";
CSS.color = "white"; 

// Contents 

Body.appendChild(Content);
 let section1 = document.createElement("div");
 let section2 = document.createElement("div");
 let section3 = document.createElement("div");

   Content.style.display = "flex";
   Content.appendChild(section1 );
   Content.appendChild(section2 );
   Content.appendChild(section3 );


   section1.style.height = "70vh";
   section1.style.backgroundColor = "lightblue";
   section1.style.width = "100%";



      //inside section 1 

           //button
                let button = document.createElement("button");
                section1.appendChild(button);
                button.textContent = "Click Me to Change Theme";
                button.addEventListener('mouseover', _=>{
                    button.style.backgroundColor = "black";
                    button.style.color = "white";
                })
                button.addEventListener('mouseout', _=>{
                    button.style.backgroundColor = "white";
                    button.style.color = "black";
                })
                button.style.width = "100%";      
                button.style.height = "10%";
                button.addEventListener('click', _=>{
                if (section1.style.backgroundColor == "lightblue"){
                    section1.style.backgroundColor = "black";
                    section1.style.color = "white";
                }else{
                    section1.style.backgroundColor = "lightblue";
                    section1.style.color = "black";

                }
                })
            //title
                 let Title = document.createElement("div");
                 section1.appendChild(Title);
                 Title.textContent = "HELLO";
                 Title.style.height = "10%";
                 Title.style.textAlign = "center";
                 Title.style.fontSize = "2rem";
            //s1content
                 let s1content = document.createElement("div");
                 section1.appendChild(s1content);
                 s1content.textContent = "Welcome to my website, crafted entirely using JavaScript( DOM only ). With a focus on interactivity and dynamic content, JavaScript allows me to create engaging web experiences.  Every aspect of this site showcases the power and versatility of JavaScript. Get ready to explore a world of interactive features and discover the possibilities of modern web development. ";
                 s1content.style.height = "60%";
                 s1content.style.fontSize = "1.2rem";
                 s1content.style.textAlign = "justify";
            //s1footer
                let s1footer = document.createElement("div");
                section1.appendChild(s1footer);
                s1footer.textContent = " Enjoy your visit!";
                s1footer.style.height = "20%";
                s1footer.style.fontSize = "1.2rem";
                s1footer.style.textAlign = "center";
                    
                 
                 



//    section2.textContent = "asdf";

//        //inside section 2
       
//    section3.textContent = "asdf";



//    section2.style.height = "70vh";
//    section2.style.backgroundColor = "lightgreen";
//    section2.style.width = "33.33%";

//    section3.style.height = "70vh";
//    section3.style.backgroundColor = "skyblue";
//    section3.style.width = "33.33%";

   
// Footer 
Body.appendChild(Footer);
Footer.textContent = " Made by Amuan Only Using JS";
Footer.style.backgroundColor = "lightgray";
Footer.style.height = "15vh";
Footer.style.textAlign = "center";
Footer.style.fontSize = "1.5rem";



 }



 Body.appendChild(startBtn);
 startBtn.style.width= "20%";
 startBtn.textContent = "Generate the WEBSite";
 startBtn.style.height = "40px";
 startBtn.addEventListener("click",start);