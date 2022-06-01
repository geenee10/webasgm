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
    audio.src = "https://rr1---sn-vgqsknly.googlevideo.com/videoplayback?expire=1654086229&ei=9AWXYuTQNs6n8wT50K_oBw&ip=168.196.239.96&id=o-AKg6IOMaYHunzMbo4hZr9q6LqWt3paMB7NV8elcM6Bel&itag=18&source=youtube&requiressl=yes&spc=4ocVCwgC3gRQRSI8wEaPr-B4K7yn&vprv=1&mime=video%2Fmp4&ns=eQV6WExi9foPAiTuSJdBCJgG&cnr=14&ratebypass=yes&dur=3716.655&lmt=1637002922694060&fexp=24001373,24007246&c=WEB&txp=6218224&n=vNpJFO5892MqkQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOzpZ3MVmbHLCC4uhsOotbQb5OFA0PZ07oYw0o4XOP9CAiATt7oyIhx4pdJQHAcBW5llsCkv3pO0VTrxw7mHxhLs2Q%3D%3D&redirect_counter=1&cm2rm=sn-ab5eel7e&req_id=32b217cb017fa3ee&cms_redirect=yes&cmsv=e&mh=8o&mip=1.248.221.71&mm=34&mn=sn-vgqsknly&ms=ltu&mt=1654063979&mv=D&mvi=1&pl=0&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgP_ofrt23iX4UZU3no_VAkFcS_RU1FBvFHakMkWyhcsMCIQD2WWtzv7DOMpAgXaEp25siD4HQsNowJrdZbx6MRtuPFQ%3D%3D";
    document.querySelector(".plbtn2").classList.add("sel");
    var btn = document.getElementById("play");
    btn.innerHTML = "play_arrow";
    
}
function goFirstVdo(){
    rmSel();
    var audio = document.getElementById("ado");
    audio.src = "https://rr4---sn-a5meknsd.googlevideo.com/videoplayback?expire=1654087139&ei=gwmXYo2FAdLnigT6q5eYCg&ip=209.107.196.69&id=o-AGiNvBz9C2Bomo2zaraWouwtGNeDXHwDRHM0T4Z-abR3&itag=18&source=youtube&requiressl=yes&spc=4ocVC1TUi1AEsARCMSu7bzW8oH6S&vprv=1&mime=video%2Fmp4&ns=bPD8_JQGPLo5U6h92Xe77DIG&cnr=14&ratebypass=yes&dur=422.928&lmt=1643198792622081&fexp=24001373,24007246&c=WEB&txp=6218224&n=GQFQXe_6niQRcA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgI6C5blqeBiiJvUWOMXWaSd9H5-r4JhSJiwPTzbSlUUICIQD0zZI4hpvD8QPJgyaPkoBmn9qapEUxCNHW5890-LZegw%3D%3D&redirect_counter=1&cm2rm=sn-5uay67l&req_id=b2668669d93ea3ee&cms_redirect=yes&cmsv=e&mh=Kc&mip=1.248.221.71&mm=34&mn=sn-a5meknsd&ms=ltu&mt=1654064969&mv=u&mvi=4&pl=22&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgMxHlueicxIdMwFaeqrIM4qhwL-7rv0xuvKe1WSZ8vYICIQDbJEB5Uw3U-kM8UOyLgN0EzOFn7T-G5F_p7qvg_MmQJg%3D%3D";
    document.querySelector(".plbtn1").classList.add("sel");
    var btn = document.getElementById("play");
    btn.innerHTML = "play_arrow";
}