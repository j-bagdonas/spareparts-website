var buttonLeft = document.querySelector("#buttonLeft");
var buttonRight = document.querySelector("#buttonRight");
var song1 = document.querySelector("#song1");
var song2 = document.querySelector("#song2");
var song3 = document.querySelector("#song3");
var counter = 1;

buttonLeft.addEventListener("click", () => {
    if(counter > 1){
        counter --;
    } else {
        counter = 3;
    }
    switchSong(counter);
});
buttonRight.addEventListener("click", () => {
    if (counter < 3){
        counter ++;
    } else {
        counter = 1;
    }
    switchSong(counter);
});
function switchSong(counter){
    if (counter == 1){
        song1.style.display = "inline-block";
        song2.style.display = "none";
        song3.style.display = "none";
        counter = 2;
        return;
    } else if (counter == 2){
        song1.style.display = "none";
        song2.style.display = "inline-block";
        song3.style.display = "none";
        counter = 3;
        return;
    }else if (counter == 3){
        song1.style.display = "none";
        song2.style.display = "none";
        song3.style.display = "inline-block";
        counter = 1;
        return;
    } else {
        counter = 1;
    }
}



