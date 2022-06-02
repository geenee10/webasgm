function opn(ths){
    var r = Math.round(Math.random());
    if (r == 1){
        document.getElementById("show").style.display = "block";
    } else{ 
        document.getElementById("sh").style.display = "block";
    }
    ths.src = "../img/present_box_open.png"
    
}
function cls(){
    document.getElementById("show").style.display = "none";
    document.getElementById("sh").style.display = "none";

    const rm = window.parent.document.querySelector('#rm');

    window.parent.document.querySelector('#maintitle p').innerText = "Main";

    rm.src = "dashboard.html";
    
}