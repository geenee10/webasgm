const men = window.frames['lm'].document.getElementsByClassName("men");
const s = window.frames['lm'].document.getElementsByClassName("s");
const f = window.frames['lm'].document.getElementsByClassName("f");
const t = window.frames['lm'].document.getElementsByClassName("t");

//상단 메뉴바 선택
function clk () {
    var a = document.getElementsByClassName("menut");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('sel');
    }
}
//지도로 이동
function goMap (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    t.classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Map";
    document.querySelector(".pa").classList.add('sel');
}
//대시보드(홈)로 이동
function goMain (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    f.classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Main";
    document.querySelector(".dsh").classList.add('sel');
}
//공지사항으로 이동
function goNotice (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    document.querySelector('#maintitle p').innerText = "Notice";
    document.querySelector(".n").classList.add('sel');
}
//canvas로 이동
function goCanvas (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    t.classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Canvas";
    document.querySelector(".pa").classList.add('sel');
}
//Product로 이동
function goCanvas (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    s.classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Product";
}
//Media로 이동
function goCanvas (){
    for(var i = 0; i < men.length; i++){
        men[i].classList.remove('sel');
    }
    s.classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Education";
}
console.log(document.getElementById(rm).contentWindow.document.getElementById("logo"));