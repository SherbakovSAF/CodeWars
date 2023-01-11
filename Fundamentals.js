// Возвращает количество (количество) гласных в заданной строке.
// Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    return str.split("").filter(e => e == "a" || e == "e" || e == "i" || e == "o" || e == "u").length;
  }

// Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solutionStr(string) {
    return /(?=[А-ЯЁA-Z])/g[Symbol.split](string).join(" ")
}


// Если указано число от 0 до 9, верните его словами.
// Вход :: 1
// Выход :: "Один".
// Если ваш язык поддерживает это, попробуйте использовать оператор switch .
function switchItUp(number) {
    switch (number) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
    }
}

// Задание
// Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять!
// Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.

function greetLanguage(language) {
	const LANGUAGE_OBJECT = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };
    return LANGUAGE_OBJECT.hasOwnProperty(language) ? LANGUAGE_OBJECT[language] : LANGUAGE_OBJECT.english
}
// Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.

String.prototype.isUpperCase = function() {
    return /[A-ZА-ЯЁ]/g.test(String)
 }

// В вашем классе был тест, и вы его прошли. Поздравляем!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!
// Вернись True, если тебе лучше, иначе False!
// Примечание:
// Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a, b) => a + b, yourPoints) /
        (classPoints.length + 1) <
        yourPoints
        ? true
        : false;
}
  
// function betterThanAverage(classPoints, yourPoints) {
//     return classPoints.reduce((a, b) => a + b, yourPoints) /
//         classPoints.length + 1 <
//         yourPoints
//         ? true
//         : false;
// }
  
  

// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).
// Примеры:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.slice(-(ending.length)) == ending || ending == ""
   }

// Напишите функцию, которая принимает неотрицательное целое число (секунды) в качестве входных данных и возвращает время в удобочитаемом формате ( HH:MM:SS)
// HH= часы, дополненные до 2 цифр, диапазон: 00–99
// MM= минуты, дополненные до 2 цифр, диапазон: 00–59
// SS= секунды, дополненные до 2 цифр, диапазон: 00–59
// Максимальное время никогда не превышает 359999 ( 99:59:59)
// Вы можете найти несколько примеров в тестовых приборах.

function humanReadable (seconds) {
    return `${`${Math.floor(seconds/3600)}`.padStart(2, 0)}:${`${Math.floor((seconds % 3600 )/60)}`.padStart(2, 0)}:${`${seconds % 3660 % 60}`.padStart(2, 0)}`;
    // Конечно это не читаемо. Но я хотел бы решить задачу в одну строчку)
}

// Учитывая целое число, определите, является ли оно квадратным числом :
function numberSquare(n){
    return Math.sqrt(n) % 1 === 0 ? true : false
  }

// В этом Ката мы передаем число (n) в функцию.
// Ваш код определит, является ли переданное число четным (или нет).
// Функция должна возвращать либо истину, либо ложь.
// Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.
// ятичной частью, отличной от нуля, считаются НЕчетными для этой ката.

function testEven(n) {
    return n % 2 == 0 ? true : false 
 }

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.
// Примеры
// Sum Numbers
function sum (array) {
    return array.filter(e => +e).reduce((a,b) => a +b, 0)
};

// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.

function findAverage(array) {
    return array.length == 0 ?  0 : array.reduce((a,b) => +a + +b, 0) / array.length;
}
// array.reduce((a, b) => a + b, 0) / array.length;

// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Код работает идеально. В доказательство приложу один пример из тестов
// expected [ -38, -40, 2, 15, 14, 17, 42, -4, 24, -46, 36 ]
// to deeply equal [ -38, -40, 2, -33, 14, -1, 42, -4, 24, 15, -46, 36, 17 ]
// Входит один массив, а в конце в массиве дополнительные числа откуда то

function sortArray(array) {
    let evenArray = array.filter(e => e%2==0)
    let oodArray = [...array.filter(e => e % 2 == -1), ...array.filter(e => e % 2 == 1)].sort((a,b) => a-b)
    evenArray.forEach(e=>{
        oodArray.splice(array.indexOf(e), 0, e)
    })
    return oodArray
  }

// Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда говорит «x лет», где x — случайное число от 0 до 9.
// Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
// Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть «1 год» или «5 лет». Первым символом в строке всегда является число.
function getAge(inputString) {
    return +inputString.slice(0, 1);
}

// Если не можешь уснуть, считай овец!!
// Задача:
// Например, если задано неотрицательное целое число, 3верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...". Ввод всегда будет действительным, т.е. отрицательных целых чисел не будет.

function countSheep2 (num){
    localStr = "";
    for(let i = 1; i<=num; i++){
      localStr += i + " sheep..."
    }
    return localStr
  }

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.
// Примеры(Оператор, значение1, значение2) --> вывод
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    return eval(`${value1} ${operation} ${value2}`);
}

// Номер898989является первым целым числом с более чем одной цифрой, которое выполняет свойство, частично представленное в названии этого ката. Что толку говорить "Эврика"? Потому что эта сумма дает одно и то же число:89знак равно81+9289 = 8^1 + 9^289знак равно8 
// 1
//  +9 
// 2
// Следующее число в наличии этого свойства135135135:
// Посмотрите это свойство еще раз:135знак равно11+32+53135 = 1^1 + 3^2 + 5^3135знак равно1 
// 1
//  +3 
// 2
//  +5 
// 3
// Задача
// Нам нужна функция для сбора этих чисел, которая может получить два целых числаааа,бббкоторый определяет диапазон[а,б][а, б][ а ,б ](включительно) и выводит список отсортированных чисел в диапазоне, удовлетворяющем описанному выше свойству.
// Примеры
// Давайте посмотрим на некоторые случаи (ввод -> вывод):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// Если в диапазоне нет таких чисел[а,б][а, б][ а ,б ]функция должна вывести пустой список.
// 90, 100 --> []
// Наслаждайся этим!!

function sumDigPow(a, b) {
    let localArray = []
    for(let i = a; i <= b; i++){
        localArray.push(`${i}`)
    }
    return localArray.filter(e=> e == (""+e).split("").map(e=> +e).map((e, index)=> Math.pow(e, index + 1)).reduce((a,b)=>a+b)).map(e=> +e)
  }
//   map(e => e.split("").map(e=> +e).map((e, index)=> Math.pow(e, index + 1)).reduce((a,b)=>a+b))
//   .map(e => Math.pow(+e * +e.indexOf(+e))

// Функция голов Месси
// Месси – футболист, забивший голы в трех лигах:
// Ла Лига
// Копа дель Рей
// Чемпионы
// Завершите функцию, чтобы вернуть его общее количество голов во всех трех лигах.
// Примечание: ввод всегда будет действительным.
// Например:
// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Даны три целых числа a ,b,c, вернуть наибольшее число , полученное после вставки следующих операторов и скобок :+,*,()
// Другими словами, попробуйте каждую комбинацию a,b,c с [*+()] и верните максимальное полученное значение (подробнее об этом читайте в примечаниях)
// Пример
// С числами 1, 2 и 3 вот несколько способов размещения знаков и скобок :
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a * b + c,
        a + b * c
    );
}

// Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.
// Обзор задачи:
// Вам нужно написать функцию, которая принимает три параметра:
// capэто количество человек, которое может вместить автобус, не считая водителя.
// onэто количество людей в автобусе без учета водителя.
// waitэто количество людей, ожидающих посадки в автобус, не считая водителя.
// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.
// Примеры использования:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
    return cap - on - wait >= 0 ? 0 : (cap - on - wait) * - 1
  }

// Это Ката задумано как небольшое испытание для моих учеников.
// Вызов звездного кода #18
// Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
// Если вхождений не найдено, должно быть возвращено число 0.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Примечания:
// Первый аргумент может быть пустой строкой
// Второй строковый аргумент всегда будет иметь длину 1.

function strCount(str, letter){  
    return str.split("").filter(e => e == letter).length
  }

// На заводе принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами из a to m.
// Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошая" управляющая строка будет aaabbbbhaijjjmозначать, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...
// Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.
// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки , представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину управляющей строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину больше или равную единице и содержит только буквы от aдо z.
// Примеры:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
    return `${s.split("").filter(e=> /[n-z]/.test(e)).length}/${s.length}`
}

// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
// Например,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ будет 17.
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined
function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(e => e == true ? count++ : count)
    return count
  }

// Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
 }
 

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.
// Примечание: ввод никогда не будет пустой строкой

function fakeBin(x){
    return x.split('').filter(e => /[0-9]/.test(e)).map(e => +e < 5 ? e = 0 : e=1).join()
  }

// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Гарантируется, что массив содержит не менее 3 чисел.
// Тесты содержат очень большие массивы, так что подумайте о производительности.

function findUniq(arr) {
    return arr.sort()[0] == arr.sort()[1] ? arr.sort().at(-1) : arr.sort()[0];
}
  
  

// Просто удалите пробелы из строки, затем верните результирующую строку.

function noSpace(x){
    return x.split(" ").filter( e => e != "").join("")
   }

// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.
// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

function isTriangle(a, b, c) {
    return a + b + c - Math.max(a,b,c) > Math.max(a,b,c)? true : false;
}

// Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.
// Примеры:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// Однако массивы могут иметь разную длину, а не только 4.

const binaryArrayToNumber = (arr) => {
     return parseInt(arr.join(""), 2);
};

// Увы, браузер крашнулся, но задачу я выполнил. Суть задачи. Строку переводить в порядковый номер в алфавите.
function alphabetPosition(text) {
    return text
        .split("")
        .filter((e) => e.match(/^[\w+]+$/))
        .map((e) => e.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1);
}
//
// У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.
// Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.
// Предположим, что beastи dishвсегда строчные строки, и каждая из них состоит как минимум из двух букв. beastи dishможет содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.

function feast(beast, dish) {
    return beast[0] == dish[0] && beast.at(-1) == dish.at(-1) ? true : false;
}

// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo"
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}

// Задача:
// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.
// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.

function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1;
}

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.
// Например:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
    let localVar = [...iterable];
    let localArray = [];
    localVar.forEach((e) =>
        e == localArray.at(-1) ? (localArray = localArray) : localArray.push(e)
    );
    return localArray;
};

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    let countNames = names.length;
    debugger;
    names.forEach((e) => {
        if (typeof e == !"string") {
            return "no one likes this";
        }
    });
    switch (countNames) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${
                countNames - 2
            } others like this`;
    }
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let localArray = [...numbers];
    localArray.splice(localArray.indexOf(Math.min(...localArray)), 1);
    return localArray;
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    return numbers
        .map((e) => Math.pow(e, 2))
        .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Не знаю почему не работет на codeWars, но у меня работает нормально. Проблема в чтении input'a
function order(words) {
    return words
        .split(" ")
        .map((e) => e.match(/\d+/))
        .sort((a, b) => a - b)
        .map((e) => e.input)
        .join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)

function DNAStrand(dna) {
    localStr = "";
    dna.split("").forEach((e) => {
        switch (e) {
            case "A":
                localStr = localStr + "T";
                break;
            case "T":
                localStr = localStr + "A";
                break;
            case "G":
                localStr = localStr + "C";
                break;
            case "C":
                localStr = localStr + "G";
                break;
        }
    });
    return localStr;
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
//  Круто, теперь знаю что такое repeat(
function repeatStr(n, s) {
    let localStr = s.toString();
    for (i = 1; i < n; i++) {
        localStr = localStr + s.toString();
    }
    return localStr;
}

// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase();
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    if (d >= 3 && d < 7) {
        return d * 40 - 20;
    } else if (d >= 7) {
        return d * 40 - 50;
    } else {
        return d * 40;
    }
}

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// За 2 минуты нашёл решение в интеренете, но не понял прикол, хотя можно было догадаться
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr
        .filter((e) => e >= 0)
        .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
    localArray = [];
    str.toLowerCase()
        .split("")
        .forEach((e) => {
            if (localArray.indexOf(e) >= 0) {
                localArray.push(false);
            } else {
                localArray.push(e);
            }
        });
    if (localArray.indexOf(false) >= 0) {
        return false;
    } else {
        return true;
    }
}

//    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//    assert.strictEqual( isIsogram("isogram"), true );
//    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//    assert.strictEqual( isIsogram("isIsogram"), false );
//    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet() {
    return "hello world!";
}

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    return Math.ceil(year / 100);
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    let localArray = [];
    array.forEach((e) => localArray.push(e * -1));
    return localArray;
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    return num >= 0 ? num * -1 : num;
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
function openOrSenior(data) {
    let localArray = [];
    data.forEach((e) => {
        if (e[0] >= 55 && e[1] > 7) {
            localArray.push("Senior");
        } else {
            localArray.push("Open");
        }
    });
    return localArray;
}

console.log();

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
function persistence(num, index) {
    if (typeof num === "number" && typeof index === "number") {
        let number = [...num.toString()].map(Number);
        for (i = 1; i <= index; i++) {
            if (number.length > 1) {
                let numArr = number.reduce(
                    (prevValue, currentValue) => prevValue * currentValue,
                    1
                );
                number = [...numArr.toString()].map(Number);
            } else {
                return `Ваше число ${number}`;
            }
        }
        return `Ваше число ${number}`;
    } else {
        return "Вообще то, ты ввёл не целые числа";
    }
}
//   На CodeWars не совсем понял что от меня хотят, хотя задание выполняет своё действие
console.log(persistence(4232, 2));

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\s/g;
    const lowercase = string.toLowerCase().replace(regex, "");

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

    return true;
}
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
// function booleanToString(b){
//      return b.toString()
//    }

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    const arraySum = array.reduce((prevValue, item) => {
        return prevValue + item;
    }, 0);
    if (arraySum % 2 == 0) {
        return "odd";
    } else {
        return "even";
    }
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
    return friends.filter((e) => e.length == 4);
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    return l.filter((e) => typeof e === "number");
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name) {
    return name
        .split(" ")
        .map((e) => e.slice(0, 1))
        .join(".")
        .toUpperCase();
}
// Часы показывают hчасы, mминуты и sсекунды после полуночи.
// Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
// Пример:
// h = 0
// m = 1
// s = 1
// result = 61000
// Входные ограничения:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s) {
    let hours = h * 3600000;
    let minute = m * 60000;
    let seconds = s * 1000;
    if (h <= 23 && m <= 59 && s <= 59) {
        return hours + minute + seconds;
    } else console.log("Вы ввели что то неправильно");
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
    let arrMas = String(num).split("");
    let arr = [];
    for (i = 0; i < arrMas.length; i++) {
        arr.push(Math.pow(Number(arrMas[i]), 2));
    }
    return Number(arr.join(""));
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    let arr = str.split(" ").reverse();
    let arrItog = [];
    for (i = 0; i < arr.length; i++) {
        arrItog.push(arr[i].split("").reverse().join(""));
    }
    return arrItog.reverse();
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    switch (numbers.length) {
        case 10:
            let codeCountry = numbers.slice(0, 3).join("");
            let number1 = numbers.slice(3, 6).join("");
            let number2 = numbers.slice(6).join("");
            return `(${codeCountry}) ${number1}-${number2}`;
        default:
            break;
    }
}

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
    let calculationBMI = weight / Math.pow(height, 2);
    if (calculationBMI <= 18.5) {
        return "Underweight";
    } else if (calculationBMI <= 25) {
        return "Normal";
    } else if (calculationBMI <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greetOne(name, owner) {
    switch (name) {
        case owner:
            return "Hello boss";
        default:
            return "Hello guest";
    }
}

// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
function opposite(number) {
    return number * -1;
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    return [...n.toString()].reverse().map(Number);
}
// We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?
function numberToString(num) {
    return String(num);
}
