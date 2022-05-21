//상단 메뉴바 선택
function clk (obj) {
    var a = document.getElementsByClassName("menut");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('sel');
    }
    obj.classList.add('sel');
}
//지도로 이동
function goMap (){
    document.querySelector('#maintitle p').innerText = "Map";
}
//대시보드(홈)로 이동
function goMain (){
    document.querySelector('#maintitle p').innerText = "Main";
}