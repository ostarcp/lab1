var pList = document.querySelectorAll('p');
for(var i = 0; i < pList.length;i++){
    pList[0].innerText = "MSSV: PH06122";
    pList[1].innerText = "TENSV: LE HOANG HAI";
    pList[2].innerText = "NGANH: WEB";
}
var a=Number(prompt("nhập số a:"));
var b=Number(prompt("nhập số b:"));
var c = a + b;
document.write("Kết quả phép tính "+a +"+" + b +" = " +c);