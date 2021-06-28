img = "";
 status = "";
 objectcoconut = [];
 astronautinocean = "";
function preload(){
  astronautinocean = loadSound("astronaut.mp3");
}

function setup(){
    canvas = createCanvas(500,420);
    canvas.position(420,210);
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("drdoom").innerHTML = "STATUS : object is being detected ";
}

function modelLoaded(){
    console.log("model has kept the name from cocossd to coconutssd");
    status = true;
    
}

function draw(){
    image(video , 0 ,0 , 500 , 420);
    
   /* fill("#ff0000");
    text("dog" , 30 , 70 );
    stroke("#ff0000");
    noFill();
    rect(25 , 60 , 350 , 350);
    fill("#0d00ff");
    stroke("#0d00ff");
    noFill();
    text("cat" , 250 , 70 );
    rect(240 , 60 , 350 , 350);*/
  if(status != ""){
      objectcoconut[i].label = person;
    objectDetector.detect(video , gotResult);
      for (i = 0; i < objectcoconut.length; i++) {
        document.getElementById("drdoom").innerHTML = "STATUS : person/baby is there";
          document.getElementById("drdoomreturns").innerHTML = "Number of objects detected : " + objectcoconut.length;
          r = random(255);
          g = random(255);
          b = random(255);
          fill(r,g,b);
          percent = floor(objectcoconut[i].confidence * 100);
          text(objectcoconut[i].label + " " + percent + "%" , objectcoconut[i].x , objectcoconut[i].y);
          stroke(r,g,b);
          noFill();
          rect(objectcoconut[i].x,objectcoconut[i].y,objectcoconut[i].width,objectcoconut[i].height);
      } }
      else{
        document.getElementById("drdoom").innerHTML = "STATUS : person/baby is not there!";
        astronautinocean.play();        
      }

    }


function gotResult(error , results){
if(error){
    console.log(error);
}
console.log(results);
objectcoconut = results ;   
}