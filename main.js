canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_height=15;
car1_width=40;
car1_x=10;
car1_y=10;
car1_image="car1.png";

car2_height=15;
car2_width=40;
car2_x=10;
car2_y=30;
car2_image="car2.png";


canvas_background="racing.jpg";

function add(){
background_imgTag =new Image();
background_imgTag.onload= uploadbackground;
background_imgTag.src=canvas_background;

car1_imgTag =new Image();
car1_imgTag.onload= uploadcar1;
car1_imgTag.src=car1_image;

car2_imgTag =new Image();
car2_imgTag.onload= uploadcar2;
car2_imgTag.src=car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", myKeydown);


function myKeydown(e){
    keyPress=e.keyCode;

console.log(keyPress);

    if(keyPress=='38'){
        console.log("up");
        up();
     
    }

    if(keyPress=='40'){
        console.log("down");
        down();
      
    }

    if(keyPress=='37'){
        console.log("left");
        left();
      
    }

    if(keyPress=='87'){
        console.log("w-up");
        right();
     
    }

    if(keyPress=='65'){
        console.log("a-left");
        right();
     
    }

    if(keyPress=='83'){
        console.log("s-down");
        right();
     
    }

    if(keyPress=='68'){
        console.log("d-right");
        right();
     
    }

}