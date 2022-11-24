onload = principal;

let ctx1;
let ctx2;

function principal() {
    let canvas1 = document.getElementById("myCanvas1");
    ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();

    ctx1.lineWidth = 2;
    ctx1.strokeStyle = "black";
    ctx1.moveTo(10, 10);
    ctx1.lineTo(160, 10);

    ctx1.moveTo(160, 10);
    ctx1.lineTo(160, 70);

    ctx1.moveTo(160, 70);
    ctx1.lineTo(100, 70);

    ctx1.moveTo(100, 70);
    ctx1.lineTo(100, 100);

    ctx1.moveTo(100, 100);
    ctx1.lineTo(40, 100);

    ctx1.moveTo(40, 100);
    ctx1.lineTo(40, 130);

    ctx1.moveTo(70, 130);
    ctx1.lineTo(130, 130);

    ctx1.moveTo(130, 130);
    ctx1.lineTo(130, 100);

    ctx1.moveTo(130, 100);
    ctx1.lineTo(160, 100);

    ctx1.moveTo(160, 100);
    ctx1.lineTo(160, 160);

    ctx1.moveTo(160, 160);
    ctx1.lineTo(10, 160);

    ctx1.moveTo(10, 160);
    ctx1.lineTo(10, 40);

    ctx1.moveTo(10, 70);
    ctx1.lineTo(70, 70);

    ctx1.moveTo(70, 70);
    ctx1.lineTo(70, 40);

    ctx1.moveTo(70, 40);
    ctx1.lineTo(100, 40);

    //lineas sueltas
    ctx1.moveTo(40, 10);
    ctx1.lineTo(40, 40);

    ctx1.moveTo(130, 70);
    ctx1.lineTo(130, 40);

    ctx1.stroke();


    let canvas2 = document.getElementById("myCanvas2");
    ctx2 = canvas2.getContext("2d");
    ctx2.beginPath();
    ctx2.fillStyle = "#754E26";
    ctx2.fillRect(65,60,40,70);
    ctx2.fill();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle="#4D86D6";
    ctx2.arc(85, 45, 15, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle="red";
    ctx2.arc(80, 45, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fill();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle="red";
    ctx2.arc(90, 45, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fill();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "#754E26";
    ctx2.strokeRect(66, 130, 12, 25)
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "#754E26";
    ctx2.strokeRect(92, 130, 12, 25)
    ctx2.stroke();


    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "754E26";
    ctx2.moveTo(65, 60);
    ctx2.lineTo(45, 85);

    ctx2.moveTo(75, 70);
    ctx2.lineTo(55, 95);

    ctx2.moveTo(45, 85);
    ctx2.lineTo(55, 95);
    

    ctx2.moveTo(105, 60);
    ctx2.lineTo(125, 85);

    ctx2.moveTo(95, 70);
    ctx2.lineTo(115, 95);

    ctx2.moveTo(125, 85);
    ctx2.lineTo(115, 95);
    ctx2.stroke();

    
}