


var to = 0;
var focus = 00;
var delay = 2;
var increment = 20;
var pos = 0;

function changeFocus(x){
    var frame = document.getElementById('textframe');
    to = -x*1500;
    pos = x;
    slide(frame);
}

function slide(frame){
  setTimeout(function (){
    // i = i + increment;
    if(focus < to){
      focus = focus + increment;
      frame.style.marginLeft = String(focus) + "px";
      slide(frame);
    }
    else if(focus > to){
      focus = focus - increment;
      frame.style.marginLeft = String(focus) + "px";
      slide(frame);
    }
    else{
      end_slide();
    }
    // delay = min(delay, 20)
  }, delay);
}

function end_slide(){
  buttons = document.getElementsByClassName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  buttons[pos].classList.add("active");
}
