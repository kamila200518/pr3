'use strict';

let a  = Number(prompt("Стоимость"));
let b = Number(prompt("Количество денег"));
if(a > b) {
    let c = a - b;
    alert("Для покупки не хватает" + c);
} else if(b > a) {
    let d  = b - a;
    alert("Покупка совершена. Сдача" + d);
} 
else {
    alert("Покупка совершена");
}


let k  = Number(prompt("Число"));
if(k > 0) {
    alert(1);
} else if(k < 0) {
    alert(-1);
}else {
    alert(0);
}



let s = Number(prompt(""));
let n = Number(prompt(""));
if(s + n < 4){
  alert("Мало");
} else{
  alert("Много");
}


let vhod = prompt('vhod');

let message = (vhod === 'Сотрудник')  
  ? 'Привет'  
  : vhod === 'Директор'  
    ? 'Здравствуйте' 
    : vhod === ''  
      ? 'Нет логина'  
      : '';    
alert(message);




let login = prompt("Введите логин:"); 
if (login === "Админ") { 
  let password = prompt("Введите пароль:"); 
  if (password === "Я главный"){ 
    alert("Здравствуйте!"); 
  }else if (password === null || password === ""){ 
    alert("Отменено"); 
  }else { 
    alert("Неверный пароль"); 
  } 
} else if (login === null ||  login === "") { 
  alert("Отменено"); 
} else { 
  alert("Я вас не знаю"); 
}
