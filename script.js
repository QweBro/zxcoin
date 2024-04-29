// Получаем ссылки на элементы
var counterElement = document.getElementById("counter");
var incrementButton = document.getElementById("incrementButton");

// Обработчик события нажатия на кнопку
incrementButton.addEventListener("click", function() {
    // Получаем текущее значение цифры
    var currentValue = parseInt(counterElement.innerText);
    // Увеличиваем значение на 1 и обновляем текст цифры на странице
    counterElement.innerText = currentValue + 1;

    // Отправляем AJAX запрос на сервер
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/update_balance", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Баланс успешно обновлен!");
        }
    };
    xhr.send(JSON.stringify({ increment: 1 })); // Отправляем на сервер информацию о том, на сколько нужно увеличить баланс
});
