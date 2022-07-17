var question = document.querySelectorAll('.question');
for (var i = 0; i < question.length; i++) {
    const questions = question[i];
    var btn = questions.querySelector('.wrap-question');
    btn.addEventListener('click', () => {
        showInput(questions)
    })
}

function showInput(element) {
    for (var i = 0; i < question.length; i++) {

        if (element !== question[i]) {
            question[i].classList.remove('show-text');
        }
    }
    element.classList.toggle('show-text');
}

//Add number
var addNumber = document.getElementById('addNumber');
const array = [];
addNumber.onclick = function () {
    //input
    var numberAdds = Number(document.getElementById('numberAdds').value);
    //output

    //progress
    var arrays = addNumbers(numberAdds, array)
    resultNumberAdd.innerHTML = array
}
function addNumbers(number, array) {
    array.push(Number(number));
    return array
}

//Sum
var sum = document.getElementById('sum');
sum.onclick = function () {
    var sumresult = sumPlus(array);
    var resultSum = document.getElementById('resultSum');
    resultSum.innerHTML = sumresult
}
function sumPlus(array) {
    var output = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            output += array[i];
        }
    }
    return output;
}


//Đếm số dương 
var countPlus = document.getElementById('countPlus');
countPlus.onclick = function () {
    var sumresult = sumCountPlus(array);
    var resultCountPlus = document.getElementById('resultCountPlus');
    resultCountPlus.innerHTML = sumresult
}
function sumCountPlus(array) {
    var plusNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            plusNumber++;
        }
    }
    return plusNumber;
}

//số nhỏ nhất trong mảng
var minNumber = document.getElementById('minNumber');
minNumber.onclick = function () {
    var sumresult = numberMins(array);
    var resultMinNumber = document.getElementById('resultMinNumber');
    resultMinNumber.innerHTML = ' Số nhỏ nhất trong mảng ' + sumresult
}
function numberMins(array) {
    var minNumbers = array[0];
    for (var i = 1; i < array.length; i++) {
        if (minNumbers > array[i]) {
            minNumbers = array[i]
        }
    }
    return minNumbers;
}

//số dương nhỏ nhất trong mảng
var minPlusNumber = document.getElementById('minPlusNumber');
minPlusNumber.onclick = function () {
    var sumresult = minPlusNumbers(array, numberMins);
    var resultMinPlusNumber = document.getElementById('resultMinPlusNumber');
    resultMinPlusNumber.innerHTML = ' Số dương nhỏ nhất trong mảng ' + sumresult
}
function minPlusNumbers(array, callback) {
    var plusNumber = 0;
    var arrayPlusNumber = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arrayPlusNumber.push(array[i]);
        }
    }
    var minNumber = callback(arrayPlusNumber)
    return minNumber;
}

//Tìm số chẵn cuối cùng
var lastEvenNumber = document.getElementById('lastEvenNumber');
lastEvenNumber.onclick = function () {
    //input
    var resultlastEvenNumber = document.getElementById('resultlastEvenNumber');
    //output
    var output = 0;
    var sumresult = lastNumbers(array);
    if (sumresult.length === 0) {
        return resultlastEvenNumber.innerHTML = -1;
    } else {
        output = sumresult.pop();

    }
    resultlastEvenNumber.innerHTML = ' Số chẵn cuối cùng trong mảng ' + output

}
console.log(-10 % 2 == 0);
function lastNumbers(array) {
    var plusNumber = 0;
    var arrayLastNumber = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayLastNumber.push(array[i]);
        }
    }
    return arrayLastNumber;
}

// Đổi số
var replaceNumber = document.getElementById('replaceNumber');
replaceNumber.onclick = function () {
    //input
    var numberReplace1 = Number(document.getElementById('numberReplace1').value);

    var numberReplace2 = Number(document.getElementById('numberReplace2').value);
    //progresss

    var replaceresult = replaceNumbers(array, numberReplace1, numberReplace2);
    var resultReplace = document.getElementById('resultReplace');
    resultReplace.innerHTML = ' Mảng sau khi đổi: ' + replaceresult
}
function replaceNumbers(array, number1, number2) {

    var element = array[number1];
    //C1:
    // array.splice(number1, 1);
    // array.splice(number2, 0, element);
    //C2
    array[number1] = array[number2];
    array[number2] = element
    return array;
}
// var replaced = [1,2,3,4,5]
// var element = replaced[2]; //2
// var b =  replaced.splice(2, 1);//1345
//  var c=   replaced.splice(3, 0, element);
// console.log(element,b,c,replaced)

// Sắp xếp theo thứ tự tăng dần

var sortNumber = document.getElementById('sortNumber');
sortNumber.onclick = function () {
    //input
    //progresss

    var sortResults = sortNumbers(array);
    var resultSort = document.getElementById('resultSort');
    resultSort.innerHTML = ' Mảng sau khi sắp xếp: ' + sortResults
}
function sortNumbers(array) {

    //C1:Dùng hàm sort:
    // array.sort(function (a, b) {
    //     return a - b
    // })

    //C2:lấy từng số trong mảng so sánh với các số còn lại
    for (var i = 0; i < array.length; i++) {
        var indexMin = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        var number1 = array[i];
        array[i] = array[indexMin];
        array[indexMin] = number1
    }

    return array;
}


// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1

var intergerNumber = document.getElementById('intergerNumber');
intergerNumber.onclick = function () {
    //input
    var resultInterger = document.getElementById('resultInterger');
    //progresss

    var interResults = firstNumber(array, checkSNT);
    resultInterger.innerHTML = ' Số nguyên đầu tiên là: ' + interResults
}
function firstNumber(array, callback) {

    var arraySNT = [];
    for (var i = 0; i < array.length; i++) {
        var checkSNTS = callback(array[i]);
        if (checkSNTS) {
            arraySNT.push(array[i])
        }
    }
    if (arraySNT.length === 0) {
        return -1
    }
    var firstInterger = arraySNT.shift();
    return firstInterger
}
function checkSNT(number) {
    var checkSNTs = true;
    var soBiChia = 2;
    if (number <= 1) {
        checkSNTs = false;
        return checkSNTs
    }
    for (soBiChia; soBiChia <= Math.sqrt(number); soBiChia++) {
        if (number % soBiChia == 0) {
            checkSNTs = false;
            break;
        }
    }
    return checkSNTs;
}


// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrayRealNumber = [];
var addRealNumber = document.getElementById('addRealNumber');
addRealNumber.onclick = function () {
    //input
    var realNumbers = Number(document.getElementById('realNumbers').value);
    addNumbers(realNumbers, arrayRealNumber);
    //output
    var output = 0;
    //progress
    var resultaddReal = document.getElementById('resultaddReal');

    resultaddReal.innerHTML = arrayRealNumber

}



var realNumber = document.getElementById('realNumber');
realNumber.onclick = function () {
    //input
    var resultReal = document.getElementById('resultReal');
    //progress

    var interResults = isInter(arrayRealNumber);
    var lengthinter = interResults.length
    if (lengthinter === 0) {
        return resultReal.innerHTML = 'Không có số nguyên nào cả'
    }
    resultReal.innerHTML = 'Có ' + lengthinter + ' số nguyên';
}
function isInter(array) {
    var intergerNumberss = [];
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            intergerNumberss.push(array[i]);
        }
    }
    return intergerNumberss
}

// So sánh số lượng số âm và dương xem số nào nhiều hơn.
var compareNumber = document.getElementById('compareNumber');
compareNumber.onclick = function () {
    //input
    var resultCompare = document.getElementById('resultCompare');
    //progress

    var interResults = compare(array);

    resultCompare.innerHTML = interResults
}
function compare(array) {
    var arrayPlus = [];
    var arrayMinus = [];
    var output = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arrayPlus.push(array[i]);
        } else {
            arrayMinus.push(array[i]);
        }
    }
    if (arrayPlus.length > arrayMinus.length) {
        output = 'Số dương > Số âm'
    } else if (arrayPlus.length < arrayMinus.length) {
        output = ' Số âm > Số dương'

    } else if (arrayPlus.length == arrayMinus.length) {
        output = 'Số dương = Số âm'

    }
    return output
}
