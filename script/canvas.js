var a = document.getElementById("canvas");
var cv = a.getContext("2d");

cv.strokeStyle="rgba(86, 86, 222)";
cv.lineWidth = "4";
cv.fillRect(25,25,100,100);

cv.strokeStyle="black";
cv.lineWidth = "1";
cv.beginPath();
cv.moveTo(50, 50);
cv.lineTo(100, 100);
cv.lineTo(50, 100);
cv.stroke();