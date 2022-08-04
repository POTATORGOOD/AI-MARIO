function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas1');

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults);

	instializeInSetup(mario);
}

function modelLoaded() {
	console.log("Model has been loaded");
}

function gotResults(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("nose X = " + noseX + "nose Y = " + noseY);
	}
}

function draw() {
	game()
}






