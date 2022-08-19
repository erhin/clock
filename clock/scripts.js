var clockFrame = document.getElementById('clockFrame');
var secondWing = document.getElementById('secondWing');
var minuteWing = document.getElementById('minuteWing');
var hourWing = document.getElementById('hourWing');
var time = document.getElementById('time');


function setClock(){
  var date = new Date();

  var currentSecond = date.getSeconds();
  var currentMinute = date.getMinutes();
  var currentHour = date.getHours();

  var sdeg = (360/60)*currentSecond; // 1sec rot 6 deg
  var mdeg = (360/60)*currentMinute; // 1min rot 6 deg
  var hdeg = (360/12)*currentHour;//1hour rot 30 deg
  var color = ['red','blue','orange'];

  clockFrame.style.border = '5px solid ' + color[Math.floor(Math.random()*color.length)];

  secondWing.style.transform = 'rotate(' +sdeg+ 'deg)';
  minuteWing.style.transform = 'rotate(' +mdeg+ 'deg)';
  hourWing.style.transform   = 'rotate(' +hdeg+ 'deg)';

  time.innerHTML = currentHour + ':' + currentMinute + ':' + currentSecond;
}

setClock();
setInterval(setClock,1000);