const mtp = window.parent.document.querySelector('#maintitle p');
const dsh = window.parent.document.getElementsByClassName('menut');


//상품으로 이동
function goProduct(){
    const ifrm = window.parent.document.getElementById("lm");
    const ifd = ifrm.contentDocument;
    mtp.innerText = "Product";
    for(var i = 0; i < dsh.length; i++){
        dsh[i].classList.remove('sel');
    }
    for(var i = 0; i < ifd.getElementsByClassName("men").length; i++){
        ifd.getElementsByClassName("men")[i].classList.remove('sel');
    }
    ifd.querySelector(".s").classList.add('sel');
    mtp.innerText = "Product";
}
//공지사항으로 이동
function goNotice(){
    const ifrm = window.parent.document.getElementById("lm");
    const ifd = ifrm.contentDocument;
    mtp.innerText = "Product";
    for(var i = 0; i < dsh.length; i++){
        dsh[i].classList.remove('sel');
    }
    for(var i = 0; i < ifd.getElementsByClassName("men").length; i++){
        ifd.getElementsByClassName("men")[i].classList.remove('sel');
    }
    ifd.querySelector(".f").classList.add('sel');
    mtp.innerText = "Notice";
    dsh[1].classList.add('sel');
}