const DATE = new Date();

const ADDITIONAL = $('.additional-field');

let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let fullYear = DATE.getFullYear();
let namMonth = DATE.getMonth();
let month = $('#monthNames');
let years = $('#years');
let grid = $('#grid');
$('#date').html(DATE.getFullYear());
$('#url').html(document.location.host);
let dialog = $('#dialog');

let close = () => {
    $(dialog).find('form').removeClass('edit-form');
    grid.find('.grid__list--text').removeClass('active');
    $('.editEvent').removeClass('editEvent');
    $('.modal-overlay').remove();
    let forms = $('form');
    let insertEvent = $('.insertEvent');
    if (forms.find('.valid.false')) {
        forms.find('.valid.false').removeClass('false');
    }
    $(forms).find('.input-field.valid .inp').val('').next().removeClass();
    $('.__modal.open')
        .removeClass('open')
        .css({"display": "none", "transform": "scaleX(0.7)", "opacity": "1"})
        .animate({opacity: 0}, 100);

    insertEvent.css({"display": "block", "transform": "scaleX(1)", "bottom": "0"})
        .animate({bottom: -10}, 100, function () {
            insertEvent.remove();
        });

};

$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() > 200 ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
    }), $("#toTop").click(function () {
        close();
        return $("body,html").animate({scrollTop: 0}, 400), !1
    }), $("#toTopHover").hover(function () {
        $(this).animate({opacity: 1}, 500)
    }, function () {
        $(this).animate({opacity: 0}, 500)
    })
});


function creatClendar() {
    let tr;
    let i = 0;
    for (; i < 6; i++) {
        tr = document.createElement('div');
        tr.className = "grid__list--item";
        grid[0].appendChild(tr);
    }

    grid.find('.grid__list--item:last').addClass('hidden');

    let list = grid[0].querySelectorAll('.grid__list--item');
    let a = 0;
    let result = list.length;
    let td;

    for (; a < result; a++) {
        for (let c = 0; c < 7; c++) {
            td = document.createElement('div');
            td.className = "grid__list--text";
            list[a].appendChild(td);
        }
    }

    let dataDay = {
        day: [
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
            'Вс'
        ],
        usDay: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '0'
        ]
    };

    let span;
    let dayInsert = grid[0].querySelectorAll('.grid__list--text');


    for (let key in dataDay.day) {
        span = document.createElement('span');
        span.className = "full-date__day";
        span.innerHTML = dataDay.day[key];
        dayInsert[key].appendChild(span);
    }
    for (let key in dataDay.usDay) {
        dayInsert[key].setAttribute('data-day', dataDay.usDay[key])
    }
}


function select() {

    let startDate = fullYear - 2;

    monthNames.forEach(function (item, i, monthNames) {
        let opt = document.createElement('option');
        opt.innerText = item;
        opt.value = i;
        if (i === namMonth) {
            opt.selected = true;
        }
        month[0].appendChild(opt)
    });

    let i = 0;
    for (; i < 12; i++) {
        let opt = document.createElement('option');
        opt.innerText = startDate;
        if (startDate === fullYear) {
            opt.selected = true;
        }
        years[0].appendChild(opt);
        startDate++;
    }
}


$(window).on("DOMContentLoaded", () => {

    creatClendar();

    $('#footer').removeClass('hidden');

    select();
});


(function ($) {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(".datepicker").datepicker({
        language: 'ru',
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown'
    });

    let methods = {
        overlay: function () {
            $('.modal-overlay').on('click', (e) => {
                close();
            });
        }
    };
    $.fn.modalOpenClick = function (method) {
        this.on('click', (e) => {

            close();

            let modal = this.attr('id');
            $('.' + modal + '').addClass('open')
                .css({"display": "block", "transform": "scaleX(1)", "opacity": "0"})
                .animate({opacity: 1}, 300);
            $('body').append("<div class='modal-overlay'></div>");
            $('.modal-overlay')
                .css({"display": "block", "opacity": "0"});
            methods.overlay();
        });
    };
    $.fn.modalCloseClick = function (method) {
        this.on('click', (e) => {
            close();
            methods.overlay();
        });
    };
    $.fn.modalOpen = function (method) {
        this.addClass('open')
            .css({"display": "block", "transform": "scaleX(1)", "opacity": "0"})
            .animate({opacity: 1}, 300);
        $('body').append("<div class='modal-overlay'></div>");
        $('.modal-overlay')
            .css({"display": "block", "opacity": "0"});
        methods.overlay();
    };
    $.fn.modalClose = function (method) {
        $(this)[0].reset();
        close();
        $($(this)[0])
            .find('.inp')
            .val('').next().removeClass();
        methods.overlay();
    };
})(jQuery);


$(window).on("DOMContentLoaded", () => {

    let fY = parseInt(years[0].firstChild.innerHTML);
    let lY = parseInt(years[0].lastChild.innerHTML);

    let m = namMonth;
    let y = fullYear;

    calendar(m, y);

    month.change(function () {
        m = $(this).val();

        calendar(m, y);
    });

    years.change(function () {
        y = $(this).val();

        calendar(m, y);
    });


    function changeYears(obg) {
        let i = 0;
        let res = years[0].length;
        for (; i < res; i++) {
            if (years[0].options[i].value === obg.toString()) {
                if (!years[0].options[i].selected) {
                    years[0].options[i].selected = true;
                }
            }
        }
    }

    $('#control-left').on('click', (e) => {
        m--;
        if (m === -1) {
            m = 11;
            if (fY !== y) {
                y--;
                changeYears(y);
            }
        }
        if (!month[0].options[m].selected) {
            month[0].options[m].selected = true;
        }

        calendar(m, y);
    });


    $('#control-right ').on('click', (e) => {
        m++;
        if (m === 12) {
            m = 0;
            if (lY !== y) {
                y++;
                changeYears(y);
            }
        }
        if (!month[0].options[m].selected) {
            month[0].options[m].selected = true;
        }

        calendar(m, y);
    });

    $('#control-now').on('click', (e) => {

        m = DATE.getMonth();
        y = DATE.getFullYear();

        changeYears(y);

        if (!month[0].options[m].selected) {
            month[0].options[m].selected = true;
        }

        calendar(m, y);
    });

});


let Transfer = (() => {

    let nowDate = (m, y) => {
        this.m = m;
        this.y = y;
    };

    let formSlug =(slugs)=> {
        this.s = slugs;
    };

    let periodPoint = (period, td) => {
        this.p = period;
        this.t = td;
    };

    let slugDate;

    let dn = () => {
        let arr = {};
        arr.m = this.m;
        arr.y = this.y;
        return arr;
    };

    let deleteEvent =()=> this.s;

    let date = (obg) => {
        let dateFormat;
        if (obg === 0) {
            let m = this.m;
            let y = this.y;
            let b = m - 1;
            if (b < 0) {
                y--;
                m = 11;
            } else {
                m--;
            }
            dateFormat = this.t + ',' + monthNames[m] + ',' + y;
            slugDate = this.t + ',' + m + ',' + y;
        } else if (obg === 1) {
            let m = this.m;
            let y = this.y;
            dateFormat = this.t + ',' + monthNames[m] + ',' + y;
            slugDate = this.t + ',' + m + ',' + y;
        } else if (obg === 2) {
            let m = this.m;
            let y = this.y;
            let b = m + 1;
            if (b > 11) {
                y++;
                m = 0;
            } else {
                m++;
            }
            dateFormat = this.t + ',' + monthNames[m] + ',' + y;
            slugDate = this.t + ',' + m + ',' + y;
        }
        return dateFormat;
    };

    let handler = () => {
        let dateFormat;
        switch (this.p) {
            case 'prev':
                dateFormat = date(0);
                break;
            case 'now':
                dateFormat = date(1);
                break;
            case 'next':
                dateFormat = date(2);
                break;
        }
        return dateFormat;
    };

    let slug = () => slugDate;

    return {
        insertTruDate: (m, y) => nowDate(m, y),
        insertPeriod: (period, td) => periodPoint(period, td),
        handler: handler,
        slugDate: slug,
        nowDate: dn,
        formSlug: (slugs)=> formSlug(slugs),
        deleteEvent: deleteEvent
    }
})();


function calendar(m, y) {

    grid.find('.event-container').remove();

    let month = parseInt(m);
    let year = parseInt(y);

    let now = new Date();

    now.setFullYear(year);
    now.setMonth(month);

    Transfer.insertTruDate(m, y);

    let fd = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    let ld = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    let prev = new Date(now.getFullYear(), now.getMonth(), 1);

    let day = grid.find('.grid__list--text');
    let res = day.length;
    let firstDay;
    let i = 0;
    let span;
    let b = 1;

    if (grid.find('.active')) {
        grid.find('.active').removeClass('active');
    }

    if (grid.find('.full-date__text')) {
        grid.find('.full-date__text').remove()
    }

    if (grid.find('.now-day')) {
        grid.find('.now-day').removeClass('now-day');
    }

    for (; i < res; i++) {
        if (day[i].getAttribute('data-day') !== null) {
            if (day[i].getAttribute('data-day') === fd.toString()) {
                firstDay = Number(i);
            }
        }

    }


    let lastDay = firstDay + ld;


    for (let a = firstDay; a < lastDay; a++) {
        span = document.createElement('span');
        span.className = "full-date__text now";
        span.innerHTML = b.toString();
        if (now.getDate() === b && now.getMonth() === DATE.getMonth() && now.getFullYear() === DATE.getFullYear()) {
            day[a].classList.add('now-day');
        }
        day[a].appendChild(span);
        b++;
    }

    let next = 1;
    for (let n = lastDay; n < res; n++) {
        span = document.createElement('span');
        span.className = "full-date__text next";
        span.innerHTML = next;
        day[n].appendChild(span);
        next++;
    }


    let prevLastDate = new Date(prev.setDate(prev.getDate() - 1)).getDate();
    for (let p = firstDay - 1; p >= 0; p--) {
        span = document.createElement('span');
        span.className = "full-date__text prev";
        span.innerHTML = prevLastDate.toString();
        day[p].appendChild(span);
        prevLastDate--;
    }


    let calculation = document.querySelectorAll('.prev').length + document.querySelectorAll('.now').length;
    if (calculation > 35) {
        grid.find('.grid__list--item:last').removeClass('hidden');
    } else {
        grid.find('.grid__list--item:last').addClass('hidden');
    }

    let isEventContainer = document.createElement('span');
    isEventContainer.className = "event-container";

    grid.find('.full-date__text').after(isEventContainer);
}


$(window).on("DOMContentLoaded", () => {

    grid.find('.grid__list--text').hover(
        (e) => {
            let target = e.currentTarget;
            if (!$(target).hasClass('active')) {
                if (!target.lastChild.classList.contains('insertEvent')) {
                    $(target).append("<div class='insertEvent hover'><i class='add-event tiny material-icons'>add</i></div>");
                    if (target.lastChild.classList.contains('hover')) {
                        $(target.lastChild).css({"display": "block", "transform": "scaleX(1)", "bottom": "-10px"})
                            .animate({opacity: 1, bottom: 0}, 100);
                    }
                }
            }
        },
        (e) => {
            let target = e.currentTarget;
            if (target.lastChild.classList.contains('hover')) {
                $(target.lastChild).css({"display": "block", "transform": "scaleX(1)", "bottom": "0"})
                    .animate({bottom: -10}, 100, function () {
                        $(target.lastChild).remove();
                    });
            }
        }
    );
    grid.find('.grid__list--text').on('click', (e) => {

        let target = e.target;
        let targetParent = e.currentTarget;

        if (target.classList.contains('add-event')) {
            if (!$(targetParent).hasClass('active')) {

                grid.find('.grid__list--text.active').removeClass('active');
                $('.insertEvent').remove();
                $('.editEvent').removeClass('editEvent');

                let insertEvent = document.createElement('div');
                insertEvent.cssText = 'display:block;transform:scaleX(1);bottom:0;';
                insertEvent.className = 'insertEvent click';
                insertEvent.innerHTML = '<i class="add-event tiny material-icons">add</i>';
                targetParent.appendChild(insertEvent);

                if ($('.modal1').hasClass('open')) {
                    $('.modal1.open')
                        .removeClass('open')
                        .css({"display": "none", "transform": "scaleX(0.7)", "opacity": "1"})
                        .animate({opacity: 0}, 100);
                }

                if ($(dialog).find('form').hasClass('edit-form')) {
                    $(dialog)
                        .removeClass('open')
                        .css({"display": "none", "transform": "scaleX(0.7)", "opacity": "1"})
                        .animate({opacity: 0}, 100);
                }

                $(dialog).find('form').removeClass('edit-form');
                dialog.find('form')[0].reset();
                $(dialog).find('.input-field.valid').removeClass('false').find('.inp').val('').next().removeClass();


                $(targetParent).addClass('active');

                let l = targetParent.offsetParent.offsetLeft + targetParent.offsetLeft + targetParent.clientWidth + 25;
                let t = e.pageY - targetParent.clientWidth - 25;
                if (l > 950) {
                    l = targetParent.offsetParent.offsetLeft + targetParent.offsetLeft - targetParent.clientWidth * 3;
                }

                dialog.css({'bottom': 'auto', 'left': l, 'top': t, 'right': 'auto'});

                let focusDate = targetParent.children;
                let i = 0;
                let textDate;
                let res = focusDate.length;
                for (; i < res; i++) {
                    if (focusDate[i].classList.contains('full-date__text')) {
                        textDate = i;
                    }
                }

                let td = focusDate[textDate].innerHTML;
                let period = focusDate[textDate].classList[1];

                Transfer.insertPeriod(period, td);
                $(dialog).find('.datepicker').val(Transfer.handler());
                $(dialog).find('.slug').val(Transfer.slugDate());
                dialog.modalOpen();
                let destination = $(".grid__list--text.active").offset().top - 200;
                $('html, body').animate({scrollTop: destination}, 400);
            }
        }

    });
});


$(window).on("DOMContentLoaded", () => {

    $('#dateNow').on('keydown', (e) => false);

    $('.close').on('click', (e) => {
        let target = e.currentTarget;
        let parent = target.parentNode.parentNode;
        if ($(parent).hasClass('fast-add__form')) {
            if ($(parent).find('#pd')[0].checked) {
                ADDITIONAL.slideUp()
                    .find('.input-field')
                    .removeClass('valid false')
                    .find('.inp')
                    .val('').next().removeClass();
            }
        }
        parent.reset();
        if ($(parent).find('.valid.false')) {
            $(parent).find('.valid.false').removeClass('false');
        }

        close();
    });
});


$('#modal1').modalOpenClick();


$('form').on('submit', (e) => {
    e.preventDefault();

    let form = e.originalEvent.target;
    let valid = $(form).find('.valid');
    let value = $(form).find('.value');
    let text = grid.find('.full-date__text');
    let i = 0;
    let result = valid.length;
    let bool = 0;

    for (; i < result; i++) {
        if (valid[i].firstElementChild.value === "") {
            valid[i].classList.add('false');
            bool++
        } else {
            valid[i].classList.remove('false');
        }
    }

    if (bool === 0) {
        if ($(form).hasClass('fast-add__form')) {
            if ($(form).find('#pd')[0].checked) {
                ADDITIONAL.slideUp()
                    .find('.input-field')
                    .removeClass('valid false')
                    .find('.inp')
                    .val('').next().removeClass();
            }
        }

        let data = {
            slug: value[0].value,
            event: value[1].value,
            description: value[2].value
        };


        if (!$(form).hasClass('edit-form')) {

            let arr = data.slug.split(',');
            let m = Transfer.nowDate().m;
            let y = Transfer.nowDate().y;
            let month = [];

            //'форма добовления события'


            if (text.hasClass('prev')) {
                let m = Transfer.nowDate().m;
                let y = Transfer.nowDate().y;
                let b = m - 1;
                if (b < 0) {
                    y--;
                    m = 11;
                } else {
                    m--;
                }
                month[0] = m + ',' + y;
            }

            month[1] = m + ',' + y;

            if (text.hasClass('next')) {
                let m = Transfer.nowDate().m;
                let y = Transfer.nowDate().y;
                let b = m + 1;
                if (b > 11) {
                    y++;
                    m = 0;
                } else {
                    m++;
                }
                month[2] = m + ',' + y;
            }

            let rep = data.slug.replace(/^([0-9]*),/, '');
            let div = document.createElement('span');
            div.className = "truncate insertDate";
            div.setAttribute('data-position', 'top');
            div.setAttribute('data-delay', '50');
            div.setAttribute('data-tooltip', data.event);
            div.innerHTML = "<span class='truncate insertDate__title'>" + data.event + "</span>" +
                "<span class='insertDate__slug hidden'>" + data.slug + "</span>" +
                "<span class='insertDate__description hidden'>" + data.description + "</span>";

            let isAppointedDay = (obg) => {
                let m = grid.find('.full-date__text' + obg);
                let i = 0;
                let result = m.length;
                for (; i < result; i++) {
                    if (m[i].innerText === arr[0]) {
                        $(m[i]).siblings('.event-container').append(div);
                        insertHover();
                    }
                }
            };

            month.forEach(function (item, i) {
                if (item === rep) {
                    switch (i) {
                        case 0:
                            isAppointedDay('.prev');
                            break;
                        case 1:
                            isAppointedDay('.now');
                            break;
                        case 2:
                            isAppointedDay('.next');
                            break;
                    }
                }
            });

            alert('Происходит имитация ajax запроса при добовлении события ' + data.event)

        } else {
            let change = $('.editEvent');
            change.attr('data-tooltip', data.event);
            change.find('.insertDate__title').html(data.event);
            change.find('.insertDate__description').html(data.description);

            alert('Происходит имитация ajax запроса при редактировании события ' + data.event)
        }

        close();
        $(form)[0].reset();
        $(form).find('.input-field.valid .inp').val('').next().removeClass();
    }

});


function insertHover() {

    $('.insertDate').tooltip({delay: 50});

    grid.find('.grid__list--text .event-container').hover(
        (e) => {

            let target = e.currentTarget;

            if (target.offsetParent.lastChild.classList.contains('hover')) {
                $(target.offsetParent.lastChild).css({"display": "block", "transform": "scaleX(1)", "bottom": "0"})
                    .animate({bottom: -10}, 100, function () {
                        $(target.offsetParent.lastChild).remove();
                    });
            }
        },
        (e) => {
            let target = e.currentTarget;
            let div = document.createElement('div');
            div.className = "insertEvent hover";
            div.innerHTML = "<i class='add-event tiny material-icons'>add</i>";
            if (!target.offsetParent.lastChild.classList.contains('hover')) {
                (target.offsetParent).append(div);
                $(target.offsetParent.lastChild).css({"display": "block", "transform": "scaleX(1)", "bottom": "-10px"})
                    .animate({opacity: 1, bottom: 0}, 100);
            }
        }
    );

    editingEvent();
}


function editingEvent() {

    grid.find('.insertDate').on('click', (e) => {

        let target = e.currentTarget;

        if (!$(target).hasClass('editEvent')) {

            if ($('.modal1').hasClass('open')) {
                $('.modal1.open')
                    .removeClass('open')
                    .css({"display": "none", "transform": "scaleX(0.7)", "opacity": "1"})
                    .animate({opacity: 0}, 100);
            }

            $('.editEvent').removeClass('editEvent');
            dialog.attr('style', '');
            dialog.find('form')[0].reset();
            $(dialog).find('.input-field.valid').removeClass('false').find('.inp').val('').next().removeClass();


            target.classList.add('editEvent');

            if (target.offsetParent.lastChild.classList.contains('click')) {

                $(target.offsetParent.lastChild).remove();
            }

            $(target.offsetParent).removeClass('active');


            let event = target.querySelector('.insertDate__title').innerHTML;
            let slugText = target.querySelector('.insertDate__slug').innerHTML;
            let description = target.querySelector('.insertDate__description').innerHTML;
            let arr = slugText.split(',');
            let slug = arr[0] + ',' + monthNames[arr[1]] + ',' + arr[2];

            let t = e.pageY - target.clientWidth - 25;

            let l = $(target).offset().left + target.clientWidth + 25;

            if (l > 960) {
                l = l - target.clientWidth * 4.5;
            }

            dialog.css({'bottom': 'auto', 'left': l, 'top': t, 'right': 'auto'});


            $(dialog).find('.datepicker').val(slug);
            $(dialog).find('form').addClass('edit-form');
            $(dialog).find('.slug').val(arr[0] + ',' + arr[1] + ',' + arr[2]);

            Transfer.formSlug((arr[0] + ',' + arr[1] + ',' + arr[2]).toString());

            $(dialog).find('#eventNow').val(event).siblings('label').addClass('active');
            if (description.length > 1) {
                $(dialog).find('#descriptionNow').val(description).siblings('label').addClass('active');
            }

            dialog.modalOpen();

            let destination = $(target.offsetParent).offset().top - 200;
            $('html, body').animate({scrollTop: destination}, 400);

        }
    });
}


let isDatepicker = $('#datepicker');
isDatepicker.on('change', (e) => {
    let arr = isDatepicker.val().split('.');
    if (arr[1].charAt(0) === '0') {
        arr[0] = parseInt(arr[0]);
        arr[1] = parseInt(arr[1].charAt(1)) - 1;
        arr[2] = parseInt(arr[2]);
    }
    $('.fast-add__form').find('.slug').val(arr);
});


$('#pd').on('change', (e) => {
    let form = e.originalEvent;
    if (form.target.checked) {
        ADDITIONAL.slideDown("slow")
            .find('.input-field')
            .addClass('valid');
    } else {
        ADDITIONAL.slideUp("slow")
            .find('.input-field')
            .removeClass('valid false')
            .find('.inp')
            .val('').next().removeClass();
    }
});


let search = $('#search');
search.on('input', (e) => {

    $('#search').modalCloseClick();

    let search = $(e.target);

    if (search.val().length === 1 && search.val().slice(0, 1) === ' ') {
        search.val('').blur().next().removeClass();
    } else {
        console.log('ajax');
        console.log(search.val());
    }

});


$(window).on("DOMContentLoaded", () => {
    search.on('click', (e) => {
        close();
    });

    $('#control-date').on('click', (e) => {
        close();
    });
});


$('#delete').on('click', (e) => {

    $('.editEvent').remove();
    alert('Происходит имитация ajax запроса при удалении события ' + Transfer.deleteEvent());
    close();

});