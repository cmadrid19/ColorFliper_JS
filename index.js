const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const colorHex = document.querySelector(".colorHex")
const colorRgb = document.querySelector(".colorRgb")

btn.addEventListener("click", function(){
    var randomColor = getRandomColor()
    console.log("Random color= " + randomColor + " - (" +hexToRGB(randomColor)+ ")")
    document.body.style.backgroundColor = randomColor;
    colorHex.textContent = randomColor;
    colorRgb.textContent = "(" + hexToRGB(randomColor) + ")";
})

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        var red = parseInt(result[1], 16);
        var green = parseInt(result[2], 16);
        var blue = parseInt(result[3], 16);
        return [red, green, blue]
    }
}


