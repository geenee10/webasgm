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
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    
    ifd.querySelector(".t").classList.add('sel');
    document.querySelector('#maintitle p').innerText = "Map";
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mfol").classList.add('msel');
}
//대시보드(홈)로 이동
function goMain (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Main";
    document.querySelector(".dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mfl").classList.add('msel');
}
//공지사항으로 이동
function goNotice (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Notice";
    document.querySelector(".n").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mtl").classList.add('msel');
}
//canvas로 이동
function goCanvas (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Canvas";
    document.querySelector(".dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msil").classList.add('msel');
}
//Product로 이동
function goProduct (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Product";
    document.querySelector("x.dsh").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msl").classList.add('msel');
}
//Medix`a로 이동
function goMedia (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".t").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Education";
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".mfil").classList.add('msel');
}
//Game로 이동
function goGame (){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;

    ifd.querySelector(".f").classList.add('sel');

    document.querySelector('#maintitle p').innerText = "Game";
    document.querySelector(".pa").classList.add('sel');
    document.querySelector("#menubar_logo li").classList.remove('msel');
    document.querySelector(".msevl").classList.add('msel');
}