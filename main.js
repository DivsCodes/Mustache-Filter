noseX = 0;
noseY = 0;



function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/6QZWsX2m/pngegg.png")
}

function setup()
{
    canvas = createCanvas(700, 600);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    video.size(700, 600)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Loaded")
}

function gotPoses(results, error)
{
   if(error){
   console.log(error)}

   if (results.length > 0)
   {
    console.log(results)
    console.log(results[0].pose.nose.x)
    console.log(results[0].pose.nose.y)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("noseX = " + noseX)
    console.log("noseY = " + noseY)
   }

}

function draw()
{
    image(video, 0, 0, 700, 600)
    image(clown_nose, noseX-75, noseY-60, 150, 200)
}

function take_snapshot()
{
    save('Your Beautiful Face With Filter.png')
}