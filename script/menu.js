//좌측 메뉴바 선택
function mclk (obj) {
    var a = document.getElementsByClassName("men");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('sel');
    }
    obj.classList.add('sel');
}
const mtp = window.parent.document.querySelector('#maintitle p');
const frm = document.querySelector('#rm');

function goMain(){
    mtp.innerText = "Main";
}
function goProduct(){
    mtp.innerText = "Product";
}
//canvas로 이동
function goCanvas (){
    mtp.innerText = "Canvas";
}