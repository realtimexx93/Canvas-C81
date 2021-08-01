canvas = document.getElementById("myCanvas");
color= "orange";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 7;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
  
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =" + mouse_y);
    circle(mouse_x , mouse_y);

}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=7;
    ctx.arc(mouse_x, mouse_y, 90, 0, 2*Math.PI);
    ctx.stroke();

}