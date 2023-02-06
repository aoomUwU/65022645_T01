let randNum = Math.floor(Math.random() * 101);
i = 0
function GN(){
    i += 1
    const Guess_Number = document.getElementById('G_N').value;
    if (Guess_Number==randNum) {alert("ถูกต้อง ค่าที่ถูกคือ : "+randNum+' คุณทายไปทั้งหมด : '+i+' ครั้ง')}
    else if (Guess_Number>randNum) {alert("มากกว่า")}
    else if (Guess_Number<randNum) {alert("น้อยกว่า")}
    
    
}