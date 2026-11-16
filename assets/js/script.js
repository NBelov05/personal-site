/* ============================================================
   PersonalSite — общий скрипт: язык, меню, выбор услуг, лайтбокс
   ============================================================ */

const TG_USERNAME = "ceo_csharp";
const TG_LINK = `https://t.me/${TG_USERNAME}`;

const I18N = {
  ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.portfolio": "Портфолио",
    "nav.about": "Обо мне",
    "nav.contacts": "Контакты",
    "nav.cta": "Написать мне",

    "hero.status": "Открыт к проектам",
    "hero.name": "Никита Митрохин",
    "hero.role": "Программист",
    "hero.exp": "3 года коммерческой разработки",
    "hero.lead": "Десктоп-приложения, backend и базы данных. Беру задачу целиком: от обсуждения и проектирования до рабочего решения с инструкцией и поддержкой.",
    "hero.cta": "Обсудить задачу",
    "hero.cta2": "Смотреть портфолио",
    "hero.f1t": "Опыт",
    "hero.f1d": "3 года разработки",
    "hero.f2t": "Подход",
    "hero.f2d": "Рабочий код, а не демо",
    "hero.f3t": "Связь",
    "hero.f3d": "Telegram @ceo_csharp",

    "why.eyebrow": "Почему я",
    "why.title": "Со мной спокойно работать",
    "why.1.t": "Исходный код — ваш",
    "why.1.d": "Передаю репозиторий и инструкцию по сборке. Проект можно поддерживать без меня.",
    "why.2.t": "Цена и срок — до старта",
    "why.2.d": "Фиксированная оценка после созвона и ТЗ. Без «плавающих» часов.",
    "why.3.t": "Этапы с демо",
    "why.3.d": "Показываю результат по ходу работы, правки в рамках ТЗ входят в стоимость.",
    "why.4.t": "Поддержка после сдачи",
    "why.4.d": "Баги в рамках ТЗ исправляю бесплатно. Дальше — по договорённости.",

    "home.svc.eyebrow": "Услуги",
    "home.svc.title": "Чем могу помочь",
    "home.svc.sub": "Пять направлений. Подробности, примеры задач и выбор услуг — на странице услуг.",
    "home.svc.1.t": "Десктоп-приложения",
    "home.svc.1.s": "Delphi · Firebird · SQLite",
    "home.svc.1.d": "Нативные Windows-программы с локальной базой, печатью и оффлайн-режимом.",
    "home.svc.1.price": "от 10 000 ₽",
    "home.svc.2.t": "Backend и сервисы",
    "home.svc.2.s": "Python · asyncio · REST",
    "home.svc.2.d": "API, парсеры, Telegram-боты и автоматизация рутины.",
    "home.svc.2.price": "от 8 000 ₽",
    "home.svc.3.t": "Промышленные решения",
    "home.svc.3.s": "C# · .NET · WPF · ASP.NET",
    "home.svc.3.d": "Приложения и сервисы на .NET, рефакторинг legacy-кода.",
    "home.svc.3.price": "от 15 000 ₽",
    "home.svc.4.t": "Базы данных",
    "home.svc.4.s": "PostgreSQL · Firebird · SQLite · MS SQL",
    "home.svc.4.d": "Схемы, запросы, индексы, миграции без простоя.",
    "home.svc.4.price": "от 7 000 ₽",
    "home.svc.5.t": "Разработка сайтов",
    "home.svc.5.s": "HTML · CSS · JavaScript",
    "home.svc.5.d": "Разработка современных адаптивных сайтов для малого бизнеса, специалистов и частных проектов.",
    "home.svc.5.price": "от 10 000 ₽",
    "home.svc.more": "Все услуги →",

    "home.work.eyebrow": "Портфолио",
    "home.work.title": "Избранные проекты",
    "home.work.more": "Всё портфолио →",
    "home.work.1.d": "Кроссплатформенный органайзер кода и заметок с подсветкой 24 языков, SQLite WAL и быстрым поиском.",
    "home.work.2.d": "Автоматический сбор постов из каналов и краткие резюме через AI.",
    "home.work.3.d": "Централизованная система контроля и исполнения задач разработчика ПО с внедрением ИИ и PostgreSQL.",

    "home.steps.eyebrow": "Процесс",
    "home.steps.title": "Как строится работа",
    "home.steps.1.t": "Заявка и созвон",
    "home.steps.1.d": "Пишете в Telegram, созваниваемся, фиксирую задачу письменно.",
    "home.steps.2.t": "Оценка",
    "home.steps.2.d": "Называю цену и срок до старта. Предоплата — и начинаем.",
    "home.steps.3.t": "Разработка этапами",
    "home.steps.3.d": "Демо по ходу работы, правки в рамках ТЗ включены.",
    "home.steps.4.t": "Сдача и поддержка",
    "home.steps.4.d": "Передаю код и инструкцию. Баги в рамках ТЗ чиню бесплатно.",

    "cta.title": "Есть задача? Давайте обсудим",
    "cta.sub": "Напишите пару слов о задаче в Telegram — отвечу в течение дня и скажу, чем могу помочь.",
    "cta.go": "Написать в Telegram",

    /* ---- Услуги ---- */
    "svc.page.title": "Услуги",
    "svc.page.lead": "Пять направлений работы. Нажмите на карточку, чтобы выбрать нужное, — внизу появится кнопка отправки, и я сразу увижу, что вас интересует.",
    "svc.1.t": "Десктоп-приложения",
    "svc.1.s": "Delphi · Firebird · SQLite",
    "svc.1.d": "Нативные Windows-программы: работа с локальной базой, печать, интеграция с внешними системами и автономная работа без интернета.",
    "svc.1.l1": "Архитектура и база данных",
    "svc.1.l2": "Печать, отчёты, импорт/экспорт",
    "svc.1.l3": "Установщик и автообновление",
    "svc.2.t": "Backend и сервисы",
    "svc.2.s": "Python · asyncio · REST",
    "svc.2.d": "API, парсеры, боты и автоматизация. Интеграции между системами, фоновые задачи и надёжная обработка ошибок.",
    "svc.2.l1": "REST API и интеграции",
    "svc.2.l2": "Парсеры и Telegram-боты",
    "svc.2.l3": "Скрипты автоматизации",
    "svc.3.t": "Промышленные решения",
    "svc.3.s": "C# · .NET · WPF · ASP.NET",
    "svc.3.d": "Приложения и сервисы на .NET: типизация, тесты, чистая архитектура. Код, который не страшно дорабатывать через год.",
    "svc.3.l1": "WPF / WinForms десктоп",
    "svc.3.l2": "ASP.NET Core сервисы",
    "svc.3.l3": "Рефакторинг legacy",
    "svc.4.t": "Базы данных",
    "svc.4.s": "PostgreSQL · Firebird · SQLite · MS SQL",
    "svc.4.d": "Проектирование схем, индексы и оптимизация запросов, миграции без простоя, администрирование и разбор проблем.",
    "svc.4.l1": "Дизайн и миграция схем",
    "svc.4.l2": "Оптимизация запросов",
    "svc.4.l3": "SSMS · IBExpert",
    "svc.5.t": "Разработка сайтов",
    "svc.5.s": "HTML · CSS · JavaScript",
    "svc.5.d": "Разработка современных адаптивных сайтов для малого бизнеса, специалистов и частных проектов.",
    "svc.5.l1": "Лендинги и сайты-визитки",
    "svc.5.l2": "Небольшие многостраничные и корпоративные сайты",
    "svc.5.l3": "Адаптивная вёрстка",
    "svc.5.l4": "Формы обратной связи и необходимый функционал",
    "svc.hint": "Нажмите на карточку, чтобы выбрать услугу.",
    "svc.price.title": "Стоимость",
    "svc.price.d": "Стоимость называю после созвона и ТЗ — фиксированно, до старта, без «плавающих» часов. Оплата поэтапно: предоплата и по готовности этапов.",

    /* ---- Портфолио ---- */
    "pf.page.title": "Портфолио",
    "pf.page.lead": "Реализованные проекты и коммерческие решения. Подробности под NDA не публикую, но архитектуру и код открытых частей готов показать на созвоне.",
    "pf.task": "Задача",
    "pf.solution": "Решение",
    "pf.stack": "Стек",
    "pf.result": "Результат",
    "pf.cta": "Обсудить похожее →",
    "pf.1.tag": "Десктоп · .NET 10",
    "pf.1.t": "DevPocket — органайзер кода и технических заметок",
    "pf.1.s": "C# · .NET 10 · Avalonia UI · SQLite (WAL) · TextMate",
    "pf.1.task": "Создать 100% автономное desktop-приложение для разработчиков: быстрый доступ к сниппетам кода, техническим заметкам и шаблонам без серверов, облаков и телеметрии.",
    "pf.1.solution": "Приложение на C# / .NET 10 с MVVM-архитектурой и кроссплатформенным GUI на Avalonia UI 12. Встроен редактор кода с подсветкой синтаксиса TextMate для 24 языков, локальная база SQLite с миграциями, многокритериальный поиск и горячие клавиши.",
    "pf.1.result": "Молниеносный запуск, оффлайн-работа, экспорт в файлы с правильными расширениями, связывание заметок со сниппетами и надёжное локальное хранение данных.",
    "pf.2.tag": "Backend · Telegram-бот",
    "pf.2.t": "Бот-парсер каналов с AI-суммаризацией",
    "pf.2.s": "Python · aiogram · SQLite · DeepSeek API",
    "pf.2.task": "Автоматически забирать посты из публичных Telegram-каналов и готовить по ним краткие русскоязычные резюме и дайджесты.",
    "pf.2.solution": "Telegram-бот на aiogram: HTTP-парсер публичных лент, SQLite-хранилище, суммаризация через DeepSeek API с ретраями, фоновый планировщик sync + analyze по подпискам, команды latest/digest/status.",
    "pf.2.result": "Полностью автоматический цикл: подписка → фоновый сбор постов → готовые резюме. Покрыт тестами, работает в режиме long polling.",
    "pf.3.tag": "Промышленное ПО · ИИ",
    "pf.3.t": "CodeMe — автоматизированная система контроля задач с ИИ",
    "pf.3.s": "C# · .NET · Windows Forms · PostgreSQL · LLM API",
    "pf.3.task": "Разработать централизованную систему учёта, контроля и сопровождения задач разработчика программного обеспечения с интеллектуальным ассистентом.",
    "pf.3.solution": "Desktop-клиент на C# с многослойным доступом к данным через PostgreSQL (Npgsql) и встроенным модулем нейросетевого анализа задач, генерации описаний и контроля сроков исполнения.",
    "pf.3.result": "Сокращение рутины при распределении задач, прозрачный контроль дедлайнов и единое рабочее пространство с интеграцией внешних моделей ИИ.",
    "pf.4.tag": "Утилиты · Конвертер",
    "pf.4.t": "GeneratorXML — высокоскоростной транслятор структур в XML",
    "pf.4.s": "Delphi / FreePascal · VirtualTreeView · XLSX Engine · XML",
    "pf.4.task": "Реализовать компонентный движок для мгновенного экспорта сложных древовидных структур данных и электронных таблиц Excel в валидный XML произвольной схемы.",
    "pf.4.solution": "Модульная архитектура на Delphi/FPC: прямой парсинг .xlsx через zip-контейнеры без внешних библиотек и COM-объектов, трансляция узлов TLazVirtualStringTree, настраиваемый маппинг колонок в атрибуты/теги и кодировки UTF-8 / CP1251.",
    "pf.4.result": "Автономный исполняемый модуль без сторонних зависимостей и MS Office, скорость обработки сотен тысяч узлов в секунду и лёгкое встраивание в существующие программы.",
    "pf.5.tag": "Ваш проект",
    "pf.5.t": "Здесь может быть ваш проект",
    "pf.5.s": "Стек подберём под задачу",
    "pf.5.task": "Опишите задачу парой предложений в Telegram — скажу, как её решить, сколько это займёт и будет ли это первый кейс в новом направлении.",
    "pf.5.solution": "Фиксируем ТЗ письменно, называю цену и срок до старта, работаю этапами с демо.",
    "pf.5.result": "Рабочее решение, исходники и инструкция — ваши.",
    "pf.ph": "Скриншот проекта",

    /* ---- Обо мне ---- */
    "about.page.title": "Обо мне",
    "about.page.lead": "Меня зовут Никита Митрохин. Я программист с тремя годами коммерческой разработки: пишу десктоп-приложения, backend-сервисы и работаю с базами данных.",
    "about.how.title": "Как я работаю",
    "about.how.1.t": "Беру задачу целиком",
    "about.how.1.d": "От обсуждения и проектирования до рабочего решения: код, база, установщик или деплой, инструкция.",
    "about.how.2.t": "Пишу код, который можно поддерживать",
    "about.how.2.d": "Аккуратная структура, комментарии, без магии. Хочу, чтобы проект жил без меня, если понадобится.",
    "about.how.3.t": "Не пропадаю",
    "about.how.3.d": "На связи в Telegram, показываю демо по этапам, баги в рамках ТЗ исправляю бесплатно.",
    "about.exp": "3 года коммерческой разработки: десктоп на Delphi/Lazarus и C#, сервисы на Python и .NET, работа с базами данных.",
    "about.stack.title": "Стек",
    "about.stack.sub": "Рабочие инструменты, которыми пользуюсь в проектах каждый день.",
    "about.stack.g1": "Языки",
    "about.stack.g2": "Базы данных",
    "about.stack.g3": "Инструменты",
    "about.rules.title": "Принципы",
    "about.rules.1.q": "Фикс до старта",
    "about.rules.1.a": "Цена и срок называются после ТЗ и не меняются в процессе.",
    "about.rules.2.q": "Исходники — ваши",
    "about.rules.2.a": "Репозиторий и инструкция передаются при сдаче.",
    "about.rules.3.q": "Честно про границы",
    "about.rules.3.a": "Если задача не моя — скажу прямо и подскажу, к кому обратиться.",
    "about.rules.4.q": "Удалённо",
    "about.rules.4.a": "Созвоны и переписка в Telegram, могу подключиться к вашему экрану.",

    /* ---- FAQ ---- */
    "faq.eyebrow": "Вопросы и ответы",
    "faq.title": "Частые вопросы",
    "faq.sub": "Нажмите на вопрос, чтобы развернуть ответ.",
    "faq.1.q": "Сколько стоит разработка и как считаете бюджет?",
    "faq.1.a": "Фиксированная оценка после созвона и ТЗ. Называю сумму и срок до старта, без «плавающих» часов. Оплата поэтапно: предоплата и по готовности этапов — так обе стороны защищены.",
    "faq.2.q": "Какие сроки и можно ли срочно?",
    "faq.2.a": "Небольшой десктоп или бот — 1–3 недели; промышленное решение с базой и печатью — от месяца. Если нужен срочный MVP, делаем минимально жизнеспособную версию в первую очередь, остальное доделываем параллельно.",
    "faq.3.q": "Отдаёте ли исходный код?",
    "faq.3.a": "Да, исходники — ваши. Передаю репозиторий, инструкцию по сборке и деплою. Хочу, чтобы проект можно было поддерживать без меня — поэтому код пишу аккуратно, с комментариями и структурой.",
    "faq.4.q": "Берётесь ли за доработку чужого проекта или legacy?",
    "faq.4.a": "Да. Часто просят разобраться с Delphi или C#-приложениями, которые писал кто-то до меня. Сначала делаю аудит: что сломано, что опасно трогать, что можно быстро улучшить. Дальше — план рефакторинга по приоритетам.",
    "faq.5.q": "С какими базами работаете?",
    "faq.5.a": "PostgreSQL, Firebird (IBExpert), SQLite и MS SQL Server (SSMS). Проектирую схемы, пишу и оптимизирую запросы, настраиваю индексы, делаю миграции без простоя. Для десктопа часто Firebird/SQLite, для сервисов — PostgreSQL.",
    "faq.6.q": "Как происходит работа и оплата?",
    "faq.6.a": "Созвон → фиксирую задачу письменно → называю цену и сроки → предоплата → работа с демо по этапам → сдача, передача кода и инструкция. Правки в рамках ТЗ входят в стоимость. После сдачи — поддержка по договорённости.",
    "faq.7.q": "Работаете удалённо? Нужна ли встреча?",
    "faq.7.a": "Полностью удалённо. Созвоны и переписка в Telegram. Личные встречи не обязательны.",
    "faq.8.q": "Что с поддержкой после сдачи?",
    "faq.8.a": "Баги в рамках ТЗ исправляю бесплатно. Дальше — поддержка по договорённости: мелкие правки, консультации, обновления. Цель — чтобы проект жил и развивался, а не был «сдан и забыт».",

    /* ---- Контакты ---- */
    "ct.page.title": "Контакты",
    "ct.page.lead": "Лучший способ связаться — Telegram. Обычно отвечаю в течение дня.",
    "ct.time": "Доступность",
    "ct.timev": "На связи ежедневно, отвечаю в течение дня",
    "ct.form.title": "Написать через сайт",
    "ct.form.sub": "Заполните два поля — откроется Telegram с готовым сообщением. Ничего нигде не сохраняется.",
    "ct.form.name": "Ваше имя",
    "ct.form.nameph": "Как к вам обращаться",
    "ct.form.msg": "О задаче",
    "ct.form.msgph": "Пара предложений: что нужно сделать и к какому сроку",
    "ct.form.go": "Открыть Telegram с сообщением",
    "ct.form.err": "Заполните имя и пару слов о задаче.",

    "dock.label": "услуг выбрано",
    "dock.clear": "Сбросить",
    "dock.go": "Отправить",

    "footer.name": "Никита Митрохин",
    "footer.tag": "C# · Python · Delphi",

    "msg.hi": "Здравствуйте! Заинтересовали услуги:",
    "msg.how": "Расскажите, пожалуйста, о задаче — что нужно сделать и к какому сроку.",
    "msg.from": "Меня зовут",
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "nav.cta": "Message me",

    "hero.status": "Open to projects",
    "hero.name": "Nikita Mitrokhin",
    "hero.role": "Software Developer",
    "hero.exp": "3 years of commercial development",
    "hero.lead": "Desktop apps, backend and databases. I take the task end to end: from discussion and design to a working solution with docs and support.",
    "hero.cta": "Discuss your task",
    "hero.cta2": "View portfolio",
    "hero.f1t": "Experience",
    "hero.f1d": "3 years of development",
    "hero.f2t": "Approach",
    "hero.f2d": "Working code, not demos",
    "hero.f3t": "Contact",
    "hero.f3d": "Telegram @ceo_csharp",

    "why.eyebrow": "Why me",
    "why.title": "Easy to work with",
    "why.1.t": "Source code is yours",
    "why.1.d": "You get the repository and build instructions. The project can live on without me.",
    "why.2.t": "Fixed price upfront",
    "why.2.d": "Fixed estimate after a call and a brief. No floating hours.",
    "why.3.t": "Milestones with demos",
    "why.3.d": "I show progress along the way; revisions within scope are included.",
    "why.4.t": "Support after delivery",
    "why.4.d": "Bugs within scope fixed free. Further support by arrangement.",

    "home.svc.eyebrow": "Services",
    "home.svc.title": "How I can help",
    "home.svc.sub": "Five areas. Details, example tasks and service selection — on the services page.",
    "home.svc.1.t": "Desktop applications",
    "home.svc.1.s": "Delphi · Firebird · SQLite",
    "home.svc.1.d": "Native Windows apps with local database, printing and offline mode.",
    "home.svc.1.price": "from 10,000 ₽",
    "home.svc.2.t": "Backend and services",
    "home.svc.2.s": "Python · asyncio · REST",
    "home.svc.2.d": "APIs, parsers, Telegram bots and routine automation.",
    "home.svc.2.price": "from 8,000 ₽",
    "home.svc.3.t": "Production solutions",
    "home.svc.3.s": "C# · .NET · WPF · ASP.NET",
    "home.svc.3.d": ".NET apps and services, legacy code refactoring.",
    "home.svc.3.price": "from 15,000 ₽",
    "home.svc.4.t": "Databases",
    "home.svc.4.s": "PostgreSQL · Firebird · SQLite · MS SQL",
    "home.svc.4.d": "Schemas, queries, indexes, zero-downtime migrations.",
    "home.svc.4.price": "from 7,000 ₽",
    "home.svc.5.t": "Website development",
    "home.svc.5.s": "HTML · CSS · JavaScript",
    "home.svc.5.d": "Development of modern, responsive websites for small businesses, professionals and personal projects.",
    "home.svc.5.price": "from 10,000 ₽",
    "home.svc.more": "All services →",

    "home.work.eyebrow": "Portfolio",
    "home.work.title": "Featured projects",
    "home.work.more": "Full portfolio →",
    "home.work.1.d": "Cross-platform snippet and technical note manager with 24-language syntax highlighting, SQLite WAL and instant search.",
    "home.work.2.d": "Automatic post collection from channels with AI summaries.",
    "home.work.3.d": "Centralized task tracking and execution system for software developers with AI and PostgreSQL.",

    "home.steps.eyebrow": "Process",
    "home.steps.title": "How we work",
    "home.steps.1.t": "Request and call",
    "home.steps.1.d": "Message me on Telegram, we have a call, I fix the task in writing.",
    "home.steps.2.t": "Estimate",
    "home.steps.2.d": "Price and deadline before we start. Upfront payment — and we go.",
    "home.steps.3.t": "Staged development",
    "home.steps.3.d": "Demos along the way, revisions within scope included.",
    "home.steps.4.t": "Delivery and support",
    "home.steps.4.d": "Code and docs handed over. Bugs within scope fixed free.",

    "cta.title": "Have a task? Let's discuss",
    "cta.sub": "Drop me a few words about it on Telegram — I'll reply within a day and tell you how I can help.",
    "cta.go": "Message on Telegram",

    "svc.page.title": "Services",
    "svc.page.lead": "Five areas of work. Click a card to select what you need — a send button appears at the bottom and I'll see right away what you're interested in.",
    "svc.1.t": "Desktop applications",
    "svc.1.s": "Delphi · Firebird · SQLite",
    "svc.1.d": "Native Windows apps: local database, printing, integration with external systems and offline operation.",
    "svc.1.l1": "Architecture and database",
    "svc.1.l2": "Printing, reports, import/export",
    "svc.1.l3": "Installer and auto-update",
    "svc.2.t": "Backend and services",
    "svc.2.s": "Python · asyncio · REST",
    "svc.2.d": "APIs, parsers, bots and automation. System integrations, background jobs and reliable error handling.",
    "svc.2.l1": "REST APIs and integrations",
    "svc.2.l2": "Parsers and Telegram bots",
    "svc.2.l3": "Automation scripts",
    "svc.3.t": "Production solutions",
    "svc.3.s": "C# · .NET · WPF · ASP.NET",
    "svc.3.d": ".NET apps and services: typing, tests, clean architecture. Code you won't be afraid to maintain a year later.",
    "svc.3.l1": "WPF / WinForms desktop",
    "svc.3.l2": "ASP.NET Core services",
    "svc.3.l3": "Legacy refactoring",
    "svc.4.t": "Databases",
    "svc.4.s": "PostgreSQL · Firebird · SQLite · MS SQL",
    "svc.4.d": "Schema design, indexes and query optimization, zero-downtime migrations, administration and troubleshooting.",
    "svc.4.l1": "Schema design and migration",
    "svc.4.l2": "Query optimization",
    "svc.4.l3": "SSMS · IBExpert",
    "svc.5.t": "Website development",
    "svc.5.s": "HTML · CSS · JavaScript",
    "svc.5.d": "Development of modern, responsive websites for small businesses, professionals and personal projects.",
    "svc.5.l1": "Landing pages and business card websites",
    "svc.5.l2": "Small multipage and corporate websites",
    "svc.5.l3": "Responsive layouts",
    "svc.5.l4": "Contact forms and required functionality",
    "svc.hint": "Click a card to select a service.",
    "svc.price.title": "Pricing",
    "svc.price.d": "I quote after a call and a brief — fixed, upfront, no floating hours. Payment in milestones: upfront and per delivered stage.",

    "pf.page.title": "Portfolio",
    "pf.page.lead": "Commercial products and custom solutions. Details under NDA are not published, but architecture and code of open parts can be demonstrated on a call.",
    "pf.task": "Task",
    "pf.solution": "Solution",
    "pf.stack": "Stack",
    "pf.result": "Result",
    "pf.cta": "Discuss similar →",
    "pf.1.tag": "Desktop · .NET 10",
    "pf.1.t": "DevPocket — code snippet & tech note manager",
    "pf.1.s": "C# · .NET 10 · Avalonia UI · SQLite (WAL) · TextMate",
    "pf.1.task": "Build a 100% offline desktop developer tool: instant access to code snippets, notes and templates without servers, clouds or telemetry.",
    "pf.1.solution": "C# / .NET 10 application with MVVM architecture and cross-platform Avalonia UI 12 GUI. TextMate syntax highlighting for 24 languages, local SQLite with migrations, multi-filter search and hotkeys.",
    "pf.1.result": "Instant launch, offline-first, export to source files with proper extensions, snippet-note linking and rock-solid local storage.",
    "pf.2.tag": "Backend · Telegram bot",
    "pf.2.t": "Channel parser bot with AI summaries",
    "pf.2.s": "Python · aiogram · SQLite · DeepSeek API",
    "pf.2.task": "Automatically collect posts from public Telegram channels and prepare short Russian summaries and digests.",
    "pf.2.solution": "aiogram Telegram bot: HTTP parser of public feeds, SQLite storage, summarization via DeepSeek API with retries, background sync + analyze scheduler, latest/digest/status commands.",
    "pf.2.result": "Fully automatic loop: subscribe → background post collection → ready summaries. Covered by tests, runs in long-polling mode.",
    "pf.3.tag": "Enterprise Software · AI",
    "pf.3.t": "CodeMe — AI-powered developer task control system",
    "pf.3.s": "C# · .NET · Windows Forms · PostgreSQL · LLM API",
    "pf.3.task": "Develop a centralized system for tracking, supervising and executing software developer tasks with an integrated AI assistant.",
    "pf.3.solution": "Desktop client in C# with multi-tier data access via PostgreSQL (Npgsql) and a neural network module for task analysis, description generation and deadline monitoring.",
    "pf.3.result": "Reduced overhead in task assignment, transparent deadline control and a single workspace integrated with modern AI models.",
    "pf.4.tag": "Utilities · Converter",
    "pf.4.t": "GeneratorXML — high-speed tree & Excel to XML engine",
    "pf.4.s": "Delphi / FreePascal · VirtualTreeView · XLSX Engine · XML",
    "pf.4.task": "Build a high-performance engine to translate complex hierarchical tree data and Excel spreadsheets into valid XML of arbitrary schema.",
    "pf.4.solution": "Modular Delphi/FPC architecture: native .xlsx parsing via zip containers without external packages or COM, TLazVirtualStringTree node translation, column-to-tag mapping, UTF-8/CP1251.",
    "pf.4.result": "Self-contained executable with zero runtime dependencies and no MS Office required, processing hundreds of thousands of nodes per second.",
    "pf.5.tag": "Your project",
    "pf.5.t": "Your project could be here",
    "pf.5.s": "Stack chosen for the task",
    "pf.5.task": "Describe your task in a couple of sentences on Telegram — I'll tell you how to solve it, how long it takes, and whether it becomes the first case in a new area.",
    "pf.5.solution": "We fix the scope in writing, I quote price and deadline upfront, and work in stages with demos.",
    "pf.5.result": "A working solution with source code and docs — yours.",
    "pf.ph": "Screenshot",

    "about.page.title": "About me",
    "about.page.lead": "My name is Nikita Mitrokhin. I'm a developer with three years of commercial experience: I write desktop apps, backend services and work with databases.",
    "about.how.title": "How I work",
    "about.how.1.t": "I take the task end to end",
    "about.how.1.d": "From discussion and design to a working solution: code, database, installer or deploy, docs.",
    "about.how.2.t": "Maintainable code",
    "about.how.2.d": "Clean structure, comments, no magic. I want the project to live on without me if needed.",
    "about.how.3.t": "I don't disappear",
    "about.how.3.d": "Reachable on Telegram, demos by milestones, bugs within scope fixed free.",
    "about.exp": "3 years of commercial development: desktop apps in Delphi/Lazarus and C#, services in Python and .NET, working with databases.",
    "about.stack.title": "Stack",
    "about.stack.sub": "Tools I actually use in projects day to day.",
    "about.stack.g1": "Languages",
    "about.stack.g2": "Databases",
    "about.stack.g3": "Tools",
    "about.rules.title": "Principles",
    "about.rules.1.q": "Fixed upfront",
    "about.rules.1.a": "Price and deadline are quoted after the brief and don't change mid-way.",
    "about.rules.2.q": "Sources are yours",
    "about.rules.2.a": "Repository and instructions are handed over on delivery.",
    "about.rules.3.q": "Honest about limits",
    "about.rules.3.a": "If a task isn't mine — I'll say so and point you to the right person.",
    "about.rules.4.q": "Remote",
    "about.rules.4.a": "Calls and chat on Telegram; I can join your screen.",

    "faq.eyebrow": "Q&A",
    "faq.title": "Frequently asked questions",
    "faq.sub": "Click a question to expand the answer.",
    "faq.1.q": "How do you price projects?",
    "faq.1.a": "Fixed price after a call and a brief. I quote cost and deadline before we start — no floating hourly surprises. Payment in milestones: upfront and per delivered stage, so both sides are protected.",
    "faq.2.q": "What about deadlines and rush jobs?",
    "faq.2.a": "A small desktop app or bot — 1–3 weeks; a production system with database and printing — from a month. For urgent needs we ship a minimum viable version first and finish the rest in parallel.",
    "faq.3.q": "Do you hand over the source code?",
    "faq.3.a": "Yes — the codebase is yours. You get the repository, build and deploy instructions. I write clean, commented code so the project stays maintainable without me.",
    "faq.4.q": "Can you take over someone else's or legacy project?",
    "faq.4.a": "Yes. I often audit Delphi or C# apps written by previous developers: what's broken, what's risky to touch, what's quick to improve. Then a prioritized refactoring plan.",
    "faq.5.q": "Which databases do you work with?",
    "faq.5.a": "PostgreSQL, Firebird (IBExpert), SQLite and MS SQL Server (SSMS). Schema design, query and index tuning, zero-downtime migrations. Firebird/SQLite for desktop, PostgreSQL for services.",
    "faq.6.q": "How does the process and payment work?",
    "faq.6.a": "Call → written scope → price and timeline → upfront payment → staged work with demos → delivery, handover and docs. Revisions within scope are included; post-delivery support is agreed separately.",
    "faq.7.q": "Do you work remotely? Is a meeting needed?",
    "faq.7.a": "Fully remote. Calls and chat on Telegram. In-person meetings aren't required.",
    "faq.8.q": "What about support after delivery?",
    "faq.8.a": "Bugs within the agreed scope are fixed free. Further support — small changes, consulting, updates — by arrangement. The goal is a living project, not one abandoned after handover.",

    "ct.page.title": "Contacts",
    "ct.page.lead": "Telegram is the best way to reach me. I usually reply within a day.",
    "ct.time": "Availability",
    "ct.timev": "Online daily, replying within a day",
    "ct.form.title": "Message via the site",
    "ct.form.sub": "Fill in two fields — Telegram opens with a ready message. Nothing is stored anywhere.",
    "ct.form.name": "Your name",
    "ct.form.nameph": "How to address you",
    "ct.form.msg": "About the task",
    "ct.form.msgph": "A couple of sentences: what needs doing and by when",
    "ct.form.go": "Open Telegram with the message",
    "ct.form.err": "Please fill in your name and a few words about the task.",

    "dock.label": "services selected",
    "dock.clear": "Clear",
    "dock.go": "Send",

    "footer.name": "Nikita Mitrokhin",
    "footer.tag": "C# · Python · Delphi",

    "msg.hi": "Hi! I'm interested in these services:",
    "msg.how": "Could you tell me about the task — what needs to be done and by when?",
    "msg.from": "My name is",
  },
};

const SERVICE_TITLES = {
  ru: { desktop: "Десктоп-приложения", backend: "Backend и сервисы", dotnet: "Промышленные решения", db: "Базы данных", web: "Разработка сайтов" },
  en: { desktop: "Desktop applications", backend: "Backend and services", dotnet: "Production solutions", db: "Databases", web: "Website development" },
};

let lang = "ru";
const selected = new Set();
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------- Язык ---------- */
function applyLang(next) {
  lang = next;
  const dict = I18N[next] || I18N.ru;
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  $$(".lang__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === next));
  document.documentElement.lang = next;
  try { localStorage.setItem("site-lang", next); } catch (e) {}
  const t = document.querySelector("meta[name='site-title-" + next + "']");
  if (t) document.title = t.content;
  renderDock();
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("site-lang"); } catch (e) {}
  if (!saved) saved = (navigator.language || "ru").toLowerCase().startsWith("en") ? "en" : "ru";
  applyLang(saved);
  $$(".lang__btn").forEach((btn) => btn.addEventListener("click", () => applyLang(btn.dataset.lang)));
}

/* ---------- Мобильное меню ---------- */
function initMenu() {
  const btn = $("#burger"), menu = $("#mmenu");
  if (!btn || !menu) return;
  const close = () => { menu.classList.remove("is-open"); btn.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- Выбор услуг ---------- */
function toggleCard(card) {
  const id = card.dataset.id;
  const now = !selected.has(id);
  if (now) selected.add(id); else selected.delete(id);
  card.classList.toggle("is-selected", now);
  card.setAttribute("aria-checked", String(now));
  renderDock();
}

function initCards() {
  $$(".card[data-id]").forEach((card) => {
    card.addEventListener("click", () => toggleCard(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleCard(card); }
    });
  });
}

function renderDock() {
  const dock = $("#dock");
  if (!dock) return;
  const count = $("#dockCount"), list = $("#dockList"), go = $("#dockGo");
  const ids = Array.from(selected);
  const n = ids.length;
  count.textContent = String(n);
  const titles = SERVICE_TITLES[lang] || SERVICE_TITLES.ru;
  list.innerHTML = "";
  ids.forEach((id) => {
    const chip = document.createElement("span");
    chip.textContent = titles[id] || id;
    list.appendChild(chip);
  });
  if (n > 0) {
    const lines = [I18N[lang]["msg.hi"]];
    ids.forEach((id, i) => lines.push(`${i + 1}. ${titles[id] || id}`));
    lines.push("", I18N[lang]["msg.how"]);
    go.href = `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(lines.join("\n"))}`;
    dock.classList.add("is-visible");
    document.body.classList.add("has-dock");
  } else {
    go.href = TG_LINK;
    dock.classList.remove("is-visible");
    document.body.classList.remove("has-dock");
  }
}

function initDock() {
  const clear = $("#dockClear");
  if (clear) clear.addEventListener("click", () => {
    selected.clear();
    $$(".card[data-id]").forEach((c) => { c.classList.remove("is-selected"); c.setAttribute("aria-checked", "false"); });
    renderDock();
  });
}

/* ---------- Лайтбокс ---------- */
function initLightbox() {
  const lb = $("#lb"), lbImg = $("#lbImg");
  if (!lb || !lbImg) return;
  function open(src, alt) {
    lbImg.src = src; lbImg.alt = alt || "";
    lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; lbImg.src = "";
  }
  $$(".shot, .pf__thumb").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const img = btn.querySelector("img");
      if (img && img.style.display === "none") return; // заглушка
      const src = btn.dataset.full || (img ? img.getAttribute("src") : "");
      if (!src) return;
      open(src, img ? img.alt : "");
    });
  });
  $("#lbClose")?.addEventListener("click", close);
  $(".lb__x", lb)?.addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("is-open")) close(); });
}

/* ---------- Форма контактов → Telegram ---------- */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName")?.value.trim() || "";
    const text = $("#cfMsg")?.value.trim() || "";
    const err = $("#cfErr");
    if (!name || !text) {
      if (err) { err.textContent = I18N[lang]["ct.form.err"]; err.hidden = false; }
      return;
    }
    if (err) err.hidden = true;
    const lines = [I18N[lang]["msg.hi"].replace(/[!:.]$/, "") + "!", "", `${I18N[lang]["msg.from"]} ${name}.`, "", text];
    window.open(`https://t.me/${TG_USERNAME}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

/* ---------- Появление блоков при прокрутке ---------- */
function initReveal() {
  const els = $$(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initMenu();
  initCards();
  initDock();
  initLightbox();
  initContactForm();
  initReveal();
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
  renderDock();
});
