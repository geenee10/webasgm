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
//canvas 기록 저장유무
function canvasRem(){
    const ifrm = document.getElementById("rm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    if (document.getElementById("maintitle").innerText == "Canvas"){

        canvas = ifd.getElementById("canvas");
	    context = canvas.getContext("2d");

	    
        if(context.getImageData(0, 0, canvas.width, canvas.height).data.some(channel => channel !== 0)){
            var x = confirm("현재 작성중인 내용이 있습니다. 저장하시겠습니까?");
            if(x){
                alert("저장되었습니다.");
                context.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
}
//좌측메뉴선택 함수
function lmSel(ths){
    const ifrm = document.getElementById("lm");
    const ifw = ifrm.contentWindow;
    const ifd = ifrm.contentDocument;
    var a = ifd.getElementsByClassName("men");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('sel');
    }
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
    var a = document.getElementsByClassName("m");
    var b = document.getElementsByClassName("menut");
    for(var i = 0; i < a.length; i++){
        a[i].classList.remove('msel');
    }
    for(var i = 0; i < b.length; i++){
        b[i].classList.remove('sel');
    }
    
    switch(ths){
        case 1 :
            var x = document.querySelector(".mfl");
            var y = document.querySelector(".dsh");
            break;
        case 2 :
            var x = document.querySelector(".msl");
            var y = document.querySelector(".dsh");
            break;
        case 3 :
            var x = document.querySelector(".mtl");
            var y = document.querySelector(".n");
            break;
        case 4 :
            var x = document.querySelector(".mfol");
            var y = document.querySelector(".pa");
            break;
        case 5 :
            var x = document.querySelector(".mfil");
            var y = document.querySelector(".pa");
            break;
        case 6 :
            var x = document.querySelector(".msil");
            var y = document.querySelector(".n");
            break;
        case 7 :
            var x = document.querySelector(".msevl");
            var y = document.querySelector(".pa");
            break;
    }
    y.classList.add('sel');
    x.classList.add('msel');
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
    canvasRem()
    lmSel(3);
    upText("Map");
    tmSel(4);
}
//대시보드(홈)로 이동
function goMain (){
    canvasRem()
    lmSel(1);
    upText("Main");
    tmSel(1);
}
//공지사항으로 이동
function goNotice (){
    canvasRem()
    lmSel(1);
    upText("Notice");
    tmSel(3);
}
//canvas로 이동
function goCanvas (){
    canvasRem()
    lmSel(3);
    upText("Canvas");
    tmSel(6);
}
//Product로 이동
function goProduct (){
    canvasRem()
    lmSel(2);
    upText("Product");
    tmSel(2);
}
//Media로 이동
function goMedia (){
    canvasRem()
    lmSel();
    upText("Education");
    tmSel(5);
}
//Game로 이동
function goGame (){
    canvasRem()
    lmSel();
    upText("Game");
    tmSel(7);
}