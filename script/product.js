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
    var x = alert("상품이 수정되었습니다.");
}