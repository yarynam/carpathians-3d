
function cssTransform(elm, props){
  var t = '';
  for(var k in props){
    var s = k + '(' + props[k] + ') ';
    t += s;
  }
  elm.style.transform = t;
}

var View = {
  elm : document.getElementById('view'),
  z : 0,
  rotateX : 0,
  rotateY : 0,
  zoom : function(z){
    this.z = this.z + z;
    this.update();
  },
  rotate : function(x, y){
    this.rotateX = x;
    this.rotateY = y;
    this.update();
  },
  update : function(){
    cssTransform(this.elm, {
      translateZ : this.z + 'px',
      rotateX : this.rotateX + 'deg',
      rotateY : this.rotateY + 'deg'
    });
  }
};

var Clouds = {
  maxCount : 7,
  list : [],
  addCloud : function(){
    var x = 400 - (Math.random() * 800);
    var y = 400 - (Math.random() * 800);
    var z = 400 - (Math.random() * 800);

    var cloud = new Cloud(x, y, z);
    View.elm.appendChild(cloud.elm);
    this.list.push(cloud);


    if(this.list.length > this.maxCount){
      this.removeFirstCloud();
    }
  },
  removeFirstCloud : function(){
    var cloud = this.list[0];
    var self = this;
    cloud.fadeTo(0, 2000, function(){
      View.elm.removeChild(cloud.elm);
      self.list.shift();
    });
  }

};

var Cloud = function(){
  this.layers = [];
  this.create.apply(this, arguments);
  return this;
};
Cloud.prototype = {
  create : function(x, y, z){
    this.elm = this.createElm();
    this.elm.style.opacity = 0;
    this.fadeTo(0.3, 1000);

    this.addLayers();
    this.position(x, y, z);
  },
  createElm : function(){
    var elm = document.createElement('div');
    elm.className = 'cloud';
    return elm;
  },
  fadeTo : function(opacity, speed, callback){
    var elm = this.elm;
    elm.style.webkitTransition = 'opacity ' + speed/1000 + 's ease-out';
    window.setTimeout(function(){
      elm.style.opacity = opacity;
    }, 50);

    if(callback){
      window.setTimeout(function(){
        callback.call();
      }, speed)
    }
  },
  position : function(x, y, z){
    this.pos = {
      x : x,
      y : y,
      z : z
    };
    cssTransform(this.elm, {
      translateX : this.pos.x + 'px',
      translateY : this.pos.y + 'px',
      translateZ : this.pos.z + 'px'
    });
  },
  move : function(x, y, z){
    x += this.pos.x;
    y += this.pos.y;
    z += this.pos.z;
    this.position(x, y, z);
  },
  addLayers : function(){
    var n = 6 + Math.random()*8;
    for(var i=0; i< n; i++){
      var layer = new CloudLayer();
      this.elm.appendChild(layer.elm);
      this.layers.push(layer);
    }
  }
};

var CloudLayer = function(){
  this.create.apply(this, arguments);
  return this;
};
CloudLayer.prototype = {
  create : function(){
    var $layer = document.createElement('img');
    $layer.className = 'layer';
    $layer.setAttribute('src', 'http://image.prntscr.com/image/4cf2d0e2da484df6a1fe0ebbe46e08be.png');

    this.elm = $layer;
    this.position();
  },
  position : function(){
    this.pos = {
      x : 160 - (Math.random() * 320),
      y : 80 - (Math.random() * 160),
      z : 80 - (Math.random() * 160)
    };
    this.rotate = Math.random() * 360;
    this.scale = 0.25 + Math.random();

    cssTransform(this.elm, {
      translateX : this.pos.x + 'px',
      translateY : this.pos.y + 'px',
      translateZ : this.pos.z + 'px',
      rotateZ : this.rotate + 'deg',
      scale : this.scale
    });
  },
  update : function(){
    cssTransform(this.elm, {
      translateX : this.pos.x + 'px',
      translateY : this.pos.y + 'px',
      translateZ : this.pos.z + 'px',
      rotateY : -1 * View.rotateY + 'deg',
      rotateX : -1 * View.rotateX + 'deg',
      rotateZ : this.rotate + 'deg',
      scale : this.scale
    });
  }
};


function update(){
  for(var i=0; i < Clouds.list.length; i++){
    var cloud = Clouds.list[i];


    var x = -0.3 - Math.random() * 0.1;
    cloud.move(x, 0, 0);


    for(var j=0; j < cloud.layers.length; j++){
      var layer = cloud.layers[j];
      layer.update();
    }
  }
  requestAnimationFrame(update);
}


window.setInterval(function(){
  Clouds.addCloud();
}, 7000);

Clouds.addCloud();

update();
