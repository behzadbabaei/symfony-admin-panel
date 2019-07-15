/* change arabic font to persian*/
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.toPersianCharacter = function () {
    var string = this;
    var obj = {
        'ك': 'ک',
        'دِ': 'د',
        'بِ': 'ب',
        'زِ': 'ز',
        'ذِ': 'ذ',
        'شِ': 'ش',
        'سِ': 'س',
        'ى': 'ی',
        'ي': 'ی',
        '١': '۱',
        '٢': '۲',
        '٣': '۳',
        '٤': '۴',
        '٥': '۵',
        '٦': '۶',
        '٧': '۷',
        '٨': '۸',
        '٩': '۹',
        '٠': '۰',
    };

    Object.keys(obj).forEach(function (key) {
        string = string.replaceAll(key, obj[key]);
    });
    return string
};

function removeSeparatorFromNumber(number) {
    return number.replace(/[^0-9 ]/g, "")
}

/*For Legal User*/
function checkNationalID(national_ID) {
    var code = national_ID;
    var L = code.length;

    if (L < 11 || parseInt(code, 10) == 0) return false;

    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    var c = parseInt(code.substr(10, 1), 10);
    var d = parseInt(code.substr(9, 1), 10) + 2;
    var z = new Array(29, 27, 23, 19, 17);
    var s = 0;
    for (var i = 0; i < 10; i++)
        s += (d + parseInt(code.substr(i, 1), 10)) * z[i % 5];
    s = s % 11;
    if (s == 10) s = 0;
    return (c == s);
}

function checkNationalCode(code) {


    if (code === "1111111111") {
        return;
    }
    if (code === "2222222222") {
        return;
    }
    if (code === "3333333333") {
        return;
    }
    if (code === "4444444444") {
        return;
    }
    if (code === "5555555555") {
        return;
    }
    if (code === "6666666666") {
        return;
    }
    if (code === "7777777777") {
        return;
    }
    if (code === "8888888888") {
        return;
    }
    if (code === "9999999999") {
        return;
    }
    if (code === "1234567891") {
        return;
    }
    if (code === "0000000000") {
        return;
    }
    if (code === "1234567891") {
        return;
    }

    let L = code.length;


    if (L < 8 || parseInt(code, 10) === 0) return false;
    code = ('0000' + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) === 0) return false;
    let c = parseInt(code.substr(9, 1), 10);
    let s = 0;
    for (let i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c === s) || (s >= 2 && c === (11 - s));
}

function checkCartDigit(code) {

    var L = code.length;
    if (L < 16 || parseInt(code.substr(1, 10), 10) == 0 || parseInt(code.substr(10, 6), 10) == 0) return false;
    var c = parseInt(code.substr(15, 1), 10);
    var s = 0;
    var k, d;
    for (var i = 0; i < 16; i++) {
        k = (i % 2 == 0) ? 2 : 1;
        d = parseInt(code.substr(i, 1), 10) * k;
        s += (d > 9) ? d - 9 : d;
    }
    return ((s % 10) == 0);
}