const age = prompt("Введите ваш возраст:");

if (age === null || age.trim() === "" || isNaN(Number(age))) {
    alert("Введите число");
} else {
    const userAge = Number(age);

    if (userAge < 18) {
        alert("Вам доступ запрещён");
    } else if (userAge <= 60) {
        alert("Добро пожаловать");
    } else {
        alert("Вы слишком взрослый для этого сайта");
    }
}
