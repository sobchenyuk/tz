<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">

    <title>Календарь событий</title>

    <meta name="description" content="Профессиональное создание лэндинг пейдж, сайта компании,
        интернет магазина Верстка: landing page, шаблоны лэндингов +380669353050"/>
    <meta name="keywords" content="создание сайтов, создавать сайт, создание партнерского сайта,
         сайт разработка, создание сайта с нуля "/>
    <meta name="generator" content="optimist.biz.ua">
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@sobchenyuk"/>
    <meta name="twitter:title" content="Создание сайта с `0` | Wordpress | Joomla | Landing | Laravel5"/>
    <meta name="twitter:description" content="Профессиональное создание лэндинг пейдж, сайта компании,
        интернет магазина Верстка: landing page, шаблоны лэндингов +380669353050">
    <meta name="twitter:image" content="//optimist.biz.ua/img/site.png">
    <meta property="og:site_name" content="Создание сайта с `0` | Wordpress | Joomla | Landing | Laravel5">
    <meta property="og:url" content="//optimist.biz.ua/">
    <meta property="og:title" content="Создание сайта с `0` | Wordpress | Joomla | Landing | Laravel5">
    <meta property="og:title" content="Создание сайта с `0` | Wordpress | Joomla | Landing | Laravel5">
    <meta property="og:type" content="movie">
    <meta property="og:url" content="//optimist.biz.ua/">
    <meta property="og:image" content="//optimist.biz.ua/img/site.png">
    <meta property="og:site_name" content="Создание сайта с `0` | Wordpress | Joomla | Landing | Laravel5">
    <meta property="og:description" content="Профессиональное создание лэндинг пейдж, сайта компании,
        интернет магазина Верстка: landing page, шаблоны лэндингов +380669353050">


    <link rel="shortcut icon" href="#" type="image/x-icon">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <link rel="stylesheet" href="./css/master.css">

</head>
<body>

<div class="wrapper">
    <section class="wrapper-top">
        <div class="container">

            <h3 class="center-align">Календарь событий</h3>

            <div class="row">
                <div class="col s8 fast-add__box">
                    <div class="row">
                        <div class="col s8 fast-add">
                            <a id="modal1" class="waves-effect waves-light btn blue modal-trigger">Быстрое добовление</a>
                        </div>
                    </div>

                    <div class="__modal modal1" style="z-index: 1003;">
                        <form id="fast-add__form" class="fast-add__form" action="#">
                            <div class="modal-content">
                                <h5>Добавить событие</h5>
                                <input type="hidden" name="slug" class="slug value">
                                <div class="row">
                                    <div class="input-field col s12 valid">
                                        <input id="datepicker"
                                               name="datepicker"
                                               type="text" class="datepicker inp" autocomplete="off">
                                        <label class="active"
                                               for="datepicker">Укажите дату</label>
                                    </div>
                                    <div class="input-field col s12 valid">
                                        <input id="event"
                                               name="event"
                                               type="text" class="event inp value" autocomplete="off">
                                        <label class="active"
                                               for="event">Событие</label>
                                    </div>
                                    <p class="checkbox-field">
                                        <input type="checkbox" id="pd"/>
                                        <label for="pd">Описание события</label>
                                    </p>
                                    <div class="additional-field" style="display: none">
                                        <div class="input-field col s12">
                                            <textarea id="description"
                                                      name="description"
                                                      class="materialize-textarea inp value"></textarea>
                                            <label class="active"
                                                   for="description">Описание...</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="__modal-close
                                waves-effect
                                btn-flat
                                waves-light
                                fast-add__create
                                blue-grey lighten-5">
                                    Создать
                                </button>
                            </div>
                            <div class="close__btn">
                                <button type="button" class="close">
                                    <span>×</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="col s4 wrapper-top__search">

                    <div class="row">
                        <form class="col s12">
                            <div class="row wrapper-top__form">
                                <div class="input-field col s8 top-form__field">
                                    <input value="" id="search" type="text" class="validate" autocomplete="off">
                                    <label class="active" for="search">Быстрый поиск события</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="wrapper-control">
        <div class="container">

            <div class="row">
                <div class="col s6">
                    <div id="control-date" class="row">

                        <div class="col s1">
                            <button id="control-left" class="waves-effect waves-light btn blue-grey lighten-4">
                                <i class="tiny material-icons">chevron_left</i>
                            </button>
                        </div>

                        <div class="col s5 wrapper-s-w">
                            <div id="control-select" class="row">
                                <div class="input-field col s6">
                                    <select id="monthNames" class="browser-default blue-grey lighten-5"></select>
                                    <label></label>
                                </div>
                                <div class="input-field col s6">
                                    <select id="years" class="browser-default blue-grey lighten-5"></select>
                                    <label></label>
                                </div>
                            </div>
                        </div>

                        <div class="col s1">
                            <button id="control-right" class="waves-effect waves-light btn blue-grey lighten-4">
                                <i class="tiny material-icons">chevron_right</i>
                            </button>
                        </div>

                        <div class="col s2">
                            <button id="control-now" class="waves-effect waves-light btn blue-grey lighten-4">
                                Сегодня
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <section id="calendar">

        <div class="container">

            <div id="grid" class="grid__list"></div>

        </div>
    </section>
</div>


<footer id="footer" class="page-footer hidden grey grey darken-1">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Календарь событий</h5>
                <p class="grey-text text-lighten-4">
                    Автор проекта:
                    <a href="https://www.facebook.com/andreysobchenyuk" class="link" target="_blank">
                        <b><i>Собченюк Андрей Владимирович</i></b>
                    </a>
                </p>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Контакты</h5>
                <ul>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            Mтс: +380(66)9353050
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            Telegram: +380(66)9353050
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            Viber: +380(66)9353050
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            Skype: sobchenyuk
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            optimist.biz.ua@gmail.com
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            //vk.com/optimistinua
                        </a>
                    </li>
                    <li>
                        <a class="grey-text text-lighten-3" href="#!">
                            //www.facebook.com/optimist.biz.ua/
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <div class="footer-copyright">
        <div class="container">
            © 2013 - <span id="date">2018</span> <span id="url">Copyright Text</span>
            <a class="grey-text text-lighten-4 right" href="http://optimist.biz.ua/" target="_blank">
                Сайт разработчика
            </a>
        </div>
    </div>
</footer>


<div id="dialog" class="__modal open">
    <form id="form__Now" action="#">
        <div class="modal-content">
            <h5>Добавить событие</h5>
            <h5 class="edit-form__title">Изминить событие</h5>
            <input type="hidden" name="slug" class="slug value">
            <div class="row">
                <div class="input-field col s12 valid">
                    <input id="dateNow" name="datepicker" type="text"
                           class="datepicker inp hasDatepicker" autocomplete="off">
                    <label class="" for="dateNow"></label>
                </div>
                <div class="input-field col s12 valid">
                    <input id="eventNow" name="event" type="text"
                           class="event inp value" autocomplete="off">
                    <label class="" for="eventNow">Событие</label>
                </div>

                <div class="input-field col s12 valid">
                                    <textarea id="descriptionNow" name="description"
                                              class="materialize-textarea inp value"></textarea>
                    <label class="" for="descriptionNow">Описание...</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" class="__modal-close
                                waves-effect
                                btn-flat
                                waves-light
                                fast-add__create
                                blue-grey lighten-5">
                <span class="create-btn">
                  Создать
                </span>
                <span class="edit-btn">
                    Изминить
                </span>
            </button>

            <button id="delete" type="button" class="__modal-close
            delete-btn
                                waves-effect
                                btn-flat
                                waves-light
                                fast-add__create
                                blue-grey lighten-5">
                Удалить
            </button>
        </div>
        <div class="close__btn">
            <button type="button" class="close">
                <span>×</span>
            </button>
        </div>
    </form>
</div>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>


<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script src="./js/init.js"></script>

<a href="#" id="toTop" style="display: none;"><span id="toTopHover" style="opacity: 0;"></span>To Top</a>

</body>
</html>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">