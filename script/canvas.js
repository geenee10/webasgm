var canvas, context;
function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	context.lineWidth = 2; // 선 굵기를 2로 설정
	context.strokeStyle = "white";

	// 마우스 리스너 등록. e는 MouseEvent 객체
	canvas.addEventListener("mousemove", function (e) { move(e) }, false);
	canvas.addEventListener("mousedown", function (e) { down(e) }, false);
	canvas.addEventListener("mouseup", function (e) { up(e) }, false);
	canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

var startX=0, startY=0; // 마우스의 마지막 포인터 좌표
var drawing=false;
function draw(curX, curY) { 
	context.beginPath();
	context.moveTo(startX * 1.08, startY * 1.08);
	context.lineTo(curX * 1.08, curY * 1.08);
	context.stroke();
}
function down(e) { 
	startX = e.offsetX; startY = e.offsetY;
	drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
	if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
	var curX = e.offsetX, curY = e.offsetY;
	draw(curX, curY);	
	startX = curX; startY = curY;
}
function out(e) { drawing = false; }