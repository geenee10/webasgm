//상단 메뉴바 선택
function clk () {
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    var a = document.getElementsByClassName("menut");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('sel');
    }
    for(var i = 0; i < ifd.getElementsByClassName("men").length; i++){
        ifd.getElementsByClassName("men")[i].classList.remove('sel');
    }
}
//지도로 이동
function goMap (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    
    ifd.querySelector(".t").classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Map";
    document.querySelector(".pa").classList.add('sel');
}
//대시보드(홈)로 이동
function goMain (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Main";
    document.querySelector(".dsh").classList.add('sel');
}
//공지사항으로 이동
function goNotice (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Notice";
    document.querySelector(".n").classList.add('sel');
}
//canvas로 이동
function goCanvas (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Canvas";
    document.querySelector(".dsh").classList.add('sel');
}
//Product로 이동
function goProduct (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Product";
    document.querySelector(".dsh").classList.add('sel');
}
//Media로 이동
function goMedia (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".t").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Education";
    document.querySelector(".pa").classList.add('sel');
}
//Game로 이동
function goMedia (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Game";
    document.querySelector(".pa").classList.add('sel');
}