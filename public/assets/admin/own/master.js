////////////////////////////////////////////////////////////////////////////
//************************* Hamid Teimouri *****************************//
////////////////////////////////////////////////////////////////////////////
(function ($) {
    $(document).ready(function () {
        // Bootstrap Tooltip
        // $('[data-toggle="tooltip"]').tooltip();
        $("input.number_format").keyup(function () {
            var num = this.value.replace(/[^\d]/g, '');
            if (num.length > 3)
                num = num.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            this.value = num;
        });

        // Panel Loading
        $(".adminLoader").fadeOut('slow');
    });
})(jQuery);


function showNotification_iziToast(type, text, overlay, timeout) {

    if (typeof(overlay) === undefined) {
        overlay = true;
    }
    if (typeof(timeout) === undefined) {
        timeout = 3000;
    }
    var positionElm = 'topCenter';

    if (type == 'success') {
        iziToast.success({
            message: text,
            rtl: true,
            position: positionElm,
            close: true,
            overlay: overlay,
            timeout: timeout
        });
    } else if (type == 'error') {
        iziToast.error({
            message: text,
            rtl: true,
            position: positionElm,
            close: true,
            overlay: overlay,
            timeout: timeout
        });
    } else if (type == "info") {
        iziToast.info({
            message: text,
            rtl: true,
            position: positionElm,
            close: true,
            overlay: overlay,
            timeout: timeout
        });
    } else if (type == 'warning') {
        iziToast.warning({
            message: text,
            rtl: true,
            position: positionElm,
            close: true,
            overlay: overlay,
            timeout: timeout
        });
    }


}

function checkNationalCode(code) {


    if (code === "1111111111") {
        return;
    }
    if (code === "1234567891") {
        return;
    }

    var L = code.length;


    if (L < 8 || parseInt(code, 10) == 0) return false;
    code = ('0000' + code).substr(L + 4 - 10);
    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    var c = parseInt(code.substr(9, 1), 10);
    var s = 0;
    for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
    s = s % 11;
    return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
    return true;
}


