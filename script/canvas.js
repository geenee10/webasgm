var canvas, context;
function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	changePw()
	context.lineWidth = 2;
	changePc();
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
	var lineWid = document.getElementById("sls").value;
	var lineCol = document.getElementById("sb").value;
	var backColor = document.getElementById("sc").value;
	var shapeWidth = document.getElementById("w").value;
	var shapeHeight = document.getElementById("h").value; 
	var scch = document.getElementById("scch");
	var sbch = document.getElementById("sbch");
	var shp = document.getElementById("sh").value;


	context.beginPath();
	if(shch.checked){
		if(scch.checked){
			context.fillStyle = backColor;
			if(sbch.checked){
				context.strokeStyle = lineCol;
				context.lineWidth = lineWid;
				if(shp == "rect"){
					context.rect(startX * 1.08 - shapeWidth / 2, startY * 1.08  - shapeHeight / 2, shapeWidth, shapeHeight);
					context.fillRect(startX * 1.08 - shapeWidth / 2, startY * 1.08  - shapeHeight / 2, shapeWidth, shapeHeight);
				} else {
					context.arc(startX * 1.08, startY * 1.08, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.arc(startX * 1.08, startY * 1.08, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.fill();
				}
				context.stroke();
			} else{
				if(shp == "rect"){
					context.fillRect(startX * 1.08 - shapeWidth / 2, startY * 1.08 - shapeHeight / 2, shapeWidth, shapeHeight);
				} else {
					context.arc(startX * 1.08, startY * 1.08, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.fill();
				}
				
			}
		} else if(sbch.checked){
			context.strokeStyle = lineCol;
			context.lineWidth = lineWid;
			if(shp == "rect"){
				context.rect(startX * 1.08 - shapeWidth / 2, startY * 1.08  - shapeHeight / 2, shapeWidth, shapeHeight);
			} else {
				context.arc(startX * 1.08, startY * 1.08, shapeWidth / 2, shapeHeight / 2, 0, 360);
			}
			
			context.stroke();
		} else {
			alert("도형 그리기 영역에서 도형 색상 또는 선 색상을 적용해주세요.")
		}
	} else {
		context.moveTo(startX * 1.08, startY * 1.08);
		context.lineTo(curX * 1.08, curY * 1.08);
	}
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

//배경색 변경
function changeBg(){
	var col = document.getElementById("bgc").value;
	var bg = document.getElementById("canvas");

	bg.style.backgroundColor = col;
}
//펜 색 변경
function changePc(){
	var col = document.getElementById("pc").value;
	context.strokeStyle = col;
}
//펜 두께 변경
function changePw(){
	var wid = document.getElementById("pw").value;
	context.lineWidth = wid;
}
//지우기
function clr(){
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	context.clearRect(0, 0, canvas.width, canvas.height);
}
//도형 그리기
function drawShape(){
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	var lineWid = document.getElementById("sls").value;
	var lineCol = document.getElementById("sb").value;
	var backColor = document.getElementById("sc").value;
	var shapeWidth = document.getElementById("w").value;
	var shapeHeight = document.getElementById("h").value; 
	var scch = document.getElementById("scch");
	var sbch = document.getElementById("sbch");
	var shp = document.getElementById("sh").value;
	var y = document.getElementById("y").value;
	var x = document.getElementById("x").value;

	
	context.beginPath();
		if(scch.checked){
			context.fillStyle = backColor;
			if(sbch.checked){
				context.strokeStyle = lineCol;
				context.lineWidth = lineWid;
				if(shp == "rect"){
					context.rect(x - shapeWidth / 2, y - shapeHeight / 2, shapeWidth, shapeHeight);
					context.fillRect(x - shapeWidth / 2, y - shapeHeight / 2, shapeWidth, shapeHeight);
				} else {
					context.arc(x, y, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.arc(x, y, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.fill();
				}
				context.stroke();
			} else{
				if(shp == "rect"){
					context.fillRect(x - shapeWidth / 2, y - shapeHeight / 2, shapeWidth, shapeHeight);
				} else {
					context.arc(x, y, shapeWidth / 2, shapeHeight / 2, 0, 360);
					context.fill();
				}
				
			}
		} else if(sbch.checked){
			context.strokeStyle = lineCol;
			context.lineWidth = lineWid;
			if(shp == "rect"){
				context.rect(x - shapeWidth / 2, y - shapeHeight / 2, shapeWidth, shapeHeight);
			} else {
				context.arc(x, y, shapeWidth / 2, shapeHeight / 2, 0, 360);
			}
			context.stroke();
		} else {
			alert("도형 그리기 영역에서 도형 색상 또는 선 색상을 적용해주세요.")
		}

	
}