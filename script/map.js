//크기 자동조절
function rSize(){
    var rm = window.parent.document.querySelector('#rm');
    if(rm.clientWidth <= 680){
        var mp = document.getElementById("mp");
        var ifm = document.getElementById("map");

        mp.style.width = rm.clientWidth - 80 + "px";
        mp.style.height = rm.clientWidth - 80 + "px";
        ifm.style.width = rm.clientWidth - 120 + "px";
        ifm.style.height = rm.clientWidth - 120 + "px";
    }
}