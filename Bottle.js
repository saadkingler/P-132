Status = "";
Bottle_image = "";

function preload()
{
    img = loadImage("Bottle.jpg")
}

function setup()
{
    canvas = createCanvas(640,290)
    canvas.center();
    Object_detector = ml5.objectDetector('cocossd',model_loaded);
    document.getElementById("Status").innerHTML = "Status: Detecting Objects";
}

function model_loaded()
{
    console.log("model loaded");
    Status = true;
    Object_detector.detect(Bottle_image,gotResults());
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
    }
}

function draw()
{
    image(Bottle_image,0,0,640,300)
}