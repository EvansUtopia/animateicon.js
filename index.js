var star = `<img id="animate-star" style="position: absolute;" src="https://oa932w8s4.qnssl.com/simple_collect.png"/>`;

//Animate() will be a function for any DOM element
Object.prototype.Animate = function(options){

  //setup initial options
  var initalOptions = {
    type: 'star',
    onPressed: function(){},
    onReleased: function(){}
  };

  //put the image in DOM
  this.innerHTML = star;

  //setup user options
  var Icon = document.getElementById('animate-star');
  var Opt = {
    type: options.type || initalOptions.type,
    onPressed: options.onPressed || initalOptions.onPressed,
    onReleased: options.onReleased || initalOptions.onReleased
  }

  //setup motions
  var motion = function(){
    Opt.onPressed();
    Icon.style.left = '0px';
    var t = setInterval(function(){
      var left = Icon.style.left.replace('px','')/1;
      if(left > -3900){
        Icon.style.left = (left - 100) + 'px';
      } else {
        clearInterval(t);
      }
    },30);
    this.removeEventListener('click', motion);
    this.addEventListener('click', cancel);
  }.bind(this);

  var cancel = function(){
    Opt.onReleased();
    Icon.style.left = '0px';
    this.removeEventListener('click', cancel);
    this.addEventListener('click', motion);
  }.bind(this);

  this.addEventListener('click', motion);

}