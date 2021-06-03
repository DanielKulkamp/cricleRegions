const WIDTH = 600
const HEIGHT = 600
const CIRCLE_CENTER = [ WIDTH/2, HEIGHT/2 ]
const MARGIN = 5
const RADIUS = WIDTH/2 - MARGIN
const THICK_LINE = 5
const THIN_LINE = 2.5
const RED = "rgb(200, 0, 0)"
const BLUE = "rgb(0, 0, 200)"
const YELLOW = "rgb(200, 200, 0)"
const GREEN = "rgb(0, 200, 0)"
const BLACK = "rgb(0, 0, 0)"

const graph = {
    points: [],
    circle: {
        x_center: WIDTH/2,
        y_center: HEIGHT/2,
        radius: WIDTH/2 - MARGIN
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM completamente carregado e analisado")

    generatePoints(graph, 10)
    drawCircle(graph)
    drawPoints(graph)
    drawLines(graph)
})


const drawCircle = (_graph) => {
    let canvas = document.getElementById("cv")
    ctx = canvas.getContext("2d")
    ctx.strokeStyle = BLUE
    ctx.lineWidth = THICK_LINE;
    ctx.beginPath()
    ctx.arc(_graph.circle.x_center, _graph.circle.y_center, _graph.circle.radius, 0, Math.PI*2)
    ctx.closePath()
    ctx.stroke()
}

const drawPoints = (_graph) => {
    let canvas = document.getElementById("cv")
    ctx = canvas.getContext("2d")
    ctx.strokeStyle = YELLOW
    ctx.lineWidth = THIN_LINE
    
    _graph.points.forEach(element => {
        console.log(element)
        ctx.moveTo(element[0],element[1])
        ctx.beginPath()
        ctx.arc(element[0], element[1], 2, 0, Math.PI*2)
        ctx.closePath()
        ctx.stroke()
        
    });


}

const drawLines = (_graph) => {
    let canvas = document.getElementById("cv")
    ctx = canvas.getContext("2d")
    ctx.strokeStyle = BLACK
    ctx.lineWidth = THIN_LINE
    console.log("aaaarrrr")
    ctx.beginPath()
    for (i = 0; i<_graph.points.length-1; ++i){
        for (j = i+1; j<_graph.points.length; ++j ){

            let pi = _graph.points[i]
            let pj = _graph.points[j]
            ctx.moveTo(...pi)
            ctx.lineTo(...pj)
        }
    }
    ctx.stroke()
    ctx.closePath()
}

const generatePoints = (_graph, quantity) => {
    let angles = []
    for (i = 0; i<quantity; ++i){
        angles.push(i*Math.PI*2/quantity)
        //angles.push(Math.random()*Math.PI*2)
    }
   
    _graph.points = angles.map((val, index, arr)=> [
        Math.round(CIRCLE_CENTER[0]+RADIUS*Math.cos(val)),
        Math.round(CIRCLE_CENTER[1]+RADIUS*Math.sin(val))
    ])
    console.log( _graph.points )
    return points
}