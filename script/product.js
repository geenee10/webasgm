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