var num = document.querySelectorAll("button").length;
for(var i=0;i<num;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function handleclick(){
        var buttoninnerhtml = this.innerHTML;
        sound(buttoninnerhtml);
    
    });
}
document.addEventListener("keypress",function(event){
        sound(event.key);
});
function sound(key){
        switch(key){
                case "W": var tom = new Audio("sounds/tom-1.mp3");
                        tom.play();
                        break;
                case "A": var sound2 = new Audio("sounds/tom-2.mp3");
                        sound2.play();
                        break;
                case "S": var sound3 = new Audio("sounds/tom-3.mp3");
                        sound3.play();
                        break;  
                case "D": var sound4 = new Audio("sounds/tom-4.mp3");
                        sound4.play();
                        break;    
                case "J": var sound5 = new Audio("sounds/snare.mp3");
                        sound5.play();
                        break;
                case "K": var sound6 = new Audio("sounds/crash.mp3");
                        sound6.play();
                        break;  
                case "L": var sound7 = new Audio("sounds/kick-bass.mp3");
                        sound7.play();
                        break;    
                default: 
                        break;          
              }
}
