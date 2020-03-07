var requestAnimationFrame = (function () {
    return  window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (retun) {
            window.setTimeout(retun, 1000 / 60);
        };
})();
//Keyboard
function Key_status() {
	this.down = false;
	this.press = false;
}

var Keyboard = {

};
Keyboard.init = function() {
  Keyboard.key_status = [];
    for(var i=0; i<256; ++i)
       this.key_status.push(new Key_status());
       document.onkeydown = Keyboard.key_down;
       document.onkeyup = Keyboard.key_up;
}
Keyboard.key_down = function(e) {
    var key_code = e.keyCode;
    if(key_code<0 || key_code>255)
        return;
    if(!Keyboard.key_status[key_code].down)
        Keyboard.key_status[key_code].press = true;
    Keyboard.key_status[key_code].down = true;
}
Keyboard.key_up = function(e) {
    var key_code = e.keyCode;
    if (key_code<0 || key_code>255)
        return;
    Keyboard.key_status[key_code].down = false;
}
Keyboard.reset = function() {
  for(var i=0; i<256; ++i)
	this.key_status[i].press = false;
};

//Mouse
var Mouse = {
 position : {x:0, y:0},
 left : false,
 right : false,
 middle : false
};
Mouse.init = function(e) {
 document.onmousemove = Mouse.is_moving;
 document.onmousedown = Mouse.is_down;
 document.onmouseup = Mouse.is_up;
}

Mouse.is_moving = function(e){
 var c_scale = Canvas.scale();
 var c_offset = Canvas.offset();
 var mx = (e.pageX - c_offset.x) /  c_scale.x;
 var my = (e.pageY - c_offset.y) / c_scale.y;
 Mouse.position.x = mx;
 Mouse.position.y = my;
}

Mouse.is_down = function(e) {
Mouse.is_moving(e);
  if (e.which === 1) 
        Mouse.left = true;
  else if (e.which === 2) 
        Mouse.middle = true;
  else if (e.which === 3) 
        Mouse.right = true;
}

Mouse.is_up = function(e) {
Mouse.is_moving(e);
    if (e.which === 1)
  if (e.which === 1) 
        Mouse.left = false;
  else if (e.which === 2) 
        Mouse.middle = false;
  else if (e.which === 3) 
        Mouse.right = false;
    }








//Loading Sprites
var Sprites = {
	sprites_loading : 0
};

Sprites.load_sprite = function(img) {
   var image = new Image();
   image.src = img;
   Sprites.sprites_loading +=1;
   image.onload = function() {
     Sprites.sprites_loading -= 1;
   };
  return image;
};

Sprites.load = function() {
    Sprites.background = Sprites.load_sprite("images/bg.jpg");
    Sprites.bgu = Sprites.load_sprite("images/bgu2.png");
    Sprites.tile = Sprites.load_sprite("images/big_tile.png");
    Sprites.tile1 = Sprites.load_sprite("images/tile1.png");
    Sprites.tile2 = Sprites.load_sprite("images/tile2.png");
    Sprites.tile3 = Sprites.load_sprite("images/tile3.png");
    Sprites.tile4 = Sprites.load_sprite("images/tile4.png");
    Sprites.tile5 = Sprites.load_sprite("images/tile5.png");
    Sprites.tile6 = Sprites.load_sprite("images/tile6.png");
    Sprites.tile7 = Sprites.load_sprite("images/tile7.png");
    Sprites.tile8 = Sprites.load_sprite("images/tile8.png");
    Sprites.tile9 = Sprites.load_sprite("images/tile9.png");
    Sprites.tile10 = Sprites.load_sprite("images/tile10.png");
    Sprites.tile11 = Sprites.load_sprite("images/tile11.png");
    Sprites.tile12 = Sprites.load_sprite("images/tile12.png");
    Sprites.tile13 = Sprites.load_sprite("images/tile13.png");
    Sprites.tile14 = Sprites.load_sprite("images/tile14.png");
    Sprites.tile15 = Sprites.load_sprite("images/tile15.png");
    Sprites.tile16 = Sprites.load_sprite("images/tile16.png");
    Sprites.tile17 = Sprites.load_sprite("images/tile17.png");
    Sprites.tile18 = Sprites.load_sprite("images/tile18.png");
    Sprites.tile19 = Sprites.load_sprite("images/tile19.png");
    Sprites.tile20 = Sprites.load_sprite("images/tile20.png");
    Sprites.tile21 = Sprites.load_sprite("images/tile21.png");
    Sprites.tile22 = Sprites.load_sprite("images/tile22.png");
    Sprites.tile23 = Sprites.load_sprite("images/tile23.png");
    Sprites.tile24 = Sprites.load_sprite("images/tile24.png");
    Sprites.tile25 = Sprites.load_sprite("images/tile25.png");
    Sprites.tile26 = Sprites.load_sprite("images/tile26.png");
    Sprites.tile27 = Sprites.load_sprite("images/tile27.png");
    Sprites.tile28 = Sprites.load_sprite("images/tile28.png");

    Sprites.tile30 = Sprites.load_sprite("images/tile30.png");
    Sprites.tile31 = Sprites.load_sprite("images/tile31.png");
    Sprites.tile32 = Sprites.load_sprite("images/tile32.png");
    Sprites.tile33 = Sprites.load_sprite("images/tile33.png");
    Sprites.coin = Sprites.load_sprite("images/coin.png");
    Sprites.char = Sprites.load_sprite("images/char.png");
    Sprites.home = Sprites.load_sprite("images/home.png");
    Sprites.anim = Sprites.load_sprite("images/char_run.png");
    Sprites.jump = Sprites.load_sprite("images/char_jump.png");
    Sprites.hill = Sprites.load_sprite("images/hill.png");
    Sprites.grass = Sprites.load_sprite("images/grass.png");
    Sprites.trees = Sprites.load_sprite("images/small_tree.png");
    Sprites.cloud = Sprites.load_sprite("images/cloud.png");
    Sprites.cloud2 = Sprites.load_sprite("images/cloud2.png");
    Sprites.back = Sprites.load_sprite("images/back2.png");
    Sprites.secondsleft = Sprites.load_sprite("images/secondsleft.png");
    Sprites.coinsleft = Sprites.load_sprite("images/coinsleft.png");
    Sprites.livesleft = Sprites.load_sprite("images/livesleft.png");
    Sprites.youlost = Sprites.load_sprite("images/youlost.png");
    Sprites.youwon = Sprites.load_sprite("images/youwon.png");
    Sprites.enemy_walk = Sprites.load_sprite("images/enemy_walk.png");

    Sprites.sharp = Sprites.load_sprite("images/sharp.png");
    Sprites.sharp2 = Sprites.load_sprite("images/sharp2.png");
    Sprites.sharp3 = Sprites.load_sprite("images/sharp3.png");
    Sprites.sharp4 = Sprites.load_sprite("images/sharp4.png");
};


Sprites.load_loop = function() {
 if(Sprites.sprites_loading > 0)
    window.requestAnimationFrame(Sprites.load_loop);
 else
   Game.init();
};






//Canvas
var Canvas = {
	canvas : undefined,
	canvas_div : undefined,
	canvas_ctx : undefined,
	canvas_offset : {x : 0 , y : 0},
	canvas_scale : {x : 0 , y : 0}
};

Canvas.offset = function(){
  return this.canvas_offset;
}

Canvas.scale = function(){
  this.canvas_scale.x = this.canvas.width /Game.size.x;
  this.canvas_scale.y = this.canvas.height /Game.size.y;
  return this.canvas_scale;
}


Canvas.init = function(canvasid, divid) {
	Canvas.canvas = document.getElementById(canvasid);
	Canvas.canvas_div = document.getElementById(divid);
	Canvas.canvas_ctx = Canvas.canvas.getContext('2d');
	window.onresize = Canvas.re_size;
	Canvas.re_size();
};

Canvas.re_size = function(){
	var game_div = Canvas.canvas_div;
	var game_canvas = Canvas.canvas;
	var game_ratio = Game.size.x/Game.size.y;
	var cur_width = window.innerWidth;
	var cur_height = window.innerHeight;
	var cur_ratio = cur_width / cur_height;

    if (cur_ratio > game_ratio)
       cur_width = cur_height * game_ratio;
    else 
       cur_height = cur_width / game_ratio;
    gamediv.style.width = cur_width + 'px';
    gamediv.style.height = cur_height + 'px';
    gamediv.style.marginTop = (window.innerHeight - cur_height) / 2 + 'px';
    gamediv.style.marginRight = (window.innerWidth - cur_width) / 2 + 'px';
    gamediv.style.marginBottom = (window.innerHeight - cur_height) / 2 + 'px';
    gamediv.style.marginLeft = (window.innerWidth - cur_width) / 2 + 'px';

    game_canvas.width = cur_width;
    game_canvas.height = cur_height;

    var offset = {x:0, y:0};
    if(game_canvas.offsetParent) {
	do {
		offset.x += game_canvas.offsetLeft;
		offset.y += game_canvas.offsetTop;
	   } while((game_canvas = game_canvas.offsetParent));
	}
	Canvas.canvas_offset = offset;
	
};

Canvas.clear = function () {
    Canvas.canvas_ctx.clearRect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
};

Canvas.draw = function(sprite,position,w,flip,anim) {
if(flip === 1){
    Canvas.canvas_ctx.save();
    Canvas.canvas_ctx.scale((this.canvas.width/Game.size.x)*-1 , (this.canvas.height/Game.size.y));
    Canvas.canvas_ctx.translate(-position.x-w, position.y);
if(anim != undefined)
    Canvas.canvas_ctx.drawImage(sprite, anim.x, anim.y, w, sprite.height, 0, 0, w, sprite.height);
else
    Canvas.canvas_ctx.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
    Canvas.canvas_ctx.restore();
}
else {
    Canvas.canvas_ctx.save();
    Canvas.canvas_ctx.scale((this.canvas.width/Game.size.x) , this.canvas.height/Game.size.y);
    Canvas.canvas_ctx.translate(position.x, position.y);
if(anim != undefined)
    Canvas.canvas_ctx.drawImage(sprite, anim.x, anim.y, w, sprite.height, 0, 0, w, sprite.height);
else
    Canvas.canvas_ctx.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
    Canvas.canvas_ctx.restore();
}
};





Canvas.draw_text = function(text,position, color, fontname, fontsize) {
    Canvas.canvas_ctx.save();
    Canvas.canvas_ctx.scale((this.canvas.width/Game.size.x) , this.canvas.height/Game.size.y);
    Canvas.canvas_ctx.translate(position.x, position.y);
    Canvas.canvas_ctx.font = fontsize + " " + fontname;
    Canvas.canvas_ctx.fillStyle = color.toString();
    Canvas.canvas_ctx.fillText(text, 0, 0);
    Canvas.canvas_ctx.restore();
};





//TileSet
function TileSet() {
};

TileSet.prototype.init = function(x,y,a,d,m) {
    this.position = {x:x, y:y};
    this.on_ground = false;
    this.n = a.length;
    this.ar = a;
    this.new_width = 0;
    this.new_height = 0;
    this.d = d;
    this.mov = m;
    this.x1 = this.position.x;
    this.x2 = this.position.y+m;
    this.movd = false;
    this.vx = undefined;
    this.vy = undefined;
    this.comb_h_w = undefined;
    this.comb_h_h = undefined;
    this.overlapX = undefined;
    this.overlapY = undefined;
for(var i=0;i<this.n;i++)
   {
        if(this.ar[i] === 1)
            this.sprite = Sprites.tile1;
	if(this.ar[i] === 2)
	    this.sprite = Sprites.tile2;
	if(this.ar[i] === 3)
	    this.sprite = Sprites.tile3;
	if(this.ar[i] === 4)
	    this.sprite = Sprites.tile4;
	if(this.ar[i] === 5)
	    this.sprite = Sprites.tile5;
	if(this.ar[i] === 6)
	    this.sprite = Sprites.tile6;
	if(this.ar[i] === 7)
	    this.sprite = Sprites.tile7;
	if(this.ar[i] === 8)
	    this.sprite = Sprites.tile8;
	if(this.ar[i] === 9)
	    this.sprite = Sprites.tile9;
	if(this.ar[i] === 10)
	    this.sprite = Sprites.tile10;
	if(this.ar[i] === 11)
	    this.sprite = Sprites.tile11;
	if(this.ar[i] === 12)
	    this.sprite = Sprites.tile12;
	if(this.ar[i] === 13)
	    this.sprite = Sprites.tile13;
	if(this.ar[i] === 14)
	    this.sprite = Sprites.tile14;
	if(this.ar[i] === 15)
	    this.sprite = Sprites.tile15;
	if(this.ar[i] === 16)
	    this.sprite = Sprites.tile16;
	if(this.ar[i] === 17)
	    this.sprite = Sprites.tile17;
	if(this.ar[i] === 18)
	    this.sprite = Sprites.tile18;
	if(this.ar[i] === 19)
	    this.sprite = Sprites.tile19;
	if(this.ar[i] === 20)
	    this.sprite = Sprites.tile20;
	if(this.ar[i] === 21)
	    this.sprite = Sprites.tile21;
	if(this.ar[i] === 22)
	    this.sprite = Sprites.tile22;
	if(this.ar[i] === 23)
	    this.sprite = Sprites.tile23;
	if(this.ar[i] === 24)
	    this.sprite = Sprites.tile24;
	if(this.ar[i] === 25)
	    this.sprite = Sprites.tile25;
	if(this.ar[i] === 26)
	    this.sprite = Sprites.tile26;
	if(this.ar[i] === 27)
	    this.sprite = Sprites.tile27;
	if(this.ar[i] === 28)
	    this.sprite = Sprites.tile28;
	if(this.ar[i] === 29)
	    this.sprite = Sprites.tile29;
	if(this.ar[i] === 30)
	    this.sprite = Sprites.tile30;
	if(this.ar[i] === 31)
	    this.sprite = Sprites.tile31;
	if(this.ar[i] === 32)
	    this.sprite = Sprites.tile32;
	if(this.ar[i] === 33)
	    this.sprite = Sprites.tile33;
	if(this.ar[i] === 34)
	    this.sprite = Sprites.tile;
	if(this.ar[i] === 35)
	    this.sprite = Sprites.tile35;
	if(this.ar[i] === 36)
	    this.sprite = Sprites.tile36;
	if(this.ar[i] === 37)
	    this.sprite = Sprites.tile37;
	if(this.ar[i] === 38)
	    this.sprite = Sprites.tile38;

if(d===0)
	{
	  if(this.n !== 1)
           this.new_width += (this.sprite.width);
          else
           this.new_width = this.sprite.width;
	   this.new_height = this.sprite.height;
	}
else {
	if(this.n !== 1)
	 this.new_height += (this.sprite.height);
	else
	 this.new_height = this.sprite.height;
	 this.new_width = this.sprite.width;
     }
}     




};

TileSet.prototype.draw = function() {
for(var i=0;i<this.n;i++)
   {
        if(this.ar[i] === 1)
            this.sprite = Sprites.tile1;
	if(this.ar[i] === 2)
	    this.sprite = Sprites.tile2;
	if(this.ar[i] === 3)
	    this.sprite = Sprites.tile3;
	if(this.ar[i] === 4)
	    this.sprite = Sprites.tile4;
	if(this.ar[i] === 5)
	    this.sprite = Sprites.tile5;
	if(this.ar[i] === 6)
	    this.sprite = Sprites.tile6;
	if(this.ar[i] === 7)
	    this.sprite = Sprites.tile7;
	if(this.ar[i] === 8)
	    this.sprite = Sprites.tile8;
	if(this.ar[i] === 9)
	    this.sprite = Sprites.tile9;
	if(this.ar[i] === 10)
	    this.sprite = Sprites.tile10;
	if(this.ar[i] === 11)
	    this.sprite = Sprites.tile11;
	if(this.ar[i] === 12)
	    this.sprite = Sprites.tile12;
	if(this.ar[i] === 13)
	    this.sprite = Sprites.tile13;
	if(this.ar[i] === 14)
	    this.sprite = Sprites.tile14;
	if(this.ar[i] === 15)
	    this.sprite = Sprites.tile15;
	if(this.ar[i] === 16)
	    this.sprite = Sprites.tile16;
	if(this.ar[i] === 17)
	    this.sprite = Sprites.tile17;
	if(this.ar[i] === 18)
	    this.sprite = Sprites.tile18;
	if(this.ar[i] === 19)
	    this.sprite = Sprites.tile19;
	if(this.ar[i] === 20)
	    this.sprite = Sprites.tile20;
	if(this.ar[i] === 21)
	    this.sprite = Sprites.tile21;
	if(this.ar[i] === 22)
	    this.sprite = Sprites.tile22;
	if(this.ar[i] === 23)
	    this.sprite = Sprites.tile23;
	if(this.ar[i] === 24)
	    this.sprite = Sprites.tile24;
	if(this.ar[i] === 25)
	    this.sprite = Sprites.tile25;
	if(this.ar[i] === 26)
	    this.sprite = Sprites.tile26;
	if(this.ar[i] === 27)
	    this.sprite = Sprites.tile27;
	if(this.ar[i] === 28)
	    this.sprite = Sprites.tile28;
	if(this.ar[i] === 29)
	    this.sprite = Sprites.tile29;
	if(this.ar[i] === 30)
	    this.sprite = Sprites.tile30;
	if(this.ar[i] === 31)
	    this.sprite = Sprites.tile31;
	if(this.ar[i] === 32)
	    this.sprite = Sprites.tile32;
	if(this.ar[i] === 33)
	    this.sprite = Sprites.tile33;
	if(this.ar[i] === 34)
	    this.sprite = Sprites.tile;
	if(this.ar[i] === 35)
	    this.sprite = Sprites.tile35;
	if(this.ar[i] === 36)
	    this.sprite = Sprites.tile36;
	if(this.ar[i] === 37)
	    this.sprite = Sprites.tile37;
	if(this.ar[i] === 38)
	    this.sprite = Sprites.tile38;
if(this.d==0)
	    Canvas.draw(this.sprite, {x:this.position.x+((i*this.sprite.width)), y:this.position.y});
else
	    Canvas.draw(this.sprite, {x:this.position.x, y:this.position.y+((i*this.sprite.height))});
     

}     






};




Object.defineProperty(TileSet.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(TileSet.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(TileSet.prototype, "width",
    {
        get: function () {
               return this.new_width;
        }
    });


Object.defineProperty(TileSet.prototype, "height",
    {
        get: function () {
               return this.new_height;
        }
    });

Object.defineProperty(TileSet.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.new_width / 2);
        }
    });

Object.defineProperty(TileSet.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.new_height / 2);
        }
    });

Object.defineProperty(TileSet.prototype, "halfWidth",
    {
        get: function () {
           return this.new_width/2;
        }
    });

Object.defineProperty(TileSet.prototype, "halfHeight",
    {
        get: function () {
               return this.new_height / 2;
        }
    });



TileSet.prototype.update = function() {
if(char.x<this.x+this.width && char.x+char.width>this.x && char.y<this.y+this.height && char.sprite.height+char.y>this.y)
{
 if(char.y<this.y)
 {
	this.on_ground = true;
 }
 else
	this.on_ground = false;
}
 else
	this.on_ground = false;


var vx = char.centerX - this.centerX;
var vy = char.centerY - this.centerY;
var comb_h_w = char.halfWidth + this.halfWidth;
var comb_h_h = char.halfHeight + this.halfHeight;

if(Math.abs(vx) < comb_h_w)
 {
  if(Math.abs(vy) < comb_h_h)
   {
    var overlapX = comb_h_w - Math.abs(vx);
    var overlapY = comb_h_h - Math.abs(vy);
      if(overlapX >= overlapY)
      {
       if(vy > 0)
        {
        char.position.y = char.position.y + overlapY;
        }
        else 
        {
	char.position.y = char.position.y - overlapY;
	if(this.mov != 0)
	{
          if(!this.movd)
	  char.position.x++;
	  else
	  char.position.x--;
	}
        }
      } 
      else 
      {	
	this.on_ground = false;
        if(vx > 0)
        {
          char.position.x = char.position.x + overlapX;
        }
        else 
        {
          char.position.x = char.position.x - overlapX;
        }
      } 
}
}



if(this.mov != 0)
{
  if((this.position.x <= this.x2) && (!this.movd)){
	   this.position.x++;
    } 
    else {
	  this.movd = true;
          if(this.position.x >= this.x1)
	  {
	   this.position.x--;
	  }
          if(this.position.x === this.x1)
	     this.movd = false;         
         }

}



};

var big_tile = new TileSet();
var tile1 = new TileSet();
var tile2 = new TileSet();
var tile3 = new TileSet();
var tile4 = new TileSet();
var tile5 = new TileSet();
var tile6 = new TileSet();
var tile7 = new TileSet();
var tile8 = new TileSet();
var tile9 = new TileSet();
var tile10 = new TileSet();
var tile11 = new TileSet();
var tile12 = new TileSet();
var tile13 = new TileSet();
var tile14 = new TileSet();
var tile15 = new TileSet();
var tile16 = new TileSet();
var tile17 = new TileSet();
var tile18 = new TileSet();
var tile19 = new TileSet();
var tile20 = new TileSet();
var tile21 = new TileSet();
var tile22 = new TileSet();
var tile23 = new TileSet();
var tile24 = new TileSet();
var tile25 = new TileSet();
var tile26 = new TileSet();
var tile27 = new TileSet();
var tile28 = new TileSet();
var tile29 = new TileSet();
var tile30 = new TileSet();
var tile31 = new TileSet();

//Char
function Char() {
};

Char.prototype.init = function( ) {
    this.position = {x:1276, y:600};
    this.velocity = {x:0, y:0};
    this.sprite = Sprites.anim;
    this.flip = false;
    this.on_ground = false;
    this.anim = {x:0, y:0};
    this.w = 65;
};

Char.prototype.reset = function() {
    this.velocity = {x:0, y:0};
}
var tp = 1/60;
var time = 5;
var ftime = 0.05;

var jtime = 5;
var jftime = 0.1;



Char.prototype.draw = function() {



	if(this.flip)
	    Canvas.draw(this.sprite, this.position ,this.w, 1, this.anim);
	else
	    Canvas.draw(this.sprite, this.position, this.w, 0,  this.anim);
};
Char.prototype.update = function() {
time +=tp;

jtime +=tp;

this.velocity.x = 0;
var ws = 340;
    if(Keyboard.key_status[37].down)
    {this.sprite = Sprites.anim;
	while(time > ftime){
		 time -= ftime;
		if(this.anim.x == 0)
		 this.anim.x=780;
	 	else
		{
		 this.anim.x -= 65;
		}
		}
	        this.flip = true;
		if(this.position.x > 0)
	        this.velocity.x = -ws;
		else
	        this.velocity.x = 0;
    }
 if(Keyboard.key_status[39].down)
    {   this.sprite = Sprites.anim;
        this.flip = false;
while(time > ftime){
 time -= ftime;
if(this.anim.x == 0)
 this.anim.x=780;
else
{
 this.anim.x -= 65;
}

}
	if(this.position.x < 1364-this.w)
        this.velocity.x = ws;
	else
        this.velocity.x = 0;
    }

if(Keyboard.key_status[32].press && (big_tile.on_ground || tile1.on_ground || tile2.on_ground || tile3.on_ground || tile4.on_ground || tile5.on_ground || tile6.on_ground || tile7.on_ground || tile8.on_ground || tile9.on_ground || tile10.on_ground || tile11.on_ground || tile12.on_ground || tile13.on_ground || tile14.on_ground || tile15.on_ground || tile16.on_ground || tile17.on_ground || tile18.on_ground || tile19.on_ground || tile20.on_ground || tile21.on_ground || tile22.on_ground || tile23.on_ground || tile24.on_ground))
{
     this.velocity.y = -1090;
  if(localStorage.sound == "on")
  {
var audio = new Audio();
audio.src = "audio/jump.ogg";
audio.autoplay=true;
audio.play();
}
}



if(!(big_tile.on_ground || tile1.on_ground || tile2.on_ground || tile3.on_ground || tile4.on_ground || tile5.on_ground || tile6.on_ground || tile7.on_ground || tile8.on_ground || tile9.on_ground || tile10.on_ground || tile11.on_ground || tile12.on_ground || tile13.on_ground || tile14.on_ground || tile15.on_ground || tile16.on_ground || tile17.on_ground || tile18.on_ground || tile19.on_ground || tile20.on_ground || tile21.on_ground || tile22.on_ground || tile23.on_ground || tile24.on_ground)) {
this.sprite = Sprites.jump;
	while(jtime > jftime){
		 jtime -= jftime;
		if(this.anim.x == 780)
		 this.anim.x=0;
	 	else
		{
		 this.anim.x += 65;
		}
		}

}








 if((!Keyboard.key_status[39].down) && (!Keyboard.key_status[37].down) && (big_tile.on_ground || tile1.on_ground || tile2.on_ground || tile3.on_ground || tile4.on_ground || tile5.on_ground || tile6.on_ground || tile7.on_ground || tile8.on_ground || tile9.on_ground || tile10.on_ground || tile11.on_ground || tile12.on_ground || tile13.on_ground || tile14.on_ground || tile15.on_ground || tile16.on_ground || tile17.on_ground || tile18.on_ground || tile19.on_ground || tile20.on_ground || tile21.on_ground || tile22.on_ground || tile23.on_ground || tile24.on_ground))
{		 this.sprite = Sprites.anim;
		 this.anim.x=780;
}











if(!(big_tile.on_ground || tile1.on_ground || tile2.on_ground || tile3.on_ground || tile4.on_ground || tile5.on_ground || tile6.on_ground || tile7.on_ground || tile8.on_ground || tile9.on_ground || tile10.on_ground || tile11.on_ground || tile12.on_ground || tile13.on_ground || tile14.on_ground || tile15.on_ground || tile16.on_ground || tile17.on_ground || tile18.on_ground || tile19.on_ground || tile20.on_ground || tile21.on_ground || tile22.on_ground || tile23.on_ground || tile24.on_ground))
this.velocity.y += 50;

  this.position.x += this.velocity.x*(1/60);
  this.position.y += this.velocity.y*(1/60);

if(time_left == 0)
game_over = true;


if(game_over)
{

}
};

  


Object.defineProperty(Char.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Char.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Char.prototype, "width",
    {
        get: function () {
               return this.w;
        }
    });


Object.defineProperty(Char.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Char.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.w / 2);
        }
    });

Object.defineProperty(Char.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Char.prototype, "halfWidth",
    {
        get: function () {
           return this.w/2;
        }
    });

Object.defineProperty(Char.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });




var char = new Char();

//Coin
function Coin() {
};

Coin.prototype.init = function(x,y) {
    this.position = {x:x, y:y};
    this.sprite = Sprites.coin;
    this.visible = true;
    this.anim = 0;
};
var newtime = 100;
Coin.prototype.draw = function() {
if(this.visible)
    Canvas.draw(this.sprite, this.position);
};
var x=177;
Coin.prototype.update = function() {
  if(char.position.x<this.position.x+this.sprite.width && char.position.x+char.width>this.position.x && char.position.y<this.position.y+this.sprite.height && char.sprite.height+char.position.y>this.position.y)
{
  if(this.visible === true)
{
  if(localStorage.sound == "on")
  {
var audio = new Audio();
audio.src = "audio/coin.ogg";
audio.autoplay=true;
audio.play();
}
--x;
 }
	this.visible = false;

}


if(newtime == 0)
	newtime=100;
else
	newtime-=1;

this.position.y -= this.anim;
var s = newtime+this.position.y;
this.anim = Math.sin(s);
this.position.y += this.anim;





};

  

Object.defineProperty(Coin.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Coin.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Coin.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Coin.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Coin.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Coin.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Coin.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Coin.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });

var coin1 = new Coin();
var coin2 = new Coin();
var coin3 = new Coin();
var coin4 = new Coin();
var coin5 = new Coin();
var coin6 = new Coin();
var coin7 = new Coin();
var coin8 = new Coin();
var coin9 = new Coin();
var coin10 = new Coin();
var coin11 = new Coin();
var coin12 = new Coin();
var coin13 = new Coin();
var coin14 = new Coin();
var coin15 = new Coin();
var coin16 = new Coin();
var coin17 = new Coin();
var coin18 = new Coin();
var coin19 = new Coin();
var coin20 = new Coin();
var coin21 = new Coin();
var coin22 = new Coin();
var coin23 = new Coin();
var coin24 = new Coin();
var coin25 = new Coin();
var coin26 = new Coin();
var coin27 = new Coin();
var coin28 = new Coin();
var coin29 = new Coin(); 
var coin30 = new Coin(); 
var coin31 = new Coin(); 
var coin32 = new Coin(); 
var coin33 = new Coin(); 
var coin34 = new Coin(); 
var coin35 = new Coin(); 
var coin36 = new Coin(); 
var coin37 = new Coin(); 
var coin38 = new Coin(); 
var coin39 = new Coin(); 
var coin40 = new Coin(); 
var coin41 = new Coin();
var coin42 = new Coin(); 
var coin43 = new Coin(); 
var coin44 = new Coin(); 
var coin45 = new Coin(); 
var coin46 = new Coin(); 
var coin47 = new Coin(); 
var coin48 = new Coin();
var coin49 = new Coin();
var coin50 = new Coin();
var coin51 = new Coin();
var coin52 = new Coin();
var coin53 = new Coin();
var coin54 = new Coin();
var coin55 = new Coin();
var coin56 = new Coin();
var coin57 = new Coin();
var coin58 = new Coin();
var coin59 = new Coin();
var coin60 = new Coin();
var coin61 = new Coin();
var coin62 = new Coin();
var coin63 = new Coin();
var coin64 = new Coin();
var coin65 = new Coin();
var coin66 = new Coin();
var coin67 = new Coin();
var coin68 = new Coin();
var coin69 = new Coin();
var coin70 = new Coin();
var coin71 = new Coin();
var coin72 = new Coin();
var coin73 = new Coin();
var coin74 = new Coin();
var coin75 = new Coin();
var coin76 = new Coin();
var coin77 = new Coin();
var coin78 = new Coin();
var coin79 = new Coin(); 
var coin80 = new Coin(); 
var coin81 = new Coin(); 
var coin82 = new Coin(); 
var coin83 = new Coin(); 
var coin84 = new Coin(); 
var coin85 = new Coin(); 
var coin86 = new Coin(); 
var coin87 = new Coin(); 
var coin88 = new Coin(); 
var coin89 = new Coin(); 
var coin90 = new Coin(); 
var coin91 = new Coin();
var coin92 = new Coin(); 
var coin93 = new Coin(); 
var coin94 = new Coin(); 
var coin95 = new Coin(); 
var coin96 = new Coin(); 
var coin97 = new Coin(); 
var coin98 = new Coin();
var coin99 = new Coin();
var coin100 = new Coin();
var coin101 = new Coin();
var coin102 = new Coin();
var coin103 = new Coin();
var coin104 = new Coin();
var coin105 = new Coin();
var coin106 = new Coin();
var coin107 = new Coin();
var coin108 = new Coin();
var coin109 = new Coin();
var coin110 = new Coin();
var coin111 = new Coin();
var coin112 = new Coin();
var coin113 = new Coin();
var coin114 = new Coin();
var coin115 = new Coin();
var coin116 = new Coin();
var coin117 = new Coin();
var coin118 = new Coin();
var coin119 = new Coin();
var coin120 = new Coin();
var coin121 = new Coin();
var coin122 = new Coin();
var coin123 = new Coin();
var coin124 = new Coin();
var coin125 = new Coin();
var coin126 = new Coin();
var coin127 = new Coin();
var coin128 = new Coin();
var coin129 = new Coin(); 
var coin130 = new Coin(); 
var coin131 = new Coin(); 
var coin132 = new Coin(); 
var coin133 = new Coin(); 
var coin134 = new Coin(); 
var coin135 = new Coin(); 
var coin136 = new Coin(); 
var coin137 = new Coin(); 
var coin138 = new Coin(); 
var coin139 = new Coin(); 
var coin140 = new Coin(); 
var coin141 = new Coin();
var coin142 = new Coin(); 
var coin143 = new Coin(); 
var coin144 = new Coin(); 
var coin145 = new Coin(); 
var coin146 = new Coin(); 
var coin147 = new Coin(); 
var coin148 = new Coin();
var coin149 = new Coin();
var coin150 = new Coin();
var coin151 = new Coin();
var coin152 = new Coin();
var coin153 = new Coin();
var coin154 = new Coin();
var coin155 = new Coin();
var coin156 = new Coin();
var coin157 = new Coin();
var coin158 = new Coin();
var coin159 = new Coin();
var coin160 = new Coin();
var coin161 = new Coin();
var coin162 = new Coin();
var coin163 = new Coin();
var coin164 = new Coin();
var coin165 = new Coin();
var coin166 = new Coin();
var coin167 = new Coin();
var coin168 = new Coin();
var coin169 = new Coin();
var coin170 = new Coin();
var coin171 = new Coin();
var coin172 = new Coin();
var coin173 = new Coin();
var coin174 = new Coin();
var coin175 = new Coin();
var coin176 = new Coin();
var coin177 = new Coin();

var time_left=150;
var ntime = 0;
var nftime = 1;

//Home
function Home() {
};

Home.prototype.init = function( ) {
    this.position = {x:1280, y:630};
    this.sprite = Sprites.home;
};

Home.prototype.draw = function() {
    Canvas.draw_text(time_left, {x:40, y:60}, "#EBE317", "Showcard Gothic" , "40px");

    Canvas.draw(this.sprite, this.position);

};

Home.prototype.update = function() {
ntime +=tp;
	while(ntime > nftime && !game_complete){
		 ntime -= nftime;
if(time_left > 0)
	time_left--;

}
  if((char.position.x<this.position.x+this.sprite.width && char.position.x+char.width>this.position.x && char.position.y<this.position.y+this.sprite.height && char.sprite.height+char.position.y>this.position.y) && (x==0) && (!game_over) )
{
  if(localStorage.sound == "on")
  {
var audio = new Audio();
audio.src = "audio/win.ogg";
audio.autoplay=true;
audio.play();
char.position.x = -100000;
}
  if(Number(localStorage.level) <= 2)
     localStorage.level = 3;
  game_complete=true;
}
};

  

Object.defineProperty(Home.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Home.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Home.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Home.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Home.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Home.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Home.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Home.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });

var home = new Home();











//Cloud
function Cloud() {
};

Cloud.prototype.init = function(x) {
    this.speed = x;
    this.position = {x:0, y:173};
    this.sprite = Sprites.cloud;
};

Cloud.prototype.draw = function() {
    Canvas.draw(this.sprite, this.position);
};

Cloud.prototype.update = function() {
this.position.x+=this.speed;
if(this.position.x > Game.size.x)
{
this.position.y = Math.floor((Math.random()*200)+1);
var t=Math.floor((Math.random()*2)+1);
if(t===0)
this.sprite = Sprites.cloud;
if(t===1)
this.sprite = Sprites.cloud;
if(t===2)
this.sprite = Sprites.cloud2;
this.position.x =-this.sprite.width+10;

}

};


var cloud = new Cloud();
var cloud2 = new Cloud();




//Menu
function Menu() {
};

Menu.prototype.init = function(x,y,s,p) {
    this.position = {x:x, y:y};
    this.sprite = s;
    this.path = p;
};

Menu.prototype.draw = function() {
	    Canvas.draw(this.sprite, this.position);
};

Menu.prototype.update = function() {
  if((Mouse.position.x<this.position.x+this.sprite.width && Mouse.position.x >this.position.x && Mouse.position.y<this.position.y+this.sprite.height && Mouse.position.y>this.position.y) && (Mouse.left))
  window.location.replace(this.path);
};

  


Object.defineProperty(Menu.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Menu.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Menu.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Menu.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Menu.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Menu.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Menu.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Menu.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });



var back = new Menu();
var youlost = new Menu();
var youwon = new Menu();











//Enemy
function Enemy() {
};

Enemy.prototype.init = function(x1,x2,y) {
    this.position = {x:x1, y:y};
    this.x1 = x1;
    this.x2 = x2;
    this.velocity = {x:0, y:0};
    this.sprite = Sprites.enemy_walk;
    this.flip = false;
};


Enemy.prototype.draw = function() {
	if(this.flip)
	    Canvas.draw(this.sprite, this.position ,this.sprite.width, 1);
	else
	    Canvas.draw(this.sprite, this.position, this.sprite.width, 0);
};

var eaudio = new Audio();
eaudio.src = "audio/dead.ogg";
var lives_left = 5;
var eltime = 0;
var elftime = 0.3;
Enemy.prototype.update = function() {
  if((this.position.x <= this.x2) && (!this.flip)){
	   this.position.x++;
    } 
    else {
	  this.flip = true;
          if(this.position.x >= this.x1)
	  {
	   this.position.x--;
	  }
          if(this.position.x === this.x1)
	     this.flip = false;         
         }


 if(char.position.x<this.position.x+this.width && char.position.x+char.width>this.position.x && char.position.y<this.position.y+this.height && char.sprite.height+char.position.y>this.position.y)
   {
	   eltime +=tp;

	if(lives_left == 0)
	{
	 game_over=true;
	 char.position.x = -10000;
	}
	else
	{

	while(eltime > elftime){
	if(localStorage.sound == "on")
	{
	 eaudio.autoplay=true;
	 eaudio.play();
	}
	   eltime -=elftime;
	   lives_left--;
	  }

	}

   } 
};

  


Object.defineProperty(Enemy.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Enemy.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Enemy.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Enemy.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Enemy.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Enemy.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Enemy.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Enemy.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });




var enemy = new Enemy();










//Sharp
function Sharp() {
};

Sharp.prototype.init = function(x,y,s,n,d) {
    this.position = {x:x, y:y};
    this.sprite = s;
if(d==0)
{
    this.new_width = s.width*n;
    this.new_height = s.height;
}
else
{
    this.new_width = s.width;
    this.new_height = s.height*n;
}

    this.d = d;
    this.num = n;
};

Sharp.prototype.draw = function() {
for(var i=0;i<this.num;i++)
   {
	if(this.d==0)
	    Canvas.draw(this.sprite, {x:this.position.x+(i*(this.sprite.width)), y:this.position.y});
	else
	    Canvas.draw(this.sprite, {x:this.position.x, y:this.position.y+(i*(this.sprite.height))});
   }     
};




Object.defineProperty(Sharp.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Sharp.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Sharp.prototype, "width",
    {
        get: function () {
               return this.new_width;
        }
    });


Object.defineProperty(Sharp.prototype, "height",
    {
        get: function () {
               return this.new_height;
        }
    });

Object.defineProperty(Sharp.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.new_width / 2);
        }
    });

Object.defineProperty(Sharp.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.new_height / 2);
        }
    });

Object.defineProperty(Sharp.prototype, "halfWidth",
    {
        get: function () {
           return this.new_width/2;
        }
    });

Object.defineProperty(Sharp.prototype, "halfHeight",
    {
        get: function () {
               return this.new_height / 2;
        }
    });


var sltime = 0;
var slftime = 0.1;
Sharp.prototype.update = function() {
 if(char.position.x<this.position.x+this.new_width && char.position.x+char.width>this.position.x && char.position.y<this.position.y+this.new_height && char.sprite.height+char.position.y>this.position.y)
{
  sltime +=tp;

  if(lives_left == 0)
  {
   game_over = true;
   char.position.x = -10000;
  }
  else
  {
   while(sltime > slftime) {
   if(localStorage.sound == "on")
  {
   eaudio.autoplay=true;
   eaudio.play();
  }
	sltime -= slftime;
	lives_left--;
   }
  }

}
};

var sharp1 = new Sharp();
var sharp2 = new Sharp();
var sharp3 = new Sharp();
var sharp4 = new Sharp();
var sharp5 = new Sharp();
var sharp6 = new Sharp();
var sharp7 = new Sharp();
var sharp8 = new Sharp();
var sharp9 = new Sharp();
var sharp10 = new Sharp();
var sharp11 = new Sharp();
var sharp12 = new Sharp();
var sharp13 = new Sharp();
var sharp14 = new Sharp();
var sharp15 = new Sharp();
var sharp16 = new Sharp();

//Game
var Game = {
	size : {x : 1364, y : 767}
};

Game.start = function (divid, canvasid) {
    Canvas.init(canvasid, divid);
    Sprites.load();
    Sprites.load_loop();
};
var game_over=false;
var game_complete=false;
Game.init = function() {

    youlost.init(250,170,Sprites.youlost,"level_two.html");
    youwon.init(250,170,Sprites.youwon,"level_three.html");

    back.init(1203,5,Sprites.back,"index.html");
    cloud.init(0.5);
    cloud2.init(0.8);
    char.init();
    big_tile.init(0,704,[34],0,0);
    sharp1.init(650,668,Sprites.sharp,7,0);

    tile1.init(100,510,[19],0,0);

    sharp2.init(106,547,Sprites.sharp3,2,0);
    sharp3.init(143,526,Sprites.sharp2,1,0);
    sharp5.init(715,546,Sprites.sharp2,1,0);
    sharp6.init(1295,517,Sprites.sharp2,2,1);
    sharp7.init(640,537,Sprites.sharp4,2,1);

    sharp8.init(355,420,Sprites.sharp,3,0);
    sharp9.init(1020,419,Sprites.sharp,3,0);
    sharp10.init(49,123,Sprites.sharp,2,0);
    sharp11.init(228,160,Sprites.sharp2,2,1);
    sharp12.init(492,142,Sprites.sharp4,2,1);

    sharp13.init(855,54,Sprites.sharp,1,0);

    sharp14.init(888,96,Sprites.sharp2,2,1);

    sharp15.init(533,100,Sprites.sharp,1,0);

    sharp16.init(1280,118,Sprites.sharp,2,0);

    tile2.init(1250,510,[19],0,0);

    tile3.init(250,451,[7,1,1,1,1,1,5],0,0);
    tile4.init(295,497,[23,23,23,23,23],0,0);
    tile6.init(340,543,[23,23,23],0,0);
    tile7.init(900,451,[7,1,1,1,1,1,5],0,0);
    tile8.init(945,497,[23,23,23,23,23],0,0);
    tile9.init(990,543,[23,23,23],0,0);

    tile10.init(310,310,[7,1,1,5],0,550);

    tile11.init(380,80,[19],0,0);

    tile12.init(950,80,[19],0,0);

    tile5.init(670,530,[19],0,0);
    sharp4.init(656,172,Sprites.sharp3,2,0);

    tile13.init(0,153,[12,1,1,1,5],0,0);
    tile14.init(0,107,[5],0,0);

    tile15.init(1138,153,[7,1,1,1,9],0,0);
    tile16.init(1318,107,[7],0,0);

    tile17.init(705,-235,[17,17,17,17,17,17,17,30,32],1,0);
    tile18.init(521,133,[15,18,18,18],0,0);
    tile19.init(751,87,[18,18,16],0,0);
    tile20.init(705,179,[14],0,0);



    coin1.init(0,665);
    coin2.init(40,665);
    coin3.init(80,665);
    coin4.init(120,665);
    coin5.init(160,665);
    coin6.init(200,665);
    coin7.init(240,665);
    coin8.init(280,665);
    coin9.init(320,665);
    coin10.init(360,665);
    coin11.init(400,665);
    coin12.init(440,665);
    coin13.init(480,665);
    coin14.init(520,665);
    coin15.init(560,665);
    coin16.init(600,665);
    coin17.init(59,516);
    coin18.init(105,470);
    coin19.init(675,490);
    coin20.init(1256,470);
    coin21.init(800,665);
    coin22.init(840,665);
    coin23.init(880,665);
    coin24.init(920,665);
    coin25.init(960,665);
    coin26.init(1000,665);
    coin27.init(1040,665);
    coin28.init(1080,665);
    coin29.init(1120,665);
    coin30.init(1160,665);
    coin31.init(1200,665);
    coin32.init(1240,665);
    coin33.init(1280,665);
    coin34.init(1320,665);
    coin47.init(660,8);
    coin48.init(660,48);
    coin49.init(660,88);
    coin50.init(577,88);
    coin51.init(617,88);
    coin55.init(760,143);
    coin56.init(800,143);
    coin57.init(840,143);
    coin58.init(760,183);
    coin59.init(754,8);
    coin60.init(754,48);
    coin61.init(794,48);
    coin62.init(6,67);
    coin63.init(94,115);
    coin64.init(134,115);
    coin66.init(174,115);
    coin67.init(340,85);
    coin68.init(385,135);
    coin69.init(385,43);
    coin70.init(956,40);
    coin71.init(956,133);
    coin72.init(1003,88);
    coin73.init(1144,112);
    coin74.init(1184,112);
    coin75.init(1224,112);
    coin76.init(1325,71);
    coin65.init(1145,210);
    coin120.init(1185,210);
    coin121.init(1225,210);
    coin122.init(1265,210);
    coin123.init(1305,210);
    coin124.init(1305,250);
    coin125.init(1305,290);
    coin126.init(1305,330);
    coin127.init(1305,370);
    coin128.init(1305,410);
    coin129.init(20,210);
    coin130.init(20,250);
    coin131.init(20,290);
    coin132.init(20,330);
    coin133.init(20,370);
    coin134.init(20,410);
    coin135.init(60,210);
    coin136.init(100,210);
    coin137.init(140,210);
    coin138.init(180,210);
    coin139.init(257,408);
    coin140.init(297,408);
    coin142.init(414,408);
    coin143.init(454,408);
    coin144.init(494,408);
    coin145.init(534,408);
    coin146.init(900,408);
    coin147.init(940,408);
    coin148.init(980,408);
    coin149.init(1120,408);
    coin150.init(1080,408);
    coin151.init(1160,408);
    coin152.init(534,190);
    coin153.init(574,190);
    coin154.init(614,190);














    coin35.init(200,660);
    coin36.init(200,630);
    coin37.init(260,630);
    coin38.init(228,673);
    coin39.init(240,663);
    coin40.init(360,670);
    coin41.init(314,653);
    coin42.init(340,673);
    coin43.init(214,669);
    coin44.init(263,660);







    coin98.init(200,645);
    coin99.init(202,645);
    coin100.init(135,670);
    coin101.init(145,670);
    coin102.init(155,670);
    coin103.init(165,670);
    coin104.init(175,670);
    coin105.init(185,670);
    coin106.init(195,670);
    coin107.init(237,665);
    coin108.init(234,661);
    coin109.init(259,647);
    coin110.init(243,647);
    coin111.init(147,667);
    coin112.init(307,670);
    coin113.init(269,663);
    coin114.init(269,663);
    coin115.init(290,655);
    coin116.init(280,650);
    coin117.init(270,650);
    coin118.init(250,670);
    coin119.init(290,670);
    coin141.init(195,670);



    coin45.init(222,651);
    coin46.init(284,660);
    coin52.init(284,660);
    coin53.init(284,660);
    coin54.init(284,660);
    coin77.init(270,650);
    coin78.init(270,650);
    coin79.init(270,650);
    coin80.init(270,650);
    coin81.init(270,650);
    coin82.init(270,650);
    coin83.init(307,670);
    coin84.init(307,670);
    coin85.init(307,670);
    coin86.init(307,670);
    coin87.init(307,670);
    coin88.init(307,670);
    coin89.init(269,663);
    coin90.init(269,663);
    coin91.init(269,663);
    coin92.init(269,663);
    coin93.init(269,663);
    coin94.init(269,663);
    coin95.init(269,663);
    coin96.init(269,663);
    coin97.init(269,663);
    coin155.init(269,663);
    coin156.init(269,663);
    coin157.init(269,663);
    coin158.init(269,663);
    coin159.init(269,663);

    coin160.init(122,651);
    coin161.init(151,653);
    coin162.init(116,671);
    coin163.init(106,669);
    coin164.init(169,636);

    coin165.init(243,647);
    coin166.init(243,647);
    coin167.init(243,647);
    coin168.init(243,647);
    coin169.init(243,647);
    coin170.init(263,673);

    coin171.init(222,630);
    coin172.init(222,630);
    coin173.init(222,630);
    coin174.init(222,630);

    coin175.init(270,650);
    coin176.init(270,650);
    coin177.init(270,650);


    enemy.init(1,1260,609);
    home.init();
    Keyboard.init();
    Mouse.init();
    Game.main_loop();  
}
Game.main_loop = function() {
    Game.update();
    Game.draw();
    Game.reset();
    window.requestAnimationFrame(Game.main_loop);

};
Game.update = function() {
    cloud.update();
    cloud2.update();
if(!game_over)
{
char.update();
}
   big_tile.update();
    tile1.update();
    tile2.update();
    tile3.update();
    tile4.update();
    tile5.update();
    tile6.update();
    tile7.update();
    tile8.update();
    tile9.update();

    tile10.update();
    tile11.update();
    tile12.update();
    tile13.update();
    tile14.update();
    tile15.update();
    tile16.update();
    tile17.update();
    tile18.update();
    tile19.update();
    tile20.update();


sharp1.update();
sharp2.update();
sharp3.update();
sharp4.update();
sharp5.update();
sharp6.update();
sharp7.update();
sharp8.update();
sharp9.update();
sharp10.update();
sharp11.update();
sharp12.update();
sharp13.update();
sharp14.update();
sharp15.update();
sharp16.update();




coin1.update();
coin2.update();
coin3.update();
coin4.update();
coin5.update();
coin6.update();
coin7.update();
coin8.update();
coin9.update();
coin10.update();
coin11.update();
coin12.update();
coin13.update();
coin14.update();
coin15.update();
coin16.update();
coin17.update();
coin18.update();
coin19.update();
coin20.update();
coin21.update();
coin22.update();
coin23.update();
coin24.update();
coin25.update();
coin26.update();
coin27.update();
coin28.update();
coin29.update();
coin30.update();
coin31.update();
coin32.update();
coin33.update();
coin34.update();
coin35.update();
coin36.update();
coin37.update();
coin38.update();
coin39.update();
coin40.update();
coin41.update();
coin42.update();
coin43.update();
coin44.update();
coin45.update();
coin46.update();
coin47.update();
coin48.update();
coin49.update();
coin50.update();
coin51.update();
coin52.update();
coin53.update();
coin54.update();
coin55.update();
coin56.update();
coin57.update();
coin58.update();
coin59.update();
coin60.update();
coin61.update();
coin62.update();
coin63.update();
coin64.update();
coin65.update();
coin66.update();
coin67.update();
coin68.update();
coin69.update();
coin70.update();
coin71.update();
coin72.update();
coin73.update();
coin74.update();
coin75.update();
coin76.update();
coin77.update();
coin78.update();
coin79.update();
coin80.update();
coin81.update();
coin82.update();
coin83.update();
coin84.update();
coin85.update();
coin86.update();
coin87.update();
coin88.update();
coin89.update();
coin90.update();
coin91.update();
coin92.update();
coin93.update();
coin94.update();
coin95.update();
coin96.update();
coin97.update();
coin98.update();
coin99.update();
coin100.update();
coin101.update();
coin102.update();
coin103.update();
coin104.update();
coin105.update();
coin106.update();
coin107.update();
coin108.update();
coin109.update();
coin110.update();
coin111.update();
coin112.update();
coin113.update();
coin114.update();
coin115.update();
coin116.update();
coin117.update();
coin118.update();
coin119.update();
coin120.update();
coin121.update();
coin122.update();
coin123.update();
coin124.update();
coin125.update();
coin126.update();
coin127.update();
coin128.update();
coin129.update();
coin130.update();
coin131.update();
coin132.update();
coin133.update();
coin134.update();
coin135.update();
coin136.update();
coin137.update();
coin138.update();
coin139.update();
coin140.update();
coin141.update();
coin142.update();
coin143.update();
coin144.update();
coin145.update();
coin146.update();
coin147.update();
coin148.update();
coin149.update();
coin150.update();
coin151.update();
coin152.update();
coin153.update();
coin154.update();
coin155.update();
coin156.update();
coin157.update();
coin158.update();
coin159.update();
coin160.update();
coin161.update();
coin162.update();
coin163.update();
coin164.update();
coin165.update();
coin166.update();
coin167.update();
coin168.update();
coin169.update();
coin170.update();
coin171.update();
coin172.update();
coin173.update();
coin174.update();
coin175.update();
coin176.update();
coin177.update();
enemy.update();
home.update();
back.update();

if(game_over)
{
youlost.update();
}
if(game_complete)
youwon.update();

};


Game.draw = function() {
    Canvas.clear();
    Canvas.draw(Sprites.background, { x : 0, y : 0 });
    cloud.draw();
    cloud2.draw();
    Canvas.draw(Sprites.bgu, { x : 0, y : 0 });
    Canvas.draw(Sprites.secondsleft, { x : 5, y : 5 });
    Canvas.draw(Sprites.coinsleft, { x : 165, y : 5 });
    Canvas.draw(Sprites.livesleft, { x : 325, y : 5 });
    Canvas.draw(Sprites.hill, { x : 10, y : 652 });
    Canvas.draw(Sprites.trees, { x : 1000, y : 400 });
    Canvas.draw(Sprites.grass, { x : 90, y : 610 });
    Canvas.draw(Sprites.trees, { x : 1100, y : 650 });
    home.draw();
if(!game_over)
{
    char.draw();
}
sharp1.draw();
sharp2.draw();
sharp3.draw();
sharp4.draw();
sharp5.draw();
sharp6.draw();
sharp7.draw();
sharp8.draw();
sharp9.draw();
sharp10.draw();
sharp11.draw();
sharp12.draw();
sharp13.draw();
sharp14.draw();
sharp15.draw();
sharp16.draw();


   big_tile.draw();
    tile1.draw();
    tile2.draw();
    tile3.draw();
    tile4.draw();
    tile5.draw();
    tile6.draw();
    tile7.draw();
    tile8.draw();
    tile9.draw();
    tile10.draw();
    tile11.draw();
    tile12.draw();
    tile13.draw();
    tile14.draw();
    tile15.draw();
    tile16.draw();
    tile17.draw();
    tile18.draw();
    tile19.draw();
    tile20.draw();


coin1.draw();
coin2.draw();
coin3.draw();
coin4.draw();
coin5.draw();
coin6.draw();
coin7.draw();
coin8.draw();
coin9.draw();
coin10.draw();
coin11.draw();
coin12.draw();
coin13.draw();
coin14.draw();
coin15.draw();
coin16.draw();
coin17.draw();
coin18.draw();
coin19.draw();
coin20.draw();
coin21.draw();
coin22.draw();
coin23.draw();
coin24.draw();
coin25.draw();
coin26.draw();
coin27.draw();
coin28.draw();
coin29.draw();
coin30.draw();
coin31.draw();
coin32.draw();
coin33.draw();
coin34.draw();
coin35.draw();
coin36.draw();
coin37.draw();
coin38.draw();
coin39.draw();
coin40.draw();
coin41.draw();
coin42.draw();
coin43.draw();
coin44.draw();
coin45.draw();
coin46.draw();
coin47.draw();
coin48.draw();
coin49.draw();
coin50.draw();
coin51.draw();
coin52.draw();
coin53.draw();
coin54.draw();
coin55.draw();
coin56.draw();
coin57.draw();
coin58.draw();
coin59.draw();
coin60.draw();
coin61.draw();
coin62.draw();
coin63.draw();
coin64.draw();
coin65.draw();
coin66.draw();
coin67.draw();
coin68.draw();
coin69.draw();
coin70.draw();
coin71.draw();
coin72.draw();
coin73.draw();
coin74.draw();
coin75.draw();
coin76.draw();
coin77.draw();
coin78.draw();
coin79.draw();
coin80.draw();
coin81.draw();
coin82.draw();
coin83.draw();
coin84.draw();
coin85.draw();
coin86.draw();
coin87.draw();
coin88.draw();
coin89.draw();
coin90.draw();
coin91.draw();
coin92.draw();
coin93.draw();
coin94.draw();
coin95.draw();
coin96.draw();
coin97.draw();
coin98.draw();
coin99.draw();
coin100.draw();
coin101.draw();
coin102.draw();
coin103.draw();
coin104.draw();
coin105.draw();
coin106.draw();
coin107.draw();
coin108.draw();
coin109.draw();
coin110.draw();
coin111.draw();
coin112.draw();
coin113.draw();
coin114.draw();
coin115.draw();
coin116.draw();
coin117.draw();
coin118.draw();
coin119.draw();
coin120.draw();
coin121.draw();
coin122.draw();
coin123.draw();
coin124.draw();
coin125.draw();
coin126.draw();
coin127.draw();
coin128.draw();
coin129.draw();
coin130.draw();
coin131.draw();
coin132.draw();
coin133.draw();
coin134.draw();
coin135.draw();
coin136.draw();
coin137.draw();
coin138.draw();
coin139.draw();
coin140.draw();
coin141.draw();
coin142.draw();
coin143.draw();
coin144.draw();
coin145.draw();
coin146.draw();
coin147.draw();
coin148.draw();
coin149.draw();
coin150.draw();
coin151.draw();
coin152.draw();
coin153.draw();
coin154.draw();
coin155.draw();
coin156.draw();
coin157.draw();
coin158.draw();
coin159.draw();
coin160.draw();
coin161.draw();
coin162.draw();
coin163.draw();
coin164.draw();
coin165.draw();
coin166.draw();
coin167.draw();
coin168.draw();
coin169.draw();
coin170.draw();
coin171.draw();
coin172.draw();
coin173.draw();
coin174.draw();
coin175.draw();
coin176.draw();
coin177.draw();
enemy.draw();
back.draw();
if(game_over)
{
youlost.draw();
}
if(game_complete)
 youwon.draw();

var sc=x;
    Canvas.draw_text(sc, {x:225, y:65}, "#EBE317", "Showcard Gothic" , "50px");
    Canvas.draw_text(lives_left, {x:385, y:65}, "#EBE317", "Showcard Gothic" , "50px");
}
Game.reset = function() {
    Keyboard.reset();
}
function check_level(){
if(localStorage.level >= 2) 
Game.start('gamediv', 'mycanvas')
else
  window.location.replace("index.html");
}

document.addEventListener( 'DOMContentLoaded', check_level());