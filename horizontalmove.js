var count=0;

var reset = setInterval(animation,10);

function animation(){
    count++;
    if (count == 600){
        clearInterval(reset);
    }else{
        var target = document.getElementById("move");
        target.style.marginLeft = count + 'px';
        console.log("")
    }
    
}
