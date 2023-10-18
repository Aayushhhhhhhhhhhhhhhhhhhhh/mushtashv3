noseX = 0;
noseY = 0;

function preload(){
     mush = loadImage('https://i.postimg.cc/KzJGfpzv/download-removebg-preview-1.png ')
}
function setup(){
     canvas = createCanvas(350,350);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();
     poseNet = ml5.poseNet(video,modelLoaded)
     poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
     console.log('poseNet is inizialized');

}

function takesnapshot()
{
     save('bro.png')
}
 function gotPoses(results    )
 {
          if(results.length > 0 )
          {
               console.log(results);
               noseY = results[0].pose.nose.y;
               noseX = results[0].pose.nose.x;
               console.log("nose x  = "+noseX);
               console.log("nose y  = "+noseY);               
               console.log("nose x = " + results[0].pose.nose.x);
               console.log("nose y = " + results[0].pose.nose.y);

          }
 }

 function draw(){
     image(video,0,0,300,300);
     image(mush,noseX-10,noseY-12,50,50)

}