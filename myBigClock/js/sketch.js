// in this sketch we're going to turn the camera image into a pixellated mosaic

// the shader variable
let camShader;

// the camera variable
let cam;

function preload(){
  // load the shader
  camShader = loadShader('effect.vert', 'effect.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  // initialize the webcam at the window size
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);

  // hide the html element that createCapture adds to the screen
  cam.hide();
}

function draw() {  
  // shader() sets the active shader with our shader
  shader(camShader);

  // lets just send the cam to our shader as a uniform
  camShader.setUniform('tex0', cam);

  // calculate the tiles based on the mouse X position
  let tiles = map(mouseX, 0, width, 5, 50);

  // send the tiles value to the shader
  camShader.setUniform('tiles', tiles);

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
