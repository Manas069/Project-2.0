/* ===================================
   FOREVER VAISHNAVI 🌸
   Premium Website Script
=================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },2000);

});





/* =========================
   MUSIC
========================= */


const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

let musicPlaying=false;


musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        music.play()
        .then(()=>{

            musicBtn.innerHTML="⏸️";
            musicPlaying=true;

        })
        .catch(error=>{

            console.log("Music error:",error);

        });

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

        musicPlaying=false;

    }

});







/* =========================
   LOVE TIMER
========================= */


const startDate =
new Date("October 10, 2025 00:00:00");



function updateTimer(){


const now=new Date();


const difference=
now-startDate;



const days=Math.floor(

difference/(1000*60*60*24)

);



const hours=Math.floor(

(difference/(1000*60*60))%24

);



const minutes=Math.floor(

(difference/(1000*60))%60

);



const seconds=Math.floor(

(difference/1000)%60

);



document.getElementById("timer").innerHTML=

`

❤️ ${days} Days

<br>

🌸 ${hours} Hours

<br>

💖 ${minutes} Minutes

<br>

✨ ${seconds} Seconds


`;

}



updateTimer();


setInterval(updateTimer,1000);







/* =========================
   START BUTTON
========================= */


document.querySelector(".startBtn")
.addEventListener("click",()=>{


document.querySelector(".story")
.scrollIntoView({

behavior:"smooth"

});


});








/* =========================
   SCROLL ANIMATION
========================= */


const observer=

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


}

);




document.querySelectorAll(

".timeline-card,.letter-box,.glass"

)
.forEach(item=>{


item.style.opacity="0";


item.style.transform=
"translateY(80px)";


item.style.transition=
"1s";


observer.observe(item);


});









/* =========================
   MOVING NO BUTTON
========================= */


const noBtn=
document.getElementById("noBtn");



function moveButton(){


const x=
Math.random()*250-125;


const y=
Math.random()*200-100;



noBtn.style.transform=

`
translate(${x}px,${y}px)
`;


}



noBtn.addEventListener(

"mouseenter",

moveButton

);



noBtn.addEventListener(

"touchstart",

moveButton

);









/* =========================
   YES BUTTON
========================= */


const yesBtn=
document.getElementById("yesBtn");



yesBtn.addEventListener("click",()=>{


document.querySelector(".proposal")
.style.display="none";



document.getElementById("success")
.style.display="flex";



document.getElementById("success")
.scrollIntoView({

behavior:"smooth"

});



celebrate();


});









/* =========================
   CELEBRATION
========================= */


function celebrate(){ 


   fireworks();


for(let i=0;i<100;i++){


const emojis = [
"❤️",
"💖",
"💕",
"💗",
"💓",
"💘"
];


const heart = document.createElement("div");


heart.className = "heart-particle";


heart.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];


heart.style.left =
Math.random()*100 + "vw";


heart.style.fontSize =
(20 + Math.random()*35) + "px";


heart.style.setProperty(
"--move",
(Math.random()*200-100)+"px"
);


heart.style.animationDuration =
(4 + Math.random()*5) + "s";


document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform=

`
translateY(-120vh)
rotate(720deg)
`;


heart.style.opacity="0";


},100);



setTimeout(()=>{


heart.remove();


},5000);



}


}






/* =========================
   CREATE PETALS
========================= */


function createPetal(){


const petal=
document.createElement("div");


petal.className="petal";


petal.style.left=
Math.random()*100+"vw";


petal.style.animationDuration=

(6+Math.random()*8)+"s";



document.querySelector(".petals")
.appendChild(petal);



setTimeout(()=>{


petal.remove();


},15000);


}



setInterval(createPetal,400);
/* ===========================
   FIREWORKS
=========================== */


function fireworks(){


for(let i=0;i<40;i++){


const spark=document.createElement("div");


spark.innerHTML="✨";


spark.style.position="fixed";

spark.style.left="50%";

spark.style.top="50%";


spark.style.fontSize="25px";

spark.style.zIndex="9999";


document.body.appendChild(spark);



const angle=
Math.random()*Math.PI*2;


const distance=
150+Math.random()*300;



setTimeout(()=>{


spark.style.transform=

`
translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)
scale(0);

`;

spark.style.opacity="0";


},50);



setTimeout(()=>{


spark.remove();


},2000);



}


}