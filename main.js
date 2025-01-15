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

document.querySelector('.go').onclick=()=>{
//body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
var body=document.querySelector('.firstpage');
//body.innerText='hello';
body.scrollTop=body.scrollHeight;
console.log('working')
}
function yh(){
}