nose_x = "";
nose_y = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
video.size(1000, 400);
video.parent("console"); 
cocomelon = ml5.poseNet(video, modelLoaded);
cocomelon.on('pose', gotResults);
}

function draw() {
	game()
}
function modelLoaded() {
	console.log("cocomelon is here !!!");
	
	
}
function gotResults(results) {
	if (results.length > 0 ) {
		console.log(results); 
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;
	}
	
	
}





