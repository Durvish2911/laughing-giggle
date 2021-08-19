 var nosex_blueteamstrongereveryday=0;
 var nosey_blueteamstrongereveryday=0;
 function preload(){
imgtblueteamstrongereveryday= loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose = ml5.poseNet(video , uploaded);
    pose.on('pose', gotpose);
}
function gotpose(results){
if(results.length >0){
    console.log(results);
    nosex_blueteamstrongereveryday =results[0].pose.nose.x-15;
    nosey_blueteamstrongereveryday =results[0].pose.nose.y-15;
}
}
function uploaded(){
console.log(" copy posenet is initialized over");
}
function draw(){
image(video,0,0,300,300);
image(imgtblueteamstrongereveryday,nosex_blueteamstrongereveryday,nosey_blueteamstrongereveryday,50,50);
}
function take_snapshot(){
    save("btn-dangerahhhhhh.png");
}