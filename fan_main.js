img ="";
status_js ="";
objects = [];
function setup() { 
    canvas = createCanvas(640, 420);
    canvas.center();    
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = " status: detecting objects";
}
function preload() {
    img = loadImage("fan.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420 );
    if ( status_js != "")
    {
        for (i=0; i<objects.length; i++)
         {
         fill("#000000");
         confidence =floor ( objects[i].confidence*100);
         text(objects[i].label + " " + confidence + "%" , objects[i].x + 10 , objects[i].y + 10);
         noFill();
         stroke("#000000");
         rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);
         document.getElementById("status").innerHTML = "  Object detected";
    }}
}
function modelLoaded() {
    console.log("model is loaded by Aarohi");
    status_js = true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error)  {
        console.log(error);
    }
    console.log(results);
    objects = results;

}
