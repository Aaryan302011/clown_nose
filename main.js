noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/K867HsF3/Clown-Nose-Download-PNG-Image.png')
  

}

function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded (){
    console.log('PoseNet is Initialized')
}

function draw(){
image(video, 0, 0, 300, 250)

image(clown_nose, noseX, noseY, 30, 30 );
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.Y;
        console.log("nose x = " + noseX)
        console.log("nose y = " + noseY)
      
    }
}