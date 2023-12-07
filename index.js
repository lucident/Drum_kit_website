var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("drums")[i].addEventListener "click", function() {
    var buttonInnerHtml = this.buttonInnerHtml;
   switch (buttonInnerHtml) {
    case "w":
        var audio = new Audio("sounds/kick-bass.mp3")
        break;
    case "a":
        
    default:
   }
}
}