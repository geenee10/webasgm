var dsh = window.parent.document.querySelector('.menut');

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

//메인으로 이동
function goMain(){
    mtp.innerText = "Main";
    for(var i = 0; i < dhs.length; i++){
        dsh[i].classList.remove('sel');
    }
    window.parent.document.querySelector('.dsh').classList.add('sel');
}
//상품으로 이동
function goProduct(){
    mtp.innerText = "Product";
    for(var i = 0; i < dhs.length; i++){
        dsh[i].classList.remove('sel');
    }
    window.parent.document.querySelector('.n').classList.add('sel');
}
//canvas로 이동
function goCanvas (){
    mtp.innerText = "Canvas";
    for(var i = 0; i < dhs.length; i++){
        dsh[i].classList.remove('sel');
    }
    window.parent.document.querySelector('.pa').classList.add('sel');
}