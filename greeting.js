// const obj = {
//     name:"Jhon",
//     age: "20"
// };
// console.log(obj);

// //действие stringify

// const data = JSON.stringify(obj);
// console.log(data); //переобразование в строку
// // JSON мы передаем объект или строку и с ними взаимодействуем

// console.log(JSON.parse(data)); //преобразование в объект



//работа с запросами 

//HTTP,HTTPS(защищенный)- это протоколы передачи данных
// NETWORK - сеть,где отражаются все запросы,
// которые были сделанны на странице
//запросы отправлюят массив,объект,массив-объект
// Метод GET - отправляется на сервер,берет данные и возвращает эти данные нам 
//Метод  POST - отправляет данные на сервер от нас
//Метод DELETE - удаляет какой-то контент
//Метод PATCH - меняет существующие данные

//HEADERS - общие информации на сайте
//PREVIEW - то,что лежит на сервере
//RESPONSE - то,что мы плучаем

//СТАТУС КОД - ЭТО О ТОМ КАК НАШ СЕРВЕР ОТВЕТИЛ НА НАШ ЗАПРОС 
// STATUS CODE 200 - успешные,он говорит о том,что данные вернулись
// 300 - перенапрвляет на определенные страницы 
//КЭШ - данные пользователя,которые хранит в акк. пользователя
//400 - ошибка
//500 - ошибка со стороны бэкенд разработчика
//AJAX - тип запросов



// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest(); //создание запроса
//     request.open("GET", "data.json"); //указываем меттод запроса и его путь
//     request.setRequestHeader("Content-type", "application/json"); //укзание типа данных,создание заголовка
//     request.send(); //отправка запроса
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response);
//         console.log(data);
//         document.querySelector(".name").innerHTML = data.name;
//         document.querySelector(".age").innerHTML = data.age;
//     }); 
// })


//NEW - СОЗДАЕТ КЛАССЫ В OOP,ПЕРЕДАЕТ ВСЕ ДАННЫЕ,КОТОРЫЕ БЫЛИ ЗАПИСАНЫ

//Типы данных
//srt num bool undef null nan - примитивы типы данных
//arr obj - объект

// const num = 5;
// let num2 = num + 10;

// console.log(num);
// console.log(num2);

const obj = {
    name: 'Alex',
    num:"1",
};

const obj2 = {...obj};

obj.name = 'Jhon';

console.log(obj)
console.log(obj2)

















