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
const dsh = window.parent.document.getElementsByClassName('menut');

//메인으로 이동
function goMain(){
    mtp.innerText = "Main";
    for(var i = 0; i < dsh.length; i++){
        dsh[i].classList.remove('sel');
    }
    dsh[0].classList.add('sel');
}
//상품으로 이동
function goProduct(){
    mtp.innerText = "Product";
    for(var i = 0; i < dsh.length; i++){
        dsh[i].classList.remove('sel');
    }
    dsh[0].classList.add('sel');
}
//canvas로 이동
function goCanvas (){
    mtp.innerText = "Canvas";
    for(var i = 0; i < dsh.length; i++){
        dsh[i].classList.remove('sel');
    }
    dsh[2].classList.add('sel');
}