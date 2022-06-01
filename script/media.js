function pl(){
    var audio = document.getElementById("ado");
    var btn = document.getElementById("play");
    if(btn.innerHTML == "play_arrow"){
        audio.play();
        btn.innerHTML = "pause";
    } else if(btn.innerHTML == "pause"){
        audio.pause();
        btn.innerHTML = "play_arrow";
    }
}
function mut(){
    var audio = document.getElementById("ado");
    var btn = document.getElementById("mi");
    audio.muted = !audio.muted
    if(btn.innerText != "volume_off"){
        btn.innerText = "volume_off";
    } else if(btn.innerText == "volume_off" && audio.volume < 0.4){
        btn.innerText = "volume_down";
    } else if(btn.innerText == "volume_off" && audio.volume >= 0.4){
        btn.innerText = "volume_up";
    }
}
function vol(){
    var vo = document.getElementById("vol");
    var audio = document.getElementById("ado");
    var btn = document.getElementById("mi");

    audio.volume = vo.value * 0.1;
    if(btn.innerText == "volume_up" && audio.volume < 0.4){
        btn.innerText = "volume_down";
    } else if(btn.innerText == "volume_down" && audio.volume >= 0.4){
        btn.innerText = "volume_up";
    }
    
}
function replay(){
    var audio = document.getElementById("ado");
    var btn = document.getElementById("play");
    audio.load();
    audio.play();
    btn.innerHTML = "pause";
}
function gage(){
    var vbar = document.getElementById("playtime");
    var audio = document.getElementById("ado");
    vbar.max = audio.duration;
    vbar.value = audio.currentTime;
    if(audio.duration == audio.currentTime){
        var bol = confirm("동영상 시청이 종료되었습니다. 다시 시청하시겠습니까?");

        if (bol){
            vbar.value = 0;
            audio.play();
        }
    };
}
function gMove(){
    var vbar = document.getElementById("playtime");
    var audio = document.getElementById("ado");
    audio.currentTime = vbar.value;
    
}
function rmSel(){
    var x = document.getElementsByClassName("plbtn");
    for(var i = 0; i < x.length; i++){
        x[i].classList.remove('sel');
    }
}
function goTwoVdo(){
    rmSel();
    var audio = document.getElementById("ado");
    audio.src = "../img/forest.mp4";
    document.querySelector(".plbtn2").classList.add("sel");
    var btn = document.getElementById("play");
    btn.innerHTML = "play_arrow";
    
}
function goFirstVdo(){
    rmSel();
    var audio = document.getElementById("ado");
    audio.src = "../img/pado.mp4";
    document.querySelector(".plbtn1").classList.add("sel");
    var btn = document.getElementById("play");
    btn.innerHTML = "play_arrow";
}