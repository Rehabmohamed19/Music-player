var playlist = ['https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3',
'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3',
'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3',
'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3',
'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'];

var ul = document.getElementById('MyList')
var audio=document.getElementById('myAudio')
var btn=document.querySelector(".btn")
// var li=document.querySelector(".li")
for (let index = 0; index < playlist.length; index++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    let a = document.createElement('a');
    li.appendChild(a);
    a.href = playlist[index];
    
    a.addEventListener("click",(e)=>{
        e.preventDefault();
        audio.src=e.target.href
        audio.play();
    })
    a.innerHTML += "Song Number" + (index+1);
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 

var x = document.getElementById("myAudio");
x.src = playlist[0];


function playAudio() { 
  x.play(); 
} 
function pauseAudio() { 
  x.pause(); 
} 

var lastSong = null;
var selection = null;
function RandomPlay() { 
    x.addEventListener("ended", function(e) {
        while(selection == lastSong){
            selection = Math.floor(Math.random() * playlist.length);
        }
        lastSong = selection;
        e.target.src = playlist[selection];
        e.target.play();
    });
  } 
  
var index = 1;
function Playback() {
    x.addEventListener("ended", function(e) {
        if (index< playlist.length) {
            e.target.src = playlist[index];
            e.target.play();
            index++
        }
        else{
            e.target.src = playlist[0];
            e.target.play();
            index = 1;
        }
    });
}