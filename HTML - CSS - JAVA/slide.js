let count = 1;
ducument.getElementById("radio1").checked = true

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;

    if(count>5){
        count = 1
    }

    ducument.getElementById("radio"+count).checked = true;
}