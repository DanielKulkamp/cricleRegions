document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM completamente carregado e analisado");
    let canvas = document.getElementById("cv")
    ctx = canvas.getContext("2d")
    ctx.fillStyle = "rgb(200, 0, 0)"
    ctx.strokeStyle = "rgb(0,0,200)"
    ctx.moveTo(100,0)
    ctx.beginPath()
    ctx.arc(100,100, 100, 100 , 2*Math.PI, true)
    ctx.closePath()
    ctx.stroke()
})