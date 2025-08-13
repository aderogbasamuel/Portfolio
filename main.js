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





/*document.querySelector('.go').onclick=()=>{
//body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
var body=document.querySelector('.firstpage');
//body.innerText='hello';
body.scrollTop=body.scrollHeight;
console.log('working')
}
*/
var bod = document.querySelector('body');
var totop = document.querySelector('.top');


window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    // totop.style.transform="translateY(0vh)";
    totop.classList.add('bottom')
  }
  else {
    // totop.style.transform="translateY(-100vh)";
    totop.classList.remove('bottom')
    
  }
})
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

//<script>
// Theme Toggle

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});



// Project card animations
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
//  </script>


//keyboard js

window.addEventListener("DOMContentLoaded", () => {
  const c = new CopypasteKeyboard(".keyboard");
});

class CopypasteKeyboard {
  constructor(el) {
    this.el = document.querySelector(el);
    
    this.init();
  }
  get isMac() {
    return /(Mac|iP[ahno]+[de])/i.test(navigator.userAgent);
  }
  init() {
    window.addEventListener("keydown", this.keyAction.bind(this, true));
    window.addEventListener("keyup", this.keyAction.bind(this, false));
  }
  keyAction(down, e) {
    let { key } = e;
    const isCmd = key === "Meta" && this.isMac;
    const isCtrl = key === "Control" && !this.isMac; // for non-Apple only
    
    if (isCmd || isCtrl) key = "cmd";
    
    const keyEl = this.el?.querySelector(`[data-key="${key}"]`);
    const activeClass = "active";
    
    if (down === true) keyEl?.classList.add(activeClass);
    else keyEl?.classList.remove(activeClass);
  }
}






// Credit: @LukyVj
// https://twitter.com/LukyVj
// https://lucasbonomi.com






if (typeof window.CSS.registerProperty === 'function') {
  console.log('CSS.registerProperty supported 🎉')
  document.body.style.setProperty('--supported', 1);
  document.body.classList.add('registerProperty-supported')
} else {
  console.log('CSS.registerProperty not supported ❌')
  document.body.style.setProperty('--not-supported', 1);
  document.body.classList.add('registerProperty-not-supported')
}





const filterBtns = document.querySelectorAll('.work');
const galleryItems = document.querySelectorAll('.item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    galleryItems.forEach(item => {
      if (item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});