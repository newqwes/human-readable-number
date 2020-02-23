module.exports = function toReadable (number) {
    
    /* 
        Создам массив со всеми названиями чисел от 0 до 1000.
        Первые 20 чисел занесу вручную.
        Создам массив с десятками.
        Затем буду push'ить отсальные с помощью цикла for.
        Условным оператором разобью задачу на две части. Сначало вывод от 0 до 100 затем от 100 до 1000.
    */
    const stringNumbersAll = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
         "sixteen", "seventeen", "eighteen", "nineteen", "twenty"

    ]; 

    const stringNumbersDozens = ["", "", "twenty", "thirty","forty","fifty","sixty","seventy","eighty","ninety"
    ];

    for (let i = 21; i < 1000; i++) {

        // Math.floor деление без остатка в меньшую сторону
        // делим на 10 без остатка, что бы найти в массиве с десятками
        // проверяем тернарным опратором есть ли остаток от деления i%10 == 0 если нет то ни чего не передаем "",
        // если есть то добавляем пробел " " с числом из своего же массива находим его при помощи i%10 из остатка,
        // например 45%10=5 находим 5 в массиве там "five" (те числа которые были захардкожены вручную в начало)

        if (i < 100) stringNumbersAll.push(
            stringNumbersDozens[Math.floor(i/10)] + ( i%10 == 0 ? "" : " " + stringNumbersAll[i%10])
            );

        // Дальше проще, у нас уже в массиве нашем заложены числа от 0 до 100 осталось только сотни,
        // Они отличаются лишь начальной приставкой число +  " hundred"
        // за*push'у номер_сотни + hundred и если ничего дальше нет то ничего не добавлю это я в тернарном операторе отметил (i%100 == 0 ? "")
        // если есть тогда берем остаток от деления на 100 например 237%100=37 вот 37 и ищим в нашем уже созданном массиве, что там хранится thirty seven и добовляем

        else stringNumbersAll.push(stringNumbersAll[Math.floor(i/100)] + " hundred" + (i%100 == 0 ? "" : " "+stringNumbersAll[i%100]));
    }
  return stringNumbersAll[number];
}
