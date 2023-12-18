var btn = document.querySelector(".btn")
var circle = document.querySelector(".circle2")
var ses = document.getElementById("ses")




btn.addEventListener("click", function(){
    btn.style.transform = "scale(0.8)";
    btn.style.transition = 'all 0s '
    circle.style.background = "yellow";
    circle.style.transition = "all 0.7s"

    ses.play();
    setTimeout(function(){
        btn.style.transform = "scale(1)";
        circle.style.background = "black";

    } ,400  )
})
