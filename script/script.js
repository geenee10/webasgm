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
//페이지 텍스트 수정 함수
function upText(ths){
    document.querySelector('#maintitle p').innerText = ths;
}
//좌측메뉴선택 함수
function lmSel(ths){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    
    switch(ths){
        case 1 :
            ifd.querySelector(".f").classList.add('sel');
            break;
        case 2 :
            ifd.querySelector(".s").classList.add('sel');
            break;
        case 3 :
            ifd.querySelector(".t").classList.add('sel');
            break;
        default :
    }
    
}
//상단메뉴(상위) 선택 함수
function tmSel(ths){
    switch(ths){
        case 1 :
            document.querySelector(".mfl").classList.add('msel');
            break;
        case 2 :
            document.querySelector(".msl").classList.add('msel');
            break;
        case 3 :
            document.querySelector(".mtl").classList.add('msel');
            break;
        case 4 :
            document.querySelector(".mfol").classList.add('msel');
            break;
        case 5 :
            document.querySelector(".mfil").classList.add('msel');
            break;
        case 6 :
            document.querySelector(".msil").classList.add('msel');
            break;
        case 7 :
            document.querySelector(".msevl").classList.add('msel');
            break;
    }
}
function goMenubar (){
    document.getElementById("submenubar").style.width ="80%";
    document.getElementById("menubg").style.display ="block";
    document.querySelector("#submenubar img").style.display = "block";
    document.querySelector("#submenubar ul").style.display = "block";
}

function goBack(){
    document.getElementById("submenubar").style.width ="0";
    document.getElementById("menubg").style.display ="none";
    document.querySelector("#submenubar img").style.display = "none";
    document.querySelector("#submenubar ul").style.display = "none";
}
//지도로 이동
function goMap (){
    lmSel(3);
    upText("Map");
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    tmSel(3);
}
//대시보드(홈)로 이동
function goMain (){
    lmSel(1);
    upText("Main");
    document.querySelector(".dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mfl").classList.add('msel');
}
//공지사항으로 이동
function goNotice (){
    lmSel(1);
    upText("Notice");
    document.querySelector(".n").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mtl").classList.add('msel');
}
//canvas로 이동
function goCanvas (){
    lmSel(3);
    upText("Canvas");
    document.querySelector(".dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msil").classList.add('msel');
}
//Product로 이동
function goProduct (){
    lmSel(2);
    upText("Product");
    document.querySelector("x.dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msl").classList.add('msel');
}
//Media로 이동
function goMedia (){
    lmSel();
    upText("Education");
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mfil").classList.add('msel');
}
//Game로 이동
function goGame (){
    lmSel();
    upText("Game");
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msevl").classList.add('msel');
}