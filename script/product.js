//전체 선택/해제
function cbsel (){
    if(document.getElementById("main_checkbox").checked==true){
        for(var i = 0; i < document.getElementsByName("cb").length; i++){
            document.getElementsByName("cb")[i].checked = true;
        }
    } else {
        for(var i = 0; i < document.getElementsByName("cb").length; i++){
            document.getElementsByName("cb")[i].checked = false;
        }
    }
}
//상품 수정 시 알림창
function al(){
    var chk = document.getElementsByClassName("ch");
    var st = document.getElementsByClassName("stat");
    var inf = document.querySelector("select");
    var nsell = document.querySelector(".nsell");
    var sell = document.querySelector(".sell");
    for(var i = 0; i < st.length; i++){
        if(chk[i].checked){
            if(st[i] == "판매중" && inf.value == "판매시작"){
                alert("이미 판매중인 상품이 포함되어 있습니다.");
            } else if(inf.value == "판매시작"){
                st[i].innerText = "판매중";
                sell.innerText = parseInt(sell.innerText) + 1;
                nsell.innerText = parseInt(nsell.innerText) - 1;
            } else if(inf.value == "판매중지"){
                st[i].innerText = "판매중지";
                sell.innerText = parseInt(sell.innerText) - 1;
                nsell.innerText = parseInt(nsell.innerText) + 1;
            }
            
        }
    }
    var x = alert("상품이 수정되었습니다.");
}