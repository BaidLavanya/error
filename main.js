canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

widthCar1 = 120;
heightCar1 = 70;
car1_Img = "car1.png";
car1_X = 10;
car1_Y = 10;

widthCar2 = 120;
heightCar2 = 70;
car2_Img = "car2.png";
car2_X = 10;
car2_Y = 100;

backgroundImg = "img.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backgroundImg;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1_Img;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_Img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, widthCar1, heightCar1);
}

function upload_car2() {
    ctx.drawImage(car2_imgTag, car2_X, car2_Y, widthCar2, heightCar2);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38")
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == "40")
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == "37")
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == "39")
    {
        car1_right();
        console.log("right arrow key");
    }

 
}
function my_keydown_car2(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
if(keyPressed == "87")
    {
        car2_up();
        console.log("key w");
    }

    if(keyPressed == "83")
    {
        car2_down();
        console.log("key s");
    }

    if(keyPressed == "65")
    {
        car2_left();
        console.log("key a");
    }

    if(keyPressed == "68")
    {
        car2_right();
        console.log("key d");
    }


function car1_up()
{
    if(car1_Y >=0)

    {
        car1_Y = car1_Y-10;
        console.log("When up arrow is pressed" + " X = " + car1_X + " Y = " + car1_Y);
        uploadBackground();
        upload_car1();
    }
}

function car1_down()
{
    if(car1_Y <=500)

    {
        car1_Y = car1_Y+10;
        console.log("When down arrow is pressed" + " X = " + car1_X + " Y = " + car1_Y);
        uploadBackground();
        upload_car1();
    }
}

function car1_left()
{
    if(car1_X >=0)

    {
        car1_X = car1_X-10;
        console.log("When left arrow is pressed" + " X = " + car1_X + " Y = " + car1_Y);
        uploadBackground();
        upload_car1();
    }
}

function car1_right()
{
    if(car1_X <=700)

    {
        car1_X = car1_X+10;
        console.log("When right arrow is pressed" + " X = " + car1_X + " Y = " + car1_Y);
        uploadBackground();
        upload_car1();
    }
}

function car2_up()
{
    if(car2_Y >=0)

    {
        car2_Y = car2_Y-10;
        console.log("When up arrow is pressed" + " X = " + car2_X + " Y = " + car2_Y);
        uploadBackground();
        upload_car2();
    }
}

function car2_down()
{
    if(car2_Y <=500)

    {
        car2_Y = car2_Y+10;
        console.log("When down arrow is pressed" + " X = " + car2_X + " Y = " + car2_Y);
        uploadBackground();
        upload_car2();
    }
}

function car2_left()
{
    if(car2_X >=0)

    {
        car2_X = car2_X-10;
        console.log("When left arrow is pressed" + " X = " + car2_X + " Y = " + car2_Y);
        uploadBackground();
        upload_car2();
    }
}

function car2_right()
{
    if(car2_X <=700)

    {
        car2_X = car2_X+10;
        console.log("When right arrow is pressed" + " X = " + car2_X + " Y = " + car2_Y);
        uploadBackground();
        upload_car2();
    }
}