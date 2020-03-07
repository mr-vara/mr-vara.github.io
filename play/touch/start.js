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
//	key_code : undefined
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



var t_p = [];
var t_down = [];
//Touch
var Touch = {
};
Touch.init = function(e) {
       document.ontouchstart = Touch.otc;
       document.ontouchend = Touch.ote;
}

Touch.otc = function(e){
        e.preventDefault();
	var a = e.changedTouches;
        for (var i = 0; i < a.length; i++) {
	t_p.push(a[i]);
 	t_down.push(true);
        }
}

Touch.ote = function(e) {
        e.preventDefault();
	var a = e.changedTouches;
        for (var i = 0; i < a.length; ++i) {
	var id= getIndex(a[i].identifier);
	t_p.splice(id,1);
	t_down.splice(id, 1);
}
}

function getIndex(id) {
	for(var i=0;i < t_p.length; ++i)
	{
	 if(t_p[i].identifier === id)
	  return i;
	}
	return -1;
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
    Sprites.background = Sprites.load_sprite("images/start_bg.png");
    Sprites.menu_bg = Sprites.load_sprite("images/menu_bg.png");
    Sprites.play = Sprites.load_sprite("images/play.png");
    Sprites.help = Sprites.load_sprite("images/help.png");
    Sprites.story = Sprites.load_sprite("images/story.png");
    Sprites.music = Sprites.load_sprite("images/music.png");
    Sprites.musicoff = Sprites.load_sprite("images/musicoff.png");
    Sprites.l_coin = Sprites.load_sprite("images/l_coin.png");
    Sprites.l_strike = Sprites.load_sprite("images/l_strike.png");
    Sprites.back = Sprites.load_sprite("images/back.png");
    Sprites.select_level = Sprites.load_sprite("images/select_level.png");
    Sprites.help_text = Sprites.load_sprite("images/help_text.png");
    Sprites.story_bg = Sprites.load_sprite("images/story_bg.png");

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
/*
    Object.defineProperty(Canvas.prototype, "offset",
        {
            get: function () {
                return this.canvas_offset;
            }
        });


    Object.defineProperty(Canvas.prototype, "scale",
        {
            get: function () {
                return {this.canvas.width / Game.size.x,  this.canvas.height / Game.size.y};
            }
        });
*/

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

Canvas.draw = function(sprite,position,flip) {
if(flip === 1){
    Canvas.canvas_ctx.save();
    Canvas.canvas_ctx.scale((this.canvas.width/Game.size.x)*-1 , (this.canvas.height/Game.size.y));
    Canvas.canvas_ctx.translate(-position.x-sprite.width, position.y);
    Canvas.canvas_ctx.drawImage(sprite, 0, 0, sprite.width, sprite.height, 0, 0, sprite.width, sprite.height);
    Canvas.canvas_ctx.restore();
}
else {
    Canvas.canvas_ctx.save();
    Canvas.canvas_ctx.scale((this.canvas.width/Game.size.x) , this.canvas.height/Game.size.y);
    Canvas.canvas_ctx.translate(position.x, position.y);
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






//Menu
function Menu() {
};

Menu.prototype.init = function(x,y,i) {
    this.position = {x:x, y:y};
    this.sprite = i;
    this.click = false;
};

Menu.prototype.draw = function() {
	    Canvas.draw(this.sprite, this.position);
};

Menu.prototype.update = function() {
 var c_scale = Canvas.scale();
 var c_offset = Canvas.offset();
for(var i=0;i<t_p.length;i++){
   var tx = (t_p[i].pageX - c_offset.x) /  c_scale.x;
   var ty = (t_p[i].pageY - c_offset.y) / c_scale.y;

   if(tx<this.position.x+this.sprite.width && tx >this.position.x && ty <this.position.y+this.sprite.height && ty >this.position.y) 
   {

    //Mouse.left = false;
    this.click = true; 
    }
  if(back.click == true) 
  {
   play.click = false;
   help.click = false;
   story.click = false;
   back.click = false;
  }

}
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



var play = new Menu();
var help = new Menu();
var story = new Menu();
var back = new Menu();
var music = new Menu();





//Btn
function Btn() {
};

Btn.prototype.init = function(x,y,i) {
    this.position = {x:x, y:y};
    this.sprite = i;
    this.click = false;
};

Btn.prototype.draw = function() {
	    Canvas.draw(this.sprite, this.position);
};

Btn.prototype.update = function() {
 var c_scale = Canvas.scale();
 var c_offset = Canvas.offset();
for(var i=0;i<t_p.length;i++){
   var tx = (t_p[i].pageX - c_offset.x) /  c_scale.x;
   var ty = (t_p[i].pageY - c_offset.y) / c_scale.y;

  if(tx<this.position.x+this.sprite.width && tx >this.position.x && ty <this.position.y+this.sprite.height && ty >this.position.y)
   {
   //Mouse.left = false;
   this.click = true;
   }
}
};

  


Object.defineProperty(Btn.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Btn.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Btn.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Btn.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Btn.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Btn.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Btn.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Btn.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });

//var music = new Btn();

//Level
function Level() {
};

Level.prototype.init = function(x,y,p,l) {
    this.position = {x:x, y:y};
    this.sprite = Sprites.l_coin;
    this.sprite2 = Sprites.l_strike;
    this.path = p;
    this.lev = l;
};

Level.prototype.draw = function() {
	    Canvas.draw(this.sprite, this.position);
	    Canvas.draw_text(this.lev, {x:this.position.x+50,y:this.position.y+80}, "#C9513A", "Impact", "50px");
if(!localStorage.level)
localStorage.level = 1;

if(this.lev > Number(localStorage.level))
	    Canvas.draw(this.sprite2, this.position);


/*
for(var i=1;i<=5;i++)
	    Canvas.draw_text(i, {x:265+(135*i),y:270}, "#C9513A", "Showcard Gothic", "50px");
for(var i=1;i<=5;i++)
	    Canvas.draw_text(i+5, {x:265+(135*i),y:410}, "#C9513A", "Showcard Gothic", "50px");
*/
};

Level.prototype.update = function() {
 var c_scale = Canvas.scale();
 var c_offset = Canvas.offset();
for(var i=0;i<t_p.length;i++){
 var tx = (t_p[i].pageX - c_offset.x) /  c_scale.x;
 var ty = (t_p[i].pageY - c_offset.y) / c_scale.y;

  if(tx<this.position.x+this.sprite.width && tx >this.position.x && ty <this.position.y+this.sprite.height && ty >this.position.y)
  {
   if(this.lev <= Number(localStorage.level))
    window.location.replace(this.path);
  }
}
};

  


Object.defineProperty(Level.prototype, "x",
    {
        get: function () {
               return this.position.x;
        }
    });

Object.defineProperty(Level.prototype, "y",
    {
        get: function () {
               return this.position.y;
        }
    });

Object.defineProperty(Level.prototype, "width",
    {
        get: function () {
               return this.sprite.width;
        }
    });


Object.defineProperty(Level.prototype, "height",
    {
        get: function () {
               return this.sprite.height;
        }
    });

Object.defineProperty(Level.prototype, "centerX",
    {
        get: function () {
               return this.x+(this.sprite.width / 2);
        }
    });

Object.defineProperty(Level.prototype, "centerY",
    {
        get: function () {
               return this.y+(this.sprite.height / 2);
        }
    });

Object.defineProperty(Level.prototype, "halfWidth",
    {
        get: function () {
           return this.sprite.width/2;
        }
    });

Object.defineProperty(Level.prototype, "halfHeight",
    {
        get: function () {
               return this.sprite.height / 2;
        }
    });


var l1 = new Level();
var l2 = new Level();
var l3 = new Level();
var l4 = new Level();
var l5 = new Level();
var l6 = new Level();
var l7 = new Level();
var l8 = new Level();
var l9 = new Level();
var l10 = new Level();








//Game
var Game = {
	size : {x : 1364, y : 767}
};

Game.start = function (divid, canvasid) {
    Canvas.init(canvasid, divid);
    Sprites.load();
    Sprites.load_loop();
};

Game.init = function() {
if(!localStorage.sound)
     localStorage.sound = "on";
    play.init(554,170,Sprites.play);
    help.init(554,230,Sprites.help);
    story.init(554,290,Sprites.story);
    music.init(554,350,Sprites.music);
    back.init(1005,50,Sprites.back);

    l1.init(350,190,"level_one.html",1);
    l2.init(485,190,"level_two.html",2);
    l3.init(620,190,"level_three.html",3);
    l4.init(755,190,"level_four.html",4);
    l5.init(890,190,"level_five.html",5);
    l6.init(350,325,"level_six.html",6);
    l7.init(485,325,"level_seven.html",7);
    l8.init(620,325,"level_eight.html",8);
    l9.init(755,325,"level_nine.html",9);
    l10.init(890,325,"level_ten.html",10);
    Keyboard.init();
    Mouse.init();
    Touch.init();
    Game.main_loop();  
}
Game.main_loop = function() {
    Game.update();
    Game.draw();
    Game.reset();
    window.requestAnimationFrame(Game.main_loop);

};
Game.update = function() {

if(!play.click && !help.click   && !story.click)
{
    play.update();
    help.update();
    story.update();
    music.update();
  if(localStorage.sound == "on")
  	  music.sprite = Sprites.music;
   else
  	  music.sprite = Sprites.musicoff; 
if(music.click)
 {
  if(localStorage.sound == "on")
  {
  	  music.sprite = Sprites.musicoff;
	 localStorage.sound = "off";
  }
   else
  {
  	  music.sprite = Sprites.music; 
	 localStorage.sound = "on";
  }
music.click = false;
}

}
else
{
    back.update();
}
if(play.click)
{
    l1.update();
    l2.update();
    l3.update();
    l4.update();
    l5.update();
    l6.update();
    l7.update();
    l8.update();
    l9.update();
    l10.update();
}
if(help.click)
{


}

if(story.click)
{


}




};
Game.draw = function() {
    Canvas.clear();
    Canvas.draw(Sprites.background, { x : 0, y : 0 });
    Canvas.draw(Sprites.menu_bg, { x : 263, y : 30 });
if(!play.click && !help.click   && !story.click)
{
    play.draw();
    help.draw();
    story.draw();
    music.draw();
}
else
{
    back.draw();
}
if(play.click)
{
    Canvas.draw(Sprites.select_level, { x : 563, y : 160 });
    l1.draw();
    l2.draw();
    l3.draw();
    l4.draw();
    l5.draw();
    l6.draw();
    l7.draw();
    l8.draw();
    l9.draw();
    l10.draw();

}
if(help.click)
{
    Canvas.draw(Sprites.help_text, { x : 263, y : 30 });
}

if(story.click)
{
    Canvas.draw(Sprites.story_bg, { x : 263, y : 30 });
}


}
Game.reset = function() {
    Keyboard.reset();
}

document.addEventListener( 'DOMContentLoaded', Game.start('gamediv', 'mycanvas'));