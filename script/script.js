// document.getElementsByClassName("main-title")[0].style.color = "red";//орбращение по классу и изменение цвета

//Обработчик событий

//функция заставляет при нажанитии на кнопку"посмотреть автомобили" плавно скролить к нужному блоку
document.getElementById("main-action").onclick = function(){
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

//функция скролла при нажатии на кнопки "забронировать"
let buttons = document.getElementsByClassName("car-button");
for (let i  = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

//Проверка, что все поля заполнены
document.getElementById("price-action").onclick = function(){
    if (document.getElementById("name").value === ""){
        alert("Заполните, пожалуйста, Ваше имя");
    } else if(document.getElementById("phone").value === ""){
        alert("Укажите, пожалуйста, Ваш телефон");
    } else if (document.getElementById("car").value === ""){
        alert("Укажите, пожалуйста, интерсующую Вас модель авто");
    } else {
        alert("Спасибо за заявку, мы свяжемся с Вами в ближайшее время");
    }

}

// функция добавления смещения главного фона при скроллинге странице
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 10) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
    })
});