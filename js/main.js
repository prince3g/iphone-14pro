   $(document).ready(function(){
    $('.fixed-top').click(function(){
    $('.dropdown-screen').toggleClass('show-dropdown-screen');
    });
  });

   $(document).ready(function(){
    $('.drop-body').click(function(){
    $('.dropdown-screen').removeClass('show-dropdown-screen');
    });
  });

 $(document).ready(function(){
    $('.charging-toggler').click(function(){
    $('.charging-screen').toggleClass('show-charging-screen');
    $('.charging-toggler').removeClass('show-charging-line');
    });
  });

 $(document).ready(function(){
    $('.charging-screen').click(function(){
    $('.charging-screen').removeClass('show-charging-screen');
    $('.charging-toggler').toggleClass('show-charging-line');
    });
  });



 $(document).ready(function(){
    $('.scale-sel-1').click(function(){
    $('.scale-sel-1').addClass('active-scale');
    $('.scale-sel-2').removeClass('active-scale');
    $('.photo-sec').removeClass('scale-photo-sec');
    });
  });

 $(document).ready(function(){
    $('.scale-sel-2').click(function(){
    $('.scale-sel-2').addClass('active-scale');
    $('.scale-sel-1').removeClass('active-scale');
    $('.photo-sec').addClass('scale-photo-sec');
    });
  });




 $(document).ready(function(){
    $('.cam-thumb').click(function(){
    $('.cam-thumb').toggleClass('scale-cam-thumb');
    });
  });


 $(document).ready(function(){
    $('.camera-toggler').click(function(){
    $('.camera-screen').addClass('toggle-camera-screen');
    });
  });

  $(document).ready(function(){
    $('.close-camera').click(function(){
    $('.camera-screen').removeClass('toggle-camera-screen');
    });
  });








function renderTime(){
  var mydate = new Date();
  var year = mydate.getYear();
  if (year < 1000){
    year +=1900
  }
  
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  var dayarray = new Array("Sunday","Monday","Tuesday","Wedsday","Thusday","Friday","Saturday");
  var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var currentTime = new Date();
var h = currentTime.getHours();
var m = currentTime.getMinutes();
if (h == 24){
  h = 0;
}else if(h > 12){
  h = h - 0;
}
if(h < 10){
  h = "0" + h;
}
if(m < 10){
  m = "0" + m;
}


  var myTime = document.getElementById("top-time");
  myTime.textContent = "" +h+ ":" +m;
  myTime.innerText = "" +h+ ":" +m;


  var myTimem = document.getElementById("lock-time");
  myTimem.textContent = "" +h+ ":" +m;
  myTimem.innerText = "" +h+ ":" +m;


var myYear = document.getElementById("date-main");
  myYear.textContent = "" +dayarray[day]+ ", " +daym+ " " +montharray[month];
  myYear.innerText = "" +dayarray[day]+ ", " +daym+ " " +montharray[month];



  setTimeout("renderTime()", 1000);
}
renderTime();



















let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;
});

click_button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    // data url of the image
    console.log(image_data_url);
});