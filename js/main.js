(function () {
  var LANG_STORAGE = "zbank-lang";

  var I18N = {
    ru: {
      "brand.name": "Z Банк",
      "nav.home": "Главная",
      "nav.about": "О банке",
      "nav.loans": "Кредиты",
      "nav.cards": "Карты",
      "nav.contacts": "Контакты",
      "ui.openAccount": "Открыть счёт",
      "ui.selectCard": "Выбрать карту",
      "ui.order": "Заказать",
      "ui.apply": "Оформить",
      "ui.request": "Оставить заявку",
      "ui.submit": "Отправить",
      "ui.writeUs": "Написать нам",
      "ui.themeToggle": "Переключить тему",
      "ui.menu": "Меню",
      "ui.langLabel": "Сменить язык",
      "ui.switchToEn": "Переключить на английский",
      "ui.switchToRu": "Переключить на русский",
      "products.debit": "Дебетовые карты",
      "products.deposits": "Вклады",
      "products.loans": "Кредиты",
      "products.mortgage": "Ипотека",
      "products.auto": "Автокредит",
      "products.insurance": "Страхование",
      "products.consumer": "Потребительский кредит",
      "products.creditCards": "Кредитные карты",
      "footer.tagline": "Наши продукты — без мелкого шрифта и скрытых комиссий.",
      "footer.navTitle": "Навигация",
      "footer.productsTitle": "Продукты",
      "footer.contactsTitle": "Контакты",
      "footer.copyright": "Z Bank. Все права защищены.",
      "footer.license": "Лицензия Банка России № 0000",
      "footer.address": "Москва, ул. Финансовая, 7",
      "index.meta": "Z Банк — деньги без нервов",
      "index.desc": "Z Банк — карты, вклады, кредиты и ипотека. Всё решается в одном приложении.",
      "index.hero.title1": "Деньги без",
      "index.hero.title2": "нервов",
      "index.hero.lead": "Карты, вклады, кредиты и ипотека. Всё решается в одном приложении — без очередей, справок и мелкого шрифта.",
      "index.hero.phoneLabel": "Звонок по России:",
      "index.hero.badge1": "Бесплатно навсегда",
      "index.hero.badge2": "Кэшбэк до 7%",
      "index.card.holder": "Держатель",
      "index.card.expiry": "Срок",
      "index.products.label": "Продукты",
      "index.products.title": "Всё, что нужно для денег",
      "index.products.subtitle": "Подберите продукт под свою задачу — от ежедневных покупок до квартиры.",
      "index.p1.desc": "Кэшбэк до 7% и бесплатное обслуживание. Карта приедет завтра.",
      "index.p2.desc": "До 18% годовых. Пополняйте и снимайте без потери процентов.",
      "index.p3.desc": "Деньги на любые цели. Решение приходит за 5 минут.",
      "index.p4.desc": "Квартира, дом или рефинансирование. Ставка от 7,5%.",
      "index.p5.desc": "Новый или подержанный автомобиль. Одобрение за один день.",
      "index.p6.desc": "Жизнь, здоровье, имущество и путешествия. Оформляется онлайн.",
      "index.terms.label": "Условия",
      "index.terms.title": "Без мелкого шрифта",
      "index.terms.subtitle": "Всё, что вы видите — то и получаете. Комиссий «под звёздочкой» нет.",
      "index.terms.colProduct": "Продукт",
      "index.terms.colTerms": "Условия",
      "index.terms.colRate": "Ставка",
      "index.tr1.terms": "от 10 000 ₽, срок 6–24 месяца",
      "index.tr2.terms": "до 5 000 000 ₽, срок до 7 лет",
      "index.tr3.terms": "срок до 30 лет, взнос от 15%",
      "index.tr4.terms": "срок до 7 лет, любой автомобиль",
      "index.tr5.name": "Кредитная карта",
      "index.tr5.terms": "льготный период 120 дней, лимит до 1 000 000 ₽",
      "index.steps.label": "Как это работает",
      "index.steps.title": "Начать просто",
      "index.steps.subtitle": "Четыре шага — и счёт открыт.",
      "index.s1.title": "Оставьте заявку",
      "index.s1.desc": "Форма на сайте или звонок — пару минут.",
      "index.s2.title": "Приходите в офис",
      "index.s2.desc": "С паспортом и ИНН. Оформление за один визит.",
      "index.s3.title": "Получите карту",
      "index.s3.desc": "Заберите в офисе или закажите доставку.",
      "index.s4.title": "Пользуйтесь",
      "index.s4.desc": "Все операции — в приложении, круглосуточно.",
      "index.cta.title": "Откройте счёт за 10 минут",
      "index.cta.desc": "Оставьте заявку — привезём карту уже завтра или пригласим в ближайший офис.",
      "about.title": "О банке — Z Банк",
      "about.desc": "О банке Z Банк: история с 2005 года, ключевые показатели и принципы работы.",
      "about.hero.title": "Банк с 2005 года",
      "about.hero.desc": "19 лет работаем без серьёзных сбоев и без скрытых комиссий.",
      "about.story.label": "История",
      "about.story.title": "Всё начиналось с простой идеи",
      "about.story.p1": "Z Банк основан в 2005 году командой, которая решила, что банковское обслуживание может быть понятным. С тех пор принцип не менялся: продукт считается готовым, когда его легко объяснить без мелкого шрифта.",
      "about.story.p2": "Мы делаем ставку на технологии и поддержку. Сегодня счетами управляют 2,4 млн клиентов, а среднее время ответа оператора — 40 секунд.",
      "about.tbl.col1": "Показатель",
      "about.tbl.col2": "Значение",
      "about.tbl.founded": "Год основания",
      "about.tbl.clients": "Клиентов",
      "about.tbl.branches": "Отделений",
      "about.tbl.staff": "Сотрудников",
      "about.tbl.rating": "Рейтинг АКРА",
      "about.principles.label": "Принципы",
      "about.principles.title": "Как мы работаем",
      "about.principles.subtitle": "Три вещи, на которых держится всё остальное.",
      "about.v1.title": "Деньги под защитой",
      "about.v1.desc": "Средства застрахованы, данные шифруются, всё подтверждается в приложении.",
      "about.v2.title": "Быстро, как привыкли",
      "about.v2.desc": "Решение по кредиту за 5 минут, ответ оператора — меньше минуты.",
      "about.v3.title": "Честные условия",
      "about.v3.desc": "Комиссии и ставки — только те, что указаны на сайте. Никаких сюрпризов.",
      "about.awards.label": "Награды",
      "about.awards.title": "Нас замечают",
      "about.awards.subtitle": "Не за рекламу, а за продукт.",
      "about.a1.title": "Банк года — 2025",
      "about.a1.desc": "Премия FinTalk за лучший цифровой сервис.",
      "about.a2.title": "Лучшее приложение",
      "about.a2.desc": "Первое место в народном голосовании Mobile Awards 2024.",
      "about.a3.title": "Рейтинг AAA(RU)",
      "about.a3.desc": "Максимальная кредитоспособность по версии АКРА.",
      "about.cta.title": "Вопросы о банке?",
      "about.cta.desc": "Позвоните или напишите — ответим на всё, что непонятно.",
      "cards.title": "Карты — Z Банк",
      "cards.desc": "Дебетовые и кредитные карты Z Банка: кэшбэк до 7%, бесплатное обслуживание, льготный период 120 дней.",
      "cards.hero.title": "Карты",
      "cards.hero.desc": "Дебетовые — для покупок и накоплений. Кредитные — когда деньги нужны прямо сейчас.",
      "cards.debit.label": "Дебетовые",
      "cards.debit.title": "Карты для жизни",
      "cards.debit.subtitle": "Обслуживание бесплатное. Кэшбэк приходит деньгами, а не баллами.",
      "cards.c1.f1": "Кэшбэк до 7% в выбранных категориях",
      "cards.c1.f2": "Обслуживание 0 ₽ навсегда",
      "cards.c1.f3": "Снятие без комиссии в любых банкоматах",
      "cards.price.freeYear": "0 ₽ в год",
      "cards.c2.name": "Накопительная",
      "cards.c2.f1": "7% годовых на остаток",
      "cards.c2.f2": "Кэшбэк 1% на все покупки",
      "cards.c2.f3": "Счета в рублях, долларах и евро",
      "cards.c3.f1": "Доступ в бизнес-залы аэропортов",
      "cards.c3.f2": "Персональный менеджер 24/7",
      "cards.c3.f3": "Кэшбэк 5–10% в путешествиях",
      "cards.price.month": "2 000 ₽ в месяц",
      "cards.credit.label": "Кредитные",
      "cards.credit.title": "Деньги, когда нужны",
      "cards.credit.subtitle": "Льготный период до 120 дней без процентов.",
      "cards.c4.name": "120 дней без %",
      "cards.c4.f1": "Льготный период до 120 дней",
      "cards.c4.f2": "Лимит до 1 000 000 ₽",
      "cards.c4.f3": "Кэшбэк 2% за покупки",
      "cards.price.grace120": "льготный период 120 дней",
      "cards.c5.name": "Кэшбэк Плюс",
      "cards.c5.f1": "Кэшбэк до 7% в любимых категориях",
      "cards.c5.f2": "Льготный период 60 дней",
      "cards.c5.f3": "Снятие наличных без процентов",
      "cards.price.fromRate": "от 19,9% годовых",
      "cards.c6.name": "Для путешествий",
      "cards.c6.f1": "Кэшбэк 10% на отели и авиабилеты",
      "cards.c6.f2": "Страховка путешественника бесплатно",
      "cards.c6.f3": "Снятие валюты без комиссии",
      "cards.price.grace100": "льготный период 100 дней",
      "cards.benefits.label": "Преимущества",
      "cards.benefits.title": "Почему наши карты",
      "cards.b1.title": "Выпуск за 10 минут",
      "cards.b1.desc": "Заказываете онлайн, забираете в офисе или ждёте доставку завтра.",
      "cards.b2.title": "Подтверждение каждой покупки",
      "cards.b2.desc": "Платежи в интернете проверяются по коду из приложения.",
      "cards.b3.title": "Кэшбэк деньгами",
      "cards.b3.desc": "Бонусы падают на счёт рублями. Тратить их можно сразу.",
      "cards.cta.title": "Закажите карту сегодня",
      "cards.cta.desc": "Бесплатная доставка или выпуск в ближайшем офисе.",
      "contacts.title": "Контакты — Z Банк",
      "contacts.desc": "Контакты Z Банка: телефон, почта, офисы и форма обратной связи.",
      "contacts.hero.title": "Контакты",
      "contacts.hero.desc": "Колл-центр работает круглосуточно. Офисы — без выходных в крупных городах.",
      "contacts.grid.label": "Связь",
      "contacts.grid.title": "Выберите удобный способ",
      "contacts.phone.title": "Телефон",
      "contacts.phone.free": "— бесплатно по России",
      "contacts.phone.abroad": "+7 495 555-01-23 — из-за границы",
      "contacts.email.title": "Почта",
      "contacts.email.support": "— вопросы клиентов",
      "contacts.email.press": "— для СМИ",
      "contacts.office.title": "Головной офис",
      "contacts.office.address": "Москва, ул. Финансовая, 7, БЦ «Капитал»",
      "contacts.office.hours": "Пн–Пт 9:00–19:00, Сб 10:00–16:00",
      "contacts.call.title": "Колл-центр",
      "contacts.call.desc": "Круглосуточно, без выходных. Блокировка карт — мгновенно.",
      "contacts.form.success": "Заявка отправлена. Перезвоним в течение 15 минут в рабочие часы.",
      "contacts.form.error": "Не удалось отправить заявку. Попробуйте позже, напишите нам в Telegram бота либо позвоните нам.",
      "contacts.form.title": "Оставить заявку",
      "contacts.form.name": "Имя",
      "contacts.form.namePh": "Иван",
      "contacts.form.surname": "Фамилия",
      "contacts.form.surnamePh": "Иванов",
      "contacts.form.patronymic": "Отчество",
      "contacts.form.patronymicPh": "Иванович",
      "contacts.form.country": "Страна",
      "contacts.form.countryRU": "Россия",
      "contacts.form.countryKZ": "Казахстан",
      "contacts.form.countryCN": "Китай",
      "contacts.form.countryUS": "США",
      "contacts.form.countryGB": "Великобритания",
      "contacts.form.countryDE": "Германия",
      "contacts.form.countryTR": "Турция",
      "contacts.form.countryAE": "ОАЭ",
      "contacts.form.phone": "Телефон",
      "contacts.form.contactType": "Способ связи",
      "contacts.form.typePhone": "Телефон",
      "contacts.form.typeEmail": "Email",
      "contacts.form.typeTelegram": "Telegram",
      "contacts.form.contact": "Контакт",
      "contacts.form.emailPh": "you@example.com",
      "contacts.form.telegramPh": "@username",
      "contacts.form.topic": "Тема",
      "contacts.form.topicCard": "Заказать карту",
      "contacts.form.topicLoan": "Кредит или ипотека",
      "contacts.form.topicDeposit": "Вклад",
      "contacts.form.topicOther": "Другой вопрос",
      "contacts.form.message": "Сообщение",
      "contacts.form.messagePh": "Что нужно сделать?",
      "contacts.offices.label": "Офисы",
      "contacts.offices.title": "640 отделений по стране",
      "contacts.offices.subtitle": "Крупные офисы работают без выходных.",
      "contacts.cityMoscow": "Москва",
      "contacts.citySpb": "Санкт-Петербург",
      "contacts.cityKazan": "Казань",
      "contacts.msk1": "ул. Финансовая, 7 — ежедневно 9:00–21:00",
      "contacts.msk2": "Тверская, 12 — пн–сб 9:00–19:00",
      "contacts.spb1": "Невский проспект, 88 — ежедневно 9:00–21:00",
      "contacts.spb2": "Московский проспект, 34 — пн–сб 9:00–19:00",
      "contacts.kzn1": "ул. Баумана, 21 — ежедневно 9:00–20:00",
      "contacts.kzn2": "пр. Победы, 56 — пн–сб 9:00–19:00",
      "loans.title": "Кредиты — Z Банк",
      "loans.desc": "Кредиты Z Банка: потребительский, ипотека, автокредит. Калькулятор платежей и условия.",
      "loans.hero.title": "Кредиты",
      "loans.hero.desc": "Деньги на любые цели. Ставку видно до подписания, без мелкого шрифта.",
      "loans.products.label": "Продукты",
      "loans.products.title": "Три способа получить деньги",
      "loans.l1.title": "Потребительский",
      "loans.l1.desc": "До 5 000 000 ₽ на срок до 7 лет. Решение за 5 минут онлайн.",
      "loans.price.fromRate": "от 10,9% годовых",
      "loans.l2.title": "Ипотека",
      "loans.l2.desc": "Квартира, дом или рефинансирование. Срок до 30 лет, взнос от 15%.",
      "loans.price.fromRate2": "от 7,5% годовых",
      "loans.l3.title": "Автокредит",
      "loans.l3.desc": "Новый или подержанный автомобиль. Одобрение за один рабочий день.",
      "loans.price.fromRate3": "от 12,5% годовых",
      "loans.calc.label": "Калькулятор",
      "loans.calc.title": "Считайте платёж сами",
      "loans.calc.subtitle": "Подвигайте ползунки — пересчёт мгновенный.",
      "loans.calc.amount": "Сумма кредита",
      "loans.calc.amountMax": "до 5 000 000 ₽",
      "loans.calc.term": "Срок",
      "loans.calc.termMax": "до 84 мес.",
      "loans.calc.monthsShort": "мес.",
      "loans.calc.rate": "Ставка",
      "loans.calc.fixedRate": "фиксированная для всех сумм",
      "loans.calc.payment": "Платёж в месяц",
      "loans.calc.total": "Итого вернёте",
      "loans.calc.annual": "годовых",
      "loans.compare.label": "Сравнение",
      "loans.compare.title": "Кредиты рядом",
      "loans.compare.colCondition": "Условие",
      "loans.compare.colConsumer": "Потребительский",
      "loans.compare.colMortgage": "Ипотека",
      "loans.compare.colAuto": "Автокредит",
      "loans.compare.amount": "Сумма",
      "loans.compare.term": "Срок",
      "loans.compare.rate": "Ставка",
      "loans.compare.decision": "Решение",
      "loans.compare.amount1": "до 5 000 000 ₽",
      "loans.compare.amount2": "до 60 000 000 ₽",
      "loans.compare.amount3": "до 7 000 000 ₽",
      "loans.compare.termUp7": "до 7 лет",
      "loans.compare.termUp30": "до 30 лет",
      "loans.compare.dec5min": "5 минут",
      "loans.compare.dec1day": "1 день",
      "loans.faq.label": "Вопросы",
      "loans.faq.title": "Часто спрашивают",
      "loans.faq.q1": "Какие документы нужны?",
      "loans.faq.a1": "Паспорт и ИНН. Для ипотеки дополнительно — подтверждение дохода: справка 2-НДФЛ или выписка со счёта.",
      "loans.faq.q2": "Можно погасить досрочно?",
      "loans.faq.a2": "Да, в любой момент и без комиссии. Заявку можно подать в приложении, пересчёт произойдёт автоматически.",
      "loans.faq.q3": "Как быстро будет решение?",
      "loans.faq.a3": "По потребительскому кредиту — до 5 минут. По ипотеке и автокредиту — в течение одного рабочего дня.",
      "loans.cta.title": "Посчитали? Оформляйте",
      "loans.cta.desc": "Оставьте заявку — перезвоним и поможем с каждым шагом."
    },

    en: {
      "brand.name": "Z Bank",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.loans": "Loans",
      "nav.cards": "Cards",
      "nav.contacts": "Contacts",
      "ui.openAccount": "Open an account",
      "ui.selectCard": "Choose a card",
      "ui.order": "Order",
      "ui.apply": "Apply",
      "ui.request": "Submit a request",
      "ui.submit": "Send",
      "ui.writeUs": "Write to us",
      "ui.themeToggle": "Toggle theme",
      "ui.menu": "Menu",
      "ui.langLabel": "Change language",
      "ui.switchToEn": "Switch to English",
      "ui.switchToRu": "Switch to Russian",
      "products.debit": "Debit cards",
      "products.deposits": "Deposits",
      "products.loans": "Loans",
      "products.mortgage": "Mortgage",
      "products.auto": "Auto loans",
      "products.insurance": "Insurance",
      "products.consumer": "Consumer loans",
      "products.creditCards": "Credit cards",
      "footer.tagline": "Our products — no fine print and no hidden fees.",
      "footer.navTitle": "Navigation",
      "footer.productsTitle": "Products",
      "footer.contactsTitle": "Contacts",
      "footer.copyright": "Z Bank. All rights reserved.",
      "footer.license": "Bank of Russia License No. 0000",
      "footer.address": "Moscow, Financial St., 7",
      "index.meta": "Z Bank — money without stress",
      "index.desc": "Z Bank — cards, deposits, loans and mortgage. Everything is done in one app.",
      "index.hero.title1": "Money without",
      "index.hero.title2": "stress",
      "index.hero.lead": "Cards, deposits, loans and mortgage. Everything is handled in one app — no queues, no paperwork, no fine print.",
      "index.hero.phoneLabel": "Call within Russia:",
      "index.hero.badge1": "Free forever",
      "index.hero.badge2": "Cashback up to 7%",
      "index.card.holder": "Cardholder",
      "index.card.expiry": "Expires",
      "index.products.label": "Products",
      "index.products.title": "Everything you need for your money",
      "index.products.subtitle": "Pick a product for your goal — from everyday purchases to an apartment.",
      "index.p1.desc": "Up to 7% cashback and free service. The card arrives tomorrow.",
      "index.p2.desc": "Up to 18% per annum. Top up and withdraw without losing interest.",
      "index.p3.desc": "Money for any purpose. A decision in 5 minutes.",
      "index.p4.desc": "Apartment, house or refinancing. From 7.5%.",
      "index.p5.desc": "New or used car. Approval within a day.",
      "index.p6.desc": "Life, health, property and travel. Fully online.",
      "index.terms.label": "Terms",
      "index.terms.title": "No fine print",
      "index.terms.subtitle": "What you see is what you get. No hidden fees.",
      "index.terms.colProduct": "Product",
      "index.terms.colTerms": "Terms",
      "index.terms.colRate": "Rate",
      "index.tr1.terms": "from ₽10,000, term 6–24 months",
      "index.tr2.terms": "up to ₽5,000,000, term up to 7 years",
      "index.tr3.terms": "term up to 30 years, down payment from 15%",
      "index.tr4.terms": "term up to 7 years, any car",
      "index.tr5.name": "Credit card",
      "index.tr5.terms": "120-day grace period, limit up to ₽1,000,000",
      "index.steps.label": "How it works",
      "index.steps.title": "Getting started is easy",
      "index.steps.subtitle": "Four steps and your account is open.",
      "index.s1.title": "Submit a request",
      "index.s1.desc": "A form on the site or a call — a couple of minutes.",
      "index.s2.title": "Visit the office",
      "index.s2.desc": "Bring your passport and tax ID. Done in one visit.",
      "index.s3.title": "Get your card",
      "index.s3.desc": "Pick it up at the office or order delivery.",
      "index.s4.title": "Start using it",
      "index.s4.desc": "All operations in the app, around the clock.",
      "index.cta.title": "Open an account in 10 minutes",
      "index.cta.desc": "Submit a request — we'll bring the card tomorrow or invite you to a nearby office.",
      "about.title": "About — Z Bank",
      "about.desc": "About Z Bank: our history since 2005, key metrics and principles.",
      "about.hero.title": "A bank since 2005",
      "about.hero.desc": "19 years of stable operation with no hidden fees.",
      "about.story.label": "History",
      "about.story.title": "It all started with a simple idea",
      "about.story.p1": "Z Bank was founded in 2005 by a team that believed banking could be easy to understand. That principle hasn't changed since: a product is done when it can be explained simply, without fine print.",
      "about.story.p2": "We focus on technology and support. Today 2.4 million customers manage their accounts, and the average operator response time is 40 seconds.",
      "about.tbl.col1": "Indicator",
      "about.tbl.col2": "Value",
      "about.tbl.founded": "Founded",
      "about.tbl.clients": "Clients",
      "about.tbl.branches": "Branches",
      "about.tbl.staff": "Employees",
      "about.tbl.rating": "ACRA rating",
      "about.principles.label": "Principles",
      "about.principles.title": "How we work",
      "about.principles.subtitle": "Three things everything else rests on.",
      "about.v1.title": "Your money is protected",
      "about.v1.desc": "Funds are insured, data is encrypted, and everything is confirmed in the app.",
      "about.v2.title": "Fast, as you expect",
      "about.v2.desc": "A loan decision in 5 minutes, an operator reply in under a minute.",
      "about.v3.title": "Honest terms",
      "about.v3.desc": "Fees and rates — only what's stated on the site. No surprises.",
      "about.awards.label": "Awards",
      "about.awards.title": "We get noticed",
      "about.awards.subtitle": "Not for ads, but for the product.",
      "about.a1.title": "Bank of the Year 2025",
      "about.a1.desc": "FinTalk award for the best digital service.",
      "about.a2.title": "Best mobile app",
      "about.a2.desc": "First place in the Mobile Awards 2024 public vote.",
      "about.a3.title": "AAA(RU) rating",
      "about.a3.desc": "The highest creditworthiness rating per ACRA.",
      "about.cta.title": "Questions about the bank?",
      "about.cta.desc": "Call or write — we'll answer everything that's unclear.",
      "cards.title": "Cards — Z Bank",
      "cards.desc": "Z Bank debit and credit cards: up to 7% cashback, free service, 120-day grace period.",
      "cards.hero.title": "Cards",
      "cards.hero.desc": "Debit cards for purchases and savings. Credit cards when you need money right now.",
      "cards.debit.label": "Debit",
      "cards.debit.title": "Cards for life",
      "cards.debit.subtitle": "Service is free. Cashback comes as money, not points.",
      "cards.c1.f1": "Up to 7% cashback in chosen categories",
      "cards.c1.f2": "₽0 service forever",
      "cards.c1.f3": "Fee-free withdrawals at any ATM",
      "cards.price.freeYear": "₽0 per year",
      "cards.c2.name": "Savings",
      "cards.c2.f1": "7% per annum on the balance",
      "cards.c2.f2": "1% cashback on all purchases",
      "cards.c2.f3": "Accounts in rubles, dollars and euros",
      "cards.c3.f1": "Airport lounge access",
      "cards.c3.f2": "Personal manager 24/7",
      "cards.c3.f3": "5–10% cashback on travel",
      "cards.price.month": "₽2,000 per month",
      "cards.credit.label": "Credit",
      "cards.credit.title": "Money when you need it",
      "cards.credit.subtitle": "Interest-free grace period up to 120 days.",
      "cards.c4.name": "120 days at 0%",
      "cards.c4.f1": "Grace period up to 120 days",
      "cards.c4.f2": "Limit up to ₽1,000,000",
      "cards.c4.f3": "2% cashback on purchases",
      "cards.price.grace120": "120-day grace period",
      "cards.c5.name": "Cashback Plus",
      "cards.c5.f1": "Up to 7% cashback in favorite categories",
      "cards.c5.f2": "60-day grace period",
      "cards.c5.f3": "Fee-free cash withdrawals",
      "cards.price.fromRate": "from 19.9% per annum",
      "cards.c6.name": "For travel",
      "cards.c6.f1": "10% cashback on hotels and flights",
      "cards.c6.f2": "Free travel insurance",
      "cards.c6.f3": "Fee-free currency withdrawals",
      "cards.price.grace100": "100-day grace period",
      "cards.benefits.label": "Benefits",
      "cards.benefits.title": "Why our cards",
      "cards.b1.title": "Issued in 10 minutes",
      "cards.b1.desc": "Order online, pick up at the office or wait for delivery tomorrow.",
      "cards.b2.title": "Every purchase confirmed",
      "cards.b2.desc": "Online payments are verified with a code from the app.",
      "cards.b3.title": "Cashback as real money",
      "cards.b3.desc": "Bonuses land on your account in rubles. Spend them right away.",
      "cards.cta.title": "Order your card today",
      "cards.cta.desc": "Free delivery or issuance at a nearby office.",
      "contacts.title": "Contacts — Z Bank",
      "contacts.desc": "Z Bank contacts: phone, email, offices and a feedback form.",
      "contacts.hero.title": "Contacts",
      "contacts.hero.desc": "The call center works around the clock. Major-city offices are open daily.",
      "contacts.grid.label": "Contact",
      "contacts.grid.title": "Choose a convenient way",
      "contacts.phone.title": "Phone",
      "contacts.phone.free": "— toll-free in Russia",
      "contacts.phone.abroad": "+7 495 555-01-23 — from abroad",
      "contacts.email.title": "Email",
      "contacts.email.support": "— customer support",
      "contacts.email.press": "— for the media",
      "contacts.office.title": "Head office",
      "contacts.office.address": "Moscow, Financial St. 7, Capital Business Center",
      "contacts.office.hours": "Mon–Fri 9:00–19:00, Sat 10:00–16:00",
      "contacts.call.title": "Call center",
      "contacts.call.desc": "Around the clock, every day. Instant card blocking.",
      "contacts.form.success": "Your request has been sent. We'll call back within 15 minutes during working hours.",
      "contacts.form.error": "Couldn't send your request. Try again later, message our Telegram bot or call us.",
      "contacts.form.title": "Submit a request",
      "contacts.form.name": "Name",
      "contacts.form.namePh": "Ivan",
      "contacts.form.surname": "Surname",
      "contacts.form.surnamePh": "Ivanov",
      "contacts.form.patronymic": "Patronymic",
      "contacts.form.patronymicPh": "Ivanovich",
      "contacts.form.country": "Country",
      "contacts.form.countryRU": "Russia",
      "contacts.form.countryKZ": "Kazakhstan",
      "contacts.form.countryCN": "China",
      "contacts.form.countryUS": "USA",
      "contacts.form.countryGB": "UK",
      "contacts.form.countryDE": "Germany",
      "contacts.form.countryTR": "Turkey",
      "contacts.form.countryAE": "UAE",
      "contacts.form.phone": "Phone",
      "contacts.form.contactType": "Contact method",
      "contacts.form.typePhone": "Phone",
      "contacts.form.typeEmail": "Email",
      "contacts.form.typeTelegram": "Telegram",
      "contacts.form.contact": "Contact",
      "contacts.form.emailPh": "you@example.com",
      "contacts.form.telegramPh": "@username",
      "contacts.form.topic": "Topic",
      "contacts.form.topicCard": "Order a card",
      "contacts.form.topicLoan": "Loan or mortgage",
      "contacts.form.topicDeposit": "Deposit",
      "contacts.form.topicOther": "Other question",
      "contacts.form.message": "Message",
      "contacts.form.messagePh": "What do you need?",
      "contacts.offices.label": "Offices",
      "contacts.offices.title": "640 branches across the country",
      "contacts.offices.subtitle": "Major offices are open every day.",
      "contacts.cityMoscow": "Moscow",
      "contacts.citySpb": "Saint Petersburg",
      "contacts.cityKazan": "Kazan",
      "contacts.msk1": "Financial St. 7 — daily 9:00–21:00",
      "contacts.msk2": "Tverskaya 12 — Mon–Sat 9:00–19:00",
      "contacts.spb1": "Nevsky Prospekt 88 — daily 9:00–21:00",
      "contacts.spb2": "Moskovsky Prospekt 34 — Mon–Sat 9:00–19:00",
      "contacts.kzn1": "Bauman St. 21 — daily 9:00–20:00",
      "contacts.kzn2": "Pobedy Ave. 56 — Mon–Sat 9:00–19:00",
      "loans.title": "Loans — Z Bank",
      "loans.desc": "Z Bank loans: consumer, mortgage, auto. Payment calculator and terms.",
      "loans.hero.title": "Loans",
      "loans.hero.desc": "Money for any purpose. The rate is clear before you sign — no fine print.",
      "loans.products.label": "Products",
      "loans.products.title": "Three ways to get money",
      "loans.l1.title": "Consumer",
      "loans.l1.desc": "Up to ₽5,000,000 for up to 7 years. Online decision in 5 minutes.",
      "loans.price.fromRate": "from 10.9% per annum",
      "loans.l2.title": "Mortgage",
      "loans.l2.desc": "Apartment, house or refinancing. Term up to 30 years, down payment from 15%.",
      "loans.price.fromRate2": "from 7.5% per annum",
      "loans.l3.title": "Auto loan",
      "loans.l3.desc": "New or used car. Approval within one business day.",
      "loans.price.fromRate3": "from 12.5% per annum",
      "loans.calc.label": "Calculator",
      "loans.calc.title": "Calculate your payment yourself",
      "loans.calc.subtitle": "Move the sliders — instant recalculation.",
      "loans.calc.amount": "Loan amount",
      "loans.calc.amountMax": "up to ₽5,000,000",
      "loans.calc.term": "Term",
      "loans.calc.termMax": "up to 84 months",
      "loans.calc.monthsShort": "months",
      "loans.calc.rate": "Rate",
      "loans.calc.fixedRate": "fixed for all amounts",
      "loans.calc.payment": "Monthly payment",
      "loans.calc.total": "Total to repay",
      "loans.calc.annual": "per annum",
      "loans.compare.label": "Compare",
      "loans.compare.title": "Loans side by side",
      "loans.compare.colCondition": "Condition",
      "loans.compare.colConsumer": "Consumer",
      "loans.compare.colMortgage": "Mortgage",
      "loans.compare.colAuto": "Auto loan",
      "loans.compare.amount": "Amount",
      "loans.compare.term": "Term",
      "loans.compare.rate": "Rate",
      "loans.compare.decision": "Decision",
      "loans.compare.amount1": "up to ₽5,000,000",
      "loans.compare.amount2": "up to ₽60,000,000",
      "loans.compare.amount3": "up to ₽7,000,000",
      "loans.compare.termUp7": "up to 7 years",
      "loans.compare.termUp30": "up to 30 years",
      "loans.compare.dec5min": "5 minutes",
      "loans.compare.dec1day": "1 day",
      "loans.faq.label": "FAQ",
      "loans.faq.title": "Frequently asked questions",
      "loans.faq.q1": "What documents do I need?",
      "loans.faq.a1": "A passport and tax ID. For a mortgage you'll also need proof of income: a 2-NDFL certificate or a bank statement.",
      "loans.faq.q2": "Can I repay early?",
      "loans.faq.a2": "Yes, at any time and without a fee. Submit a request in the app and the recalculation happens automatically.",
      "loans.faq.q3": "How fast will I get a decision?",
      "loans.faq.a3": "For consumer loans — up to 5 minutes. For mortgages and auto loans — within one business day.",
      "loans.cta.title": "Done calculating? Apply now",
      "loans.cta.desc": "Submit a request — we'll call you back and help with every step."
    }
  };

  var NAV_LINKS = [
    { href: "index.html", key: "nav.home" },
    { href: "about.html", key: "nav.about" },
    { href: "loans.html", key: "nav.loans" },
    { href: "cards.html", key: "nav.cards" },
    { href: "contacts.html", key: "nav.contacts" }
  ];

  var FOOTER_LINKS = NAV_LINKS;

  var FOOTER_PRODUCTS = [
    { href: "loans.html", key: "products.consumer" },
    { href: "loans.html", key: "products.mortgage" },
    { href: "loans.html", key: "products.auto" },
    { href: "cards.html", key: "products.debit" },
    { href: "cards.html", key: "products.creditCards" }
  ];

  var ICON_SUN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    '<circle cx="12" cy="12" r="5"/>' +
    '<line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>' +
    '<line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' +
    "</svg>";

  var ICON_MOON =
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
    "</svg>";

  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path || "index.html";
  }

  function getLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(LANG_STORAGE);
    } catch (e) {}
    if (saved === "ru" || saved === "en") return saved;
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "ru";
  }

  function t(key) {
    var lang = getLang();
    var dict = I18N[lang] || I18N.ru;
    if (dict[key] != null) return dict[key];
    if (I18N.ru[key] != null) return I18N.ru[key];
    return key;
  }

  function applyI18n() {
    var lang = getLang();
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (el.tagName === "META") {
        el.setAttribute("content", t(key));
      } else {
        el.textContent = t(key);
      }
    }
    var ph = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < ph.length; j++) {
      ph[j].setAttribute("placeholder", t(ph[j].getAttribute("data-i18n-placeholder")));
    }
    setContactPlaceholder();
    document.documentElement.setAttribute("lang", lang);
  }

  function updateLangButton() {
    var b = document.getElementById("lang-toggle");
    if (!b) return;
    var isRu = getLang() === "ru";
    b.textContent = isRu ? "EN" : "RU";
    b.setAttribute("aria-label", t(isRu ? "ui.switchToEn" : "ui.switchToRu"));
  }

  function setLang(lang) {
    if (lang !== "ru" && lang !== "en") lang = "ru";
    try {
      localStorage.setItem(LANG_STORAGE, lang);
    } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
    renderHeader();
    renderFooter();
    applyI18n();
  }

  function toggleLang() {
    setLang(getLang() === "ru" ? "en" : "ru");
  }

  function getTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem("zbank-theme");
    } catch (e) {}
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function toggleTheme() {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-pressed", String(next === "dark"));
    try {
      localStorage.setItem("zbank-theme", next);
    } catch (e) {}
  }

  function initTheme() {
    var root = document.documentElement;
    root.setAttribute("data-theme", getTheme());
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-pressed", String(root.getAttribute("data-theme") === "dark"));
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var page = currentPage();

    var nav = NAV_LINKS.map(function (link) {
      var active = link.href === page ? ' class="active"' : "";
      return '<a href="' + link.href + '"' + active + ">" + t(link.key) + "</a>";
    }).join("");

    var isDark = document.documentElement.getAttribute("data-theme") === "dark";

    el.innerHTML =
      '<div class="container header-inner">' +
      '  <a href="index.html" class="logo">' +
      '    <span class="logo-mark">Z</span>' +
      "    " + t("brand.name") +
      "  </a>" +
      '  <nav class="nav" id="site-nav">' + nav + "</nav>" +
      '  <div class="header-actions">' +
      '    <button class="lang-toggle" id="lang-toggle" aria-label="' + t("ui.langLabel") + '"></button>' +
      '    <button class="theme-toggle" id="theme-toggle" aria-label="' + t("ui.themeToggle") + '" aria-pressed="' + isDark + '">' +
      '      <span class="icon-moon">' + ICON_MOON + "</span>" +
      '      <span class="icon-sun">' + ICON_SUN + "</span>" +
      "    </button>" +
      '    <a href="contacts.html" class="btn btn-yellow">' + t("ui.openAccount") + "</a>" +
      '    <button class="burger" id="burger" aria-label="' + t("ui.menu") + '"><span></span><span></span><span></span></button>' +
      "  </div>" +
      "</div>";

    updateLangButton();
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var footerNav = FOOTER_LINKS.map(function (link) {
      return '<li><a href="' + link.href + '">' + t(link.key) + "</a></li>";
    }).join("");

    var footerProducts = FOOTER_PRODUCTS.map(function (link) {
      return '<li><a href="' + link.href + '">' + t(link.key) + "</a></li>";
    }).join("");

    el.innerHTML =
      '<div class="container">' +
      '  <div class="footer-grid">' +
      '    <div class="footer-brand">' +
      '      <a href="index.html" class="logo">' +
      '        <span class="logo-mark">Z</span>' +
      "        " + t("brand.name") +
      "      </a>" +
      "      <p>" + t("footer.tagline") + "</p>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>" + t("footer.navTitle") + "</h4>" +
      "      <ul>" + footerNav + "</ul>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>" + t("footer.productsTitle") + "</h4>" +
      "      <ul>" + footerProducts + "</ul>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>" + t("footer.contactsTitle") + "</h4>" +
      "      <ul>" +
      "        <li><p>8 800 555-01-23</p></li>" +
      "        <li><p>support@zbank.ru</p></li>" +
      "        <li><p>" + t("footer.address") + "</p></li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      '  <div class="footer-bottom">' +
      "    <span>© " + new Date().getFullYear() + " " + t("footer.copyright") + "</span>" +
      "    <span>" + t("footer.license") + "</span>" +
      "  </div>" +
      "</div>";
  }

  function toggleMenu() {
    var navEl = document.getElementById("site-nav");
    var burger = document.getElementById("burger");
    if (!navEl || !burger) return;
    var open = navEl.classList.toggle("open");
    burger.classList.toggle("open", open);
  }

  function closeMenu() {
    var navEl = document.getElementById("site-nav");
    var burger = document.getElementById("burger");
    if (!navEl || !burger) return;
    navEl.classList.remove("open");
    burger.classList.remove("open");
  }

  function initAccordion() {
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("open");
      });
    });
  }

  function initCalculator() {
    var el = document.getElementById("calc");
    if (!el) return;

    var amountInput = document.getElementById("calc-amount");
    var termInput = document.getElementById("calc-term");
    var rate = 15.9;
    var monthLabel = document.getElementById("calc-month");
    var totalLabel = document.getElementById("calc-total");
    var rateLabel = document.getElementById("calc-rate");

    function formatMoney(n) {
      return new Intl.NumberFormat("ru-RU").format(Math.round(n)) + " ₽";
    }

    function update() {
      var amount = parseFloat(amountInput.value) || 0;
      var months = parseInt(termInput.value, 10) || 12;
      var r = rate / 100 / 12;
      var payment =
        r === 0
          ? amount / months
          : (amount * r) / (1 - Math.pow(1 + r, -months));

      document.getElementById("calc-amount-val").textContent =
        formatMoney(amount);
      document.getElementById("calc-term-val").textContent =
        months + " " + t("loans.calc.monthsShort");

      if (monthLabel && totalLabel && rateLabel) {
        monthLabel.textContent = formatMoney(payment);
        totalLabel.textContent = formatMoney(payment * months);
        rateLabel.textContent = rate.toFixed(1) + "% " + t("loans.calc.annual");
      }
    }

    amountInput.addEventListener("input", update);
    termInput.addEventListener("input", update);
    update();
  }

  var COUNTRY_MASKS = {
    ru: "+7 (###) ###-##-##",
    kz: "+7 (###) ###-##-##",
    cn: "+86 ###-####-####",
    us: "+1 (###) ###-####",
    gb: "+44 (###) #### ####",
    de: "+49 (####) ######",
    tr: "+90 (###) ###-##-##",
    ae: "+971 (##) ###-####"
  };

  function countryPrefix(code) {
    var mask = COUNTRY_MASKS[code] || COUNTRY_MASKS.ru;
    return mask.replace(/[^\d]/g, "");
  }

  function formatByMask(code, digits) {
    var mask = COUNTRY_MASKS[code] || COUNTRY_MASKS.ru;
    var out = "";
    var di = 0;
    for (var i = 0; i < mask.length && di < digits.length; i++) {
      out += mask[i] === "#" ? digits[di++] : mask[i];
    }
    return out;
  }

  function contactTypeValue() {
    var sel = document.getElementById("cf-contact-type");
    return sel && sel.value ? sel.value : "phone";
  }

  function setContactPlaceholder() {
    var input = document.getElementById("cf-contact");
    if (!input) return;
    var type = contactTypeValue();
    if (type === "email") {
      input.placeholder = t("contacts.form.emailPh");
    } else if (type === "telegram") {
      input.placeholder = t("contacts.form.telegramPh");
    } else {
      var country = document.getElementById("cf-country");
      var code = (country && country.value) || "ru";
      input.placeholder = COUNTRY_MASKS[code].replace(/#/g, "_");
    }
  }

  function applyPhoneMask() {
    var input = document.getElementById("cf-contact");
    var country = document.getElementById("cf-country");
    if (!input || !country) return;
    var code = country.value || "ru";
    var digits = input.value.replace(/\D/g, "");
    var prefix = countryPrefix(code);
    if (digits.slice(0, prefix.length) === prefix) {
      digits = digits.slice(prefix.length);
    } else if ((code === "ru" || code === "kz") && digits.charAt(0) === "8") {
      digits = "7" + digits.slice(1);
    }
    input.value = formatByMask(code, digits);
    setContactPlaceholder();
  }

  function updateContactField() {
    var input = document.getElementById("cf-contact");
    if (!input) return;
    var type = contactTypeValue();
    if (type === "email") {
      input.type = "email";
      input.setAttribute("inputmode", "email");
    } else if (type === "telegram") {
      input.type = "text";
      input.setAttribute("inputmode", "text");
    } else {
      input.type = "tel";
      input.setAttribute("inputmode", "tel");
    }
    input.value = "";
    setContactPlaceholder();
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var countrySel = document.getElementById("cf-country");
    var typeSel = document.getElementById("cf-contact-type");
    var contactInput = document.getElementById("cf-contact");

    if (typeSel) {
      typeSel.addEventListener("change", updateContactField);
    }
    if (countrySel) {
      countrySel.addEventListener("change", function () {
        if (contactTypeValue() !== "phone" || !contactInput) return;
        contactInput.value = "";
        applyPhoneMask();
      });
    }
    if (contactInput) {
      contactInput.addEventListener("input", function () {
        if (contactTypeValue() === "phone") applyPhoneMask();
      });
    }
    updateContactField();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      var error = document.getElementById("form-error");

      function fail() {
        if (success) success.style.display = "none";
        if (error) error.style.display = "block";
      }

      fetch("api/submit_lead.php", { method: "POST", body: new FormData(form) })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          if (json && json.ok) {
            if (error) error.style.display = "none";
            if (success) {
              success.style.display = "block";
              setTimeout(function () {
                success.style.display = "none";
              }, 6000);
            }
            form.reset();
          } else {
            fail();
          }
        })
        .catch(function () {
          fail();
        });
    });
  }

  applyI18n();

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initTheme();
    applyI18n();
    initAccordion();
    initCalculator();
    initForm();
  });

  document.addEventListener("click", function (e) {
    var el = e.target;
    if (!el || !el.closest) return;
    if (el.closest("#lang-toggle")) {
      toggleLang();
    } else if (el.closest("#theme-toggle")) {
      toggleTheme();
    } else if (el.closest("#burger")) {
      toggleMenu();
    } else if (el.closest("#site-nav a")) {
      closeMenu();
    }
  });
})();
