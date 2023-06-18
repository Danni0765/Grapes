moustacheX=0;
moustacheY=0;
function preload(){
clown=loadImage('https://i.postimg.cc/9Mdr0LDP/heeheeheheheheheeeeeeeeee.jpg');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
image(video,0,0,300,300);
image(clown, moustacheX, moustacheY, 30,30);
}

function take_snapshot(){
save('MyJoke.png');
}

function  gotPoses(results){
if(results.length>0){
    console.log(results);
    moustacheX=results[0].pose.moustache.x-10;
    moustacheY=results[0].pose.moustache.y-10;
    console.log("moustache_x="+moustacheX);
    console.log("moustache_y="+moustacheY);
}   
}