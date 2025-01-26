

var nn = document.querySelectorAll(".drum").length;
for(var i =0; i< nn;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {   
          var bu = this.innerHTML;
          ms(bu);

});
} 


document.addEventListener("keypress",function(event) {
   ms(event.key);
;});

function ms(key){
     switch (key) {
          case "w":
               var aa = new Audio("sounds/crash.mp3");
                 aa.play();
               break;
          case "a":
               var bb = new Audio("sounds/tom-2.mp3");
               bb.play();
               break;
          case "s":
               var cc = new Audio("sounds/tom-1.mp3");
               cc.play();
               break;
          case "d":
               var dd = new Audio("sounds/tom-3.mp3");
               dd.play();
               break;
          case "j":
               var jj = new Audio("sounds/tom-4.mp3");
               jj.play();
               break;
          case "k":
               var kk = new Audio("sounds/tom-1.mp3");
               kk.play();
               break;
          case "l":
               var ll = new Audio("sounds/kick-bass.mp3");
               ll.play();
                break;
                              
          default: console.log(b);
               break;
}

}


















// var bb = document.querySelectorAll





 

// var ab = document.querySelectorAll(".set").length;
// for(var i=0;i<ab;i++){
//     document.querySelectorAll(".set")[i].addEventListener("click",on);
// }

