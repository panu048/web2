vdocument.write("<h2>วิเคราะห์คะแนนสอบ</h2>");

let scores = [78, 92, 45, 67, 88, 54, 39, 81, 95, 72];
let totalScore = 0;
let passCount = 0;
let failCount = 0;

document.write("คะแนนทั้งหมด : ", scores, "<br>");

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];

  if (scores[i] >= 50) {
    passCount++;
  } else {
    failCount++;
  }
}

let averageScore = totalScore / scores.length;

document.write("คะแนนรวม : ", totalScore, "<br>");
document.write("คะแนนเฉลี่ย : ", averageScore, "<br>");
document.write("จำนวนคนที่สอบผ่าน : ", passCount, " คน<br>");
document.write("จำนวนคนที่สอบไม่ผ่าน : ", failCount, " คน<br>");

document.write("<br><hr><br>");

document.write("<h2>ร้านกาแฟ</h2>");

let sales = [120, 85, 150, 95, 200, 60, 175];
let totalSales = 0;
let highestSales = sales[0];
let lowestSales = sales[0];

for (let j = 0; j < sales.length; j++) {
  let cups = sales[j];
  let status = "";

  if (cups > 150) {
    status = "Excellent";
  } else if (cups >= 100) {
    status = "Good";
  } else {
    status = "Need Improvement";
  }

  document.write("Day ", j + 1, " : ", cups, " cups - ", status, "<br>");

  totalSales += cups;

  if (cups > highestSales) {
    highestSales = cups;
  }
  if (cups < lowestSales) {
    lowestSales = cups;
  }
}

let averageSales = totalSales / sales.length;

document.write("<br>-------------------<br><br>");
document.write("Total Sales : ", totalSales, " cups<br><br>");
document.write("Average Sales : ", averageSales.toFixed(2), " cups<br><br>");
document.write("Highest Sales : ", highestSales, " cups<br><br>");
document.write("Lowest Sales : ", lowestSales, " cups<br>");