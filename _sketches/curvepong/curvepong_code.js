// Paddle properties
var paddle_w = 10;  // width
var paddle_h_ratio = 0.20;  // height
var paddle_x_ratio = 0.0625;  // horizontal position (how close paddle is to the goal)
var paddle_speed_ratio = 0.02;

// Ball properties
var ball_r = 5;  // radius
var ball_vx_start_ratio = 0.4;  // starting velocity

// Physics properties
var friction = 1;  // How much of paddle velocity is inherited by ball upon collision
var spin_factor = 0.5;  // How much of paddle velocity is converted to spin
var spin_boost_wall = 5;  // When ball hits a wall, velocity is increased depending on the amount of spin
var spin_decay_paddle = 0.75;  // Spin is multiplied by this value when the ball hits a paddle
var spin_decay_wall = 0.5;  // Spin is multiplied by this value when the ball hits a wall
var spin_decay_time = 1;  // Set less than 1 to make spin decrease over time

var ai_control_factor = 0.1;  // How well the AI controls the paddle. Higher number means more snappy control.

// Render properties
var w_max = 800;
var aspect = 1.6;

var fps = 60;

var bg_color = "#000000";
var fg_color = "#FFFFFF";

var score_text_size = 32;
var score_text_pos_x_rel = 0.5;
var score_text_pos_y_rel = 0.1;

var rally_text_size = 32;
var rally_text_pos_x_rel = 0.5;
var rally_text_pos_y_rel = 0.9;

var canvasDiv;

class Game {
    constructor(w) {
        this.resize(w)
    }

    resize(w){
        var h = w/aspect;
        if(h > displayHeight * 0.75){
            h = displayHeight * 0.75;
            w = h * aspect;
        }
        resizeCanvas(w, h);

        //Player 1 parameters
        this.x1 = paddle_x_ratio * w;
        this.y1 = h / 2;
        this.v1 = 0;
        //Player 2 parameters
        this.x2 = w - paddle_x_ratio * w;
        this.y2 = h / 2;
        this.v2 = 0;
        //Ball parameters
        this.bx = w / 2;
        this.by = h / 2;
        this.bvx = 0;
        this.bvy = 0;
        this.spin = 0;
        // Paddle parameters
        this.paddle_h = h * paddle_h_ratio;
        //Game parameters
        this.score1 = 0;
        this.score2 = 0;
        this.rally_count = 0;
        //Render parameters
        this.w = w;
        this.h = h;
    }

    reset() {
        this.score1 = 0;
        this.score2 = 0;
        this.rally_count = 0;
        this.start();
    }

    start() {
        // Place ball in center
        this.bx = this.w / 2;
        this.by = this.h / 2;
        // Launch ball in random direction at start
        this.bvx = this.w * ball_vx_start_ratio * (1 - 2 * Math.round(random(0, 1)));
        this.bvy = this.bvx * (random() * 2 - 1);

        // Initialize state variables
        this.rally_count = 0;
        this.spin = 0;
    }

    update(v1, v2, dt) {
        //Update ball
        this.bx += this.bvx * dt;
        this.by += this.bvy * dt;
        if (this.bvx > 0) {
            this.bvy -= this.spin * spin_factor;
        } else {
            this.bvy += this.spin * spin_factor;
        }
        this.spin *= spin_decay_time;

        //Update paddle velocities
        this.v1 = v1;
        this.v2 = v2;

        //Update paddle positions
        this.y1 += this.v1;
        this.y2 += this.v2;
        if (this.y1 - this.paddle_h / 2 < 0) {
            this.y1 = this.paddle_h / 2;
            this.v1 = 0;
        } else if (this.y1 + this.paddle_h / 2 > this.h) {
            this.y1 = this.h - this.paddle_h / 2;
            this.v1 = 0;
        }
        if (this.y2 - this.paddle_h / 2 < 0) {
            this.y2 = this.paddle_h / 2;
            this.v2 = 0;
        } else if (this.y2 + this.paddle_h / 2 > 0 + this.h) {
            this.y2 = this.h - this.paddle_h / 2;
            this.v2 = 0;
        }

        //Top and bottom collision
        if (((this.by - ball_r < 0) && (this.bvy < 0)) ||
            ((this.by + ball_r > this.h) && (this.bvy > 0))) {
            this.bvy *= -1;
            this.bvy += this.spin;
            if (this.bvx > 0) {
                this.bvx += Math.abs(this.spin) * spin_boost_wall;
            } else {
                this.bvx -= Math.abs(this.spin) * spin_boost_wall;
            }
            this.spin *= spin_decay_wall;
        }

        // Left collision
        if ((this.bx - ball_r < paddle_x_ratio * this.w + paddle_w / 2) &&
            (this.bx > paddle_x_ratio * this.w)) {
            if ((this.by + ball_r >= this.y1 - this.paddle_h / 2) &&
                (this.by - ball_r <= this.y1 + this.paddle_h / 2) && (this.bvx < 0)) {
                    this.processCollide(true);
            }
        }

        // Right collision
        else if (this.bx + ball_r > this.w - paddle_x_ratio * this.w - paddle_w / 2 &&
            this.bx < this.w - paddle_x_ratio * this.w) {
            if (this.by + ball_r >= this.y2 - this.paddle_h / 2 &&
                this.by - ball_r <= this.y2 + this.paddle_h / 2 && this.bvx > 0) {
                    this.processCollide(false)
            }
        }

        // Check scoring
        if (this.bx < 0) {
            this.score2 += 1
            this.start();
        }
        else if (this.bx > this.w) {
            this.score1 += 1;
            this.start();
        }

        rect(this.bx - ball_r, this.by - ball_r, ball_r * 2, ball_r * 2);
        rect(this.x1 - paddle_w / 2, this.y1 - this.paddle_h / 2, paddle_w, this.paddle_h);
        rect(this.x2 - paddle_w / 2, this.y2 - this.paddle_h / 2, paddle_w, this.paddle_h);
        textAlign(CENTER);
        textSize(score_text_size);
        text(this.score1 + " : " + this.score2, this.w * score_text_pos_x_rel, this.h * score_text_pos_y_rel);
        textSize(rally_text_size);
        text(this.rally_count, this.w * rally_text_pos_x_rel, this.h * rally_text_pos_y_rel);
    }

    processCollide(is_p1){
        this.bvx *= -1;
        this.spin *= spin_decay_paddle;
        if(is_p1){
            this.spin -= this.v1;
            this.bvy += this.v1 * friction;
        }
        else{
            this.spin -= this.v2;
            this.bvy += this.v2 * friction;
        }
        this.rally_count += 1;
    }
}

var game;
function setup() {
    canvasDiv = document.getElementById('sketch-holder');
    w = canvasDiv.offsetWidth;
    frameRate(fps);
    fill(fg_color);
    stroke(fg_color);
    background(bg_color)
    game = new Game(w);
    game.start();
    createCanvas(game.w, game.h).parent("sketch-holder");
}

// Rendering and Inputs
var c;
var vel1 = 0;
var vel2 = 0;
var p1u = false;  // player one up key down
var p1d = false;  // player one down key down
var p2u = false;  // player two up key down
var p2d = false;  // player two down key down
var do_ai = true;  // whether to control player 2 with AI. Automatically disables if player two inputs are pressed.
var do_touch = false;  // Whether to use touch inputs. Automatically disables keyboard controls when touchscreen activated.
var do_reset = false;
var z = 0;

function draw() {
    if (do_reset){
        game.reset();
        do_reset = false;
    }

	  // Color background based on spin
    var spin_color_factor = Math.min(Math.abs(game.spin) / 50, 1);
    if (game.spin > 0) {
        c = [spin_color_factor * 255, 0, 0, 50];
    }
    else {
        c = [0, 0, spin_color_factor * 255, 50];
    }
    background(c);
    
	  // Process inputs
	vel1 = 0;
    vel2 = 0;
    if (p1u) {
        vel1 = -paddle_speed_ratio * game.h;
    }
    else if (p1d) {
        vel1 = paddle_speed_ratio * game.h;
    }
    if (p2u) {
        vel2 = -paddle_speed_ratio * game.h;
        do_ai = false;
    }
    else if (p2d) {
        vel2 = paddle_speed_ratio * game.h;
        do_ai = false;
    }
    if(touches.length > 2){
        game.reset();
    }
    for (let touch of touches){
        if(touch.x < game.w/2){ // Left side
            vel1 += (touch.y - game.y1) * 0.5;
        }
        else{ // Right side
            do_ai = false;
            vel2 += (touch.y - game.y2) * 0.5;
        }
    }

    if (do_ai) {
        vel2 += (game.by - game.y2) * game.h/500 * ai_control_factor;
    }

    game.update(vel1, vel2, 1 / fps);
}

function keyPressed() {
    if (keyCode == 87) { // w
        p1u = true;
    } else if (keyCode == 83) { // s
        p1d = true;
    }
    if (keyCode == 73) { // i
        p2u = true;
    } else if (keyCode == 75) { // k
        p2d = true;
    }
    if (keyCode == 13) // enter
    {
        do_reset = true;
    }
}

function keyReleased() {
    if (keyCode === 87) {
        p1u = false;
    } else if (keyCode === 83) {
        p1d = false;
    }
    if (keyCode == 73) {
        p2u = false;
    } else if (keyCode == 75) {
        p2d = false;
    }
}

function windowResized() {
    var width = canvasDiv.offsetWidth;
    game.resize(width);
    game.reset();
}