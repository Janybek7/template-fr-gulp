/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Подключение основного файла стилей
import '../scss/style.scss'

// Плагины ============================================================================================================================================================================================================================================================================================================

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
//import './libs/wNumb.min.js';

// Основные модули ========================================================================================================================================================================================================================================================
import * as flsFunctions from './files/functions.js'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
// (i) Для подключения в шаблон раскомментировать
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
// (i) Для подключения в шаблон раскомментировать
// flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
// (i) Для подключения в шаблон раскомментировать
// flsFunctions.showMore();

// Работа с формами ========================================================================================================================================================================================================================================================
import * as flsForms from './files/forms/forms.js'

/* Работа с полями формы: добавление классов, работа с placeholder. */
// flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
// flsForms.formSubmit(true);

/* (В работе) Работа с масками. Для включения ??? (подсказок в консоли) передать true */
// flsForms.formMasks(true);

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль формы "показать пароль" */
// flsForms.formViewpass();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. Для включения ??? (подсказок в консоли) передать true */
//flsForms.formSelect(false);

// Модуль работы с ползунком (noUiSlider) ===================================================================================================================================================================================================================================================================================
/*
Подключение плагина ползунка noUiSlider и настройка выполняется в файле js/files/forms/nouislider.js
Документация по работе в шаблоне:
Документация плагина:
*/
// (i) Для подключения в шаблон раскомментировать
// import "./files/forms/nouislider.js";

// Модуль работы с попапами (hystmodal) ===================================================================================================================================================================================================================================================================================
/*
Подключение плагина hystModal и настройка выполняется в файле js/files/popups.js
Документация по работе в шаблоне:
Документация плагина: https://addmorescripts.github.io/hystModal/index_ru.html
Сниппет (HTML): pl
*/
// (i) Для подключения в шаблон раскомментировать
// import "./files/popups.js";

// Модуль работы с подсказками (tippy) ====================================================================================================================================================================================================================================================================================
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// (i) Для подключения в шаблон раскомментировать
// import "./files/tippy.js";

// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// (i) Для подключения в шаблон раскомментировать
// import "./files/sliders.js";

// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML):
*/
// (i) Для подключения в шаблон раскомментировать
// import './files/scroll/simplebar.js';

/*
Ленивая (отложенная) загрузка картинок
Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
Документация плагина: https://github.com/verlok/vanilla-lazyload
Сниппет(HTML):
*/
// (i) Для подключения в шаблон раскомментировать
// import './files/scroll/lazyload.js';

// Функции работы скроллом ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import * as flsScroll from './files/scroll/scroll.js'

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// Для включения ??? (подсказок в консоли), указать параметр true
// (i) Для подключения в шаблон раскомментировать
// flsScroll.scrollWatcher(false);

// Плавная навигация по странице
// (i) Для подключения в шаблон раскомментировать
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// (i) Для подключения в шаблон раскомментировать
// flsScroll.headerScroll();

// Функционал липкого блока
// (i) Для подключения в шаблон раскомментировать
// flsScroll.stickyBlock();

// Галерея ========================================================================================================================================================================================================================================================

/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// (i) Для подключения в шаблон раскомментировать
// import "./files/gallery.js";

// Прочее ========================================================================================================================================================================================================================================================
/* Подключаем файл со своим кодом */
import './files/script.js'
//============================================================================================================================================================================================================================================
