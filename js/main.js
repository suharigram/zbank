(function () {
  var NAV_LINKS = [
    { href: "index.html", label: "Главная" },
    { href: "about.html", label: "О банке" },
    { href: "loans.html", label: "Кредиты" },
    { href: "cards.html", label: "Карты" },
    { href: "contacts.html", label: "Контакты" }
  ];

  var FOOTER_LINKS = [
    { href: "index.html", label: "Главная" },
    { href: "about.html", label: "О банке" },
    { href: "loans.html", label: "Кредиты" },
    { href: "cards.html", label: "Карты" },
    { href: "contacts.html", label: "Контакты" }
  ];

  var FOOTER_PRODUCTS = [
    { href: "loans.html", label: "Потребительский кредит" },
    { href: "loans.html", label: "Ипотека" },
    { href: "loans.html", label: "Автокредит" },
    { href: "cards.html", label: "Дебетовые карты" },
    { href: "cards.html", label: "Кредитные карты" }
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

  function initTheme() {
    var root = document.documentElement;
    root.setAttribute("data-theme", getTheme());

    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    btn.setAttribute("aria-pressed", String(root.getAttribute("data-theme") === "dark"));

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      btn.setAttribute("aria-pressed", String(next === "dark"));
      try {
        localStorage.setItem("zbank-theme", next);
      } catch (e) {}
    });
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var page = currentPage();

    var nav = NAV_LINKS
      .map(function (link) {
        var active = link.href === page ? ' class="active"' : "";
        return '<a href="' + link.href + '"' + active + ">" + link.label + "</a>";
      })
      .join("");

    el.innerHTML =
      '<div class="container header-inner">' +
      '  <a href="index.html" class="logo">' +
      '    <span class="logo-mark">Z</span>' +
      "    Z&nbsp;Банк" +
      "  </a>" +
      '  <nav class="nav" id="site-nav">' + nav + "</nav>" +
      '  <div class="header-actions">' +
      '    <button class="theme-toggle" id="theme-toggle" aria-label="Переключить тему" aria-pressed="false">' +
      '      <span class="icon-moon">' + ICON_MOON + "</span>" +
      '      <span class="icon-sun">' + ICON_SUN + "</span>" +
      "    </button>" +
      '    <a href="contacts.html" class="btn btn-yellow">Открыть счёт</a>' +
      '    <button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button>' +
      "  </div>" +
      "</div>";

    var burger = document.getElementById("burger");
    var navEl = document.getElementById("site-nav");
    burger.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      burger.classList.toggle("open", open);
    });
    navEl.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navEl.classList.remove("open");
        burger.classList.remove("open");
      }
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var footerNav = FOOTER_LINKS.map(function (link) {
      return '<li><a href="' + link.href + '">' + link.label + "</a></li>";
    }).join("");

    var footerProducts = FOOTER_PRODUCTS.map(function (link) {
      return '<li><a href="' + link.href + '">' + link.label + "</a></li>";
    }).join("");

    el.innerHTML =
      '<div class="container">' +
      '  <div class="footer-grid">' +
      '    <div class="footer-brand">' +
      '      <a href="index.html" class="logo">' +
      '        <span class="logo-mark">Z</span>' +
      "        Z&nbsp;Банк" +
      "      </a>" +
      "      <p>Наши продукты — без мелкого шрифта и скрытых комиссий.</p>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>Навигация</h4>" +
      "      <ul>" + footerNav + "</ul>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>Продукты</h4>" +
      "      <ul>" + footerProducts + "</ul>" +
      "    </div>" +
      '    <div class="footer-col">' +
      "      <h4>Контакты</h4>" +
      "      <ul>" +
      "        <li><p>8 800 555-01-23</p></li>" +
      "        <li><p>support@zbank.ru</p></li>" +
      "        <li><p>Москва, ул. Финансовая, 7</p></li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      '  <div class="footer-bottom">' +
      "    <span>© " + new Date().getFullYear() + " Z Bank. Все права защищены.</span>" +
      "    <span>Лицензия Банка России № 0000</span>" +
      "  </div>" +
      "</div>";
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
      document.getElementById("calc-term-val").textContent = months + " мес.";

      if (monthLabel && totalLabel && rateLabel) {
        monthLabel.textContent = formatMoney(payment);
        totalLabel.textContent = formatMoney(payment * months);
        rateLabel.textContent = rate.toFixed(1) + "% годовых";
      }
    }

    amountInput.addEventListener("input", update);
    termInput.addEventListener("input", update);
    update();
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) success.style.display = "block";
      form.reset();
      setTimeout(function () {
        success.style.display = "none";
      }, 6000);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initTheme();
    initAccordion();
    initCalculator();
    initForm();
  });
})();
