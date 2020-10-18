var car1,car2,car3,car4;
var line1,line2,line3,line4;
var wall1,wall2,wall3,wall4;
var weight1,weight2,weight3,weight4,speed1,speed2,speed3,speed4;
var deformation1,deformation2,deformation3,deformation4;

function setup() {
  createCanvas(1600,600);

//Assign a value to speed and weight.
speed1 = random(55,90);
speed2 = random(55,90);
speed3 = random(55,90);
speed4 = random(55,90);

weight1 = random(400,1500);
weight2 = random(400,1500);
weight3 = random(400,1500);
weight4 = random(400,1500);

//calculate deformation 
deformation1 = (0.5*weight1*speed1*speed1)/22500;
deformation2 = (0.5*weight2*speed2*speed2)/22500;
deformation3 = (0.5*weight3*speed3*speed3)/22500;
deformation4 = (0.5*weight4*speed4*speed4)/22500;

//car sprites 
  car1 = new Sprite(100,400,50,10);
  car1.shapeColor = rgb(119,221,119);;

  car2 = new Sprite(100,300,50,10);
  car2.shapeColor = "yellow";

  car3 = new Sprite(100,200,50,10);
  car3.shapeColor = "orange";

  car4 = new Sprite(100,100,50,10);
  car4.shapeColor = "pink";

//line sprites
  line1 = new Sprite(0,450,1600,10);
  line1.shapeColor = "black";

  line2 = new Sprite(0,350,1600,10);
  line2.shapeColor = "black";

  line3 = new Sprite(0,250,1600,10);
  line3.shapeColor = "black"

  line4 = new Sprite(0,150,1600,10);
  line4.shapeColor = "black";

  line5 = new Sprite(0,50,1600,10);
  line5.shapeColor = "black";

//wall sprites
  wall1 = new Sprite(1500,380,30,50);
  wall1.shapeColor = "pink";

  wall2 = new Sprite(1500,280,30,50);
  wall2.shapeColor = "orange";

  wall3 = new Sprite(1500,180,30,50);
  wall3.shapeColor = "yellow";

  wall4 = new Sprite(1500,80,30,50);              

  wall4.shapeColor = rgb(119,221,119);

  //assign the cars a velocity 
  car1.vx = speed1;
  car2.vx = speed2;
  car3.vx = speed3;
  car4.vx = speed4;
}

function draw() {
  background(255,255,255); 

 if (wall1.isTouching(car1)){
   car1.vx = 0;
    if(deformation1>180){
      car1.shapeColor = "green";
    }
    if(deformation1<=180 && deformation1>=80){
      car1.shapeColor = "yellow";
    }
    if(deformation1<80){
      car1.shapeColor = "red";
    }
  }

  if (wall2.isTouching(car2)){
    car2.vx = 0;
     if(deformation2>180){
       car2.shapeColor = "green";
     }
     if(deformation2<=180 && deformation2>=80){
       car2.shapeColor = "yellow";
     }
     if(deformation2<80){
       car2.shapeColor = "red";
     }
   }

   if (wall3.isTouching(car3)){
    car3.vx = 0;
     if(deformation3>180){
       car3.shapeColor = "green";
     }
     if(deformation3<=180 && deformation3>=80){
       car3.shapeColor = "yellow";
     }
     if(deformation3<80){
       car3.shapeColor = "red";
     }
   }

   if (wall4.isTouching(car4)){
    car4.vx = 0;
     if(deformation4>180){
       car4.shapeColor = "green";
     }
     if(deformation4<=180 && deformation4>=80){
       car4.shapeColor = "yellow";
     }
     if(deformation4<80){
       car4.shapeColor = "red";
     }
   }

  car1.display(); 
  car2.display();
  car3.display();
  car4.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();

  drawSprites();
}