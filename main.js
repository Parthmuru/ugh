function preload(){

}

function setup(){
    canvas = createCanvas(550,550);
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas.position(650,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}