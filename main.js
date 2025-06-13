
/*console.log('Hello World!');
  var i= 1;

document.querySelector('.nextbtn').onclick=()=>{
  var img=document.querySelector('.work');
  var srcs=[
    '1.jpg',
    '2.jpg',
    '3.jpg'
    ];
    console.log(srcs.length);
    for (var i = 0; i < 3;i++) {
      img.src = srcs[i];
    }
    
/*if (no<4) {
    var imgno=no++;
   
    }
   else if (no>4) {
     var no = 1;
   }
   console.log(img.src);
   console.log(i);
    
    
 /* if (no>4) {
var no=1;
  }

}
*/
//chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
document.querySelectorAll('.overlay-content a').forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});
function openNav() {
  document.querySelector(".dark-overlay").style.width = "100%";
}

function closeNav() {
  document.querySelector(".dark-overlay").style.width = "0%";
}





document.querySelector('.go').onclick=()=>{
//body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
var body=document.querySelector('.firstpage');
//body.innerText='hello';
body.scrollTop=body.scrollHeight;
console.log('working')
}

var bod=document.querySelector('body');
var totop=document.querySelector('.top');


window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
       // totop.style.transform="translateY(0vh)";
       totop.classList.add('bottom')
      }
      else {
       // totop.style.transform="translateY(-100vh)";
       totop.classList.remove('bottom')
       
      }
}
)
totop.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
const back1 = document.querySelector('.back1');
const back2 = document.querySelector('.back2');



/*window.addEventListener('scroll', () => {
 // if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    //back1.classList.add('activeback1');
    //back2.classList.add('activeback1')
    
 // }
var h=document.body.scrollHeight;
 var z=document.documentElement.scrollTop;
// h=10;

var rot=(z/h)*360;
 back1.style.transform='rotate('+rot+'deg)'
// alert('scrollll')
console.log(rot);
})
*/
function setContent(content) {
    const educationTab = document.querySelector('#education');
    const workTab = document.querySelector('#work');

    if (content === "work") {
        workTab.classList.add('active');
        educationTab.classList.remove('active');
    } 
    else if (content === "education") {
        educationTab.classList.add('active');
        workTab.classList.remove('active');
    }
    else {
        console.error("Unknown tab:", content);
    }
}