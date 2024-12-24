document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const musicToggle = document.getElementById("music-toggle");
  const languageToggle = document.getElementById("language-toggle");
  const body = document.body;
  const audio = new Audio("./music1.mp3");

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  // Music toggle
  let isPlaying = false;
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
      audio.play();
      musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Slideshow functionality
  let slideIndex = 1;
  showSlides(slideIndex);

  window.changeSlide = function (n) {
    showSlides((slideIndex += n));
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // Language toggle and translation
  const translations = {
    uz: {
      about: "Haqida",
      services: "Xizmatlar",
      certificates: "Sertifikatlar",
      comments: "Mijozlar fikrlari",
      contact: "Aloqa",
      welcome: "Dr. Guzala Berdiyeva",
      "hero-description":
        "To'rtinchi avlod shifokori.Akusher-ginekolog. Ultratovush diagnostikasi shifokori. 7 yildan ortiq vaqt davomida men ginekologiya va endokrinologiya, homila skriningi, dopplerografiya bo'yicha UZDga ixtisoslashganman.",
      "about-me": "Men haqimda",
      "about-description":
        "Dr. Guzala Berdiyeva - o'z sohasida ko'p yillik tajribaga ega fidoyi mutaxassis. U o'z bemorlariga eng yuqori sifatli yordam ko'rsatishga intiladi. ✅ **2019-yil**   Akusherlik va ginekologiyada xalqaro standartlarga asoslangan ultratovush diagnostikasi – Astafyeva O.V.;   Tomir kasalliklarini diagnostikada rangli dupleks skanerlash – Zasorin S.V.   ✅ **2020-yil**  Homiladorlikning 11-14 haftalarida prenatal skrining asoslari – Altynnik N.A., Moskva;  Homilaning kengaytirilgan ehokardiografiyasi – Medvedev M.V., Moskva;   Homila neyrosonografiyasi – Moskva.   ✅ **2021-yil**   Ginekologik amaliyotda ultratovush gipodiagnostika va giperdianostika masalalari – Ozerskaya I.A.; Prenatal ultratovush diagnostikasiga zamonaviy yondashuvlar – Ageeva M.I.  ",
      consultation: "Maslahat",
      treatment: "Davolash",
      "follow-up": "Kuzatuv",
      "patient-comments": "Bemorlar fikrlari",
      "comment-1":
        "\"Dr. Berdiyiva ajoyib shifokor. Uning mahorati va g'amxo'rligi mening salomatligimni sezilarli darajada yaxshiladi. \"",
      "comment-2":
        "\"Men Dr. Berdiyivani tavsiya qilaman. U e'tiborli, bilimdon va haqiqatan ham o'z bemorlari haqida qayg'uradi.\"",
      "comment-3":
        '"Dr. Berdiyivaning davolashi tufayli mening holatim sezilarli darajada yaxshilandi. U ajoyib shifokor!"',
      "contact-info":
        "Qabulga yozilish yoki savollar uchun biz bilan bog'laning:",
    },
    ru: {
      about: "О нас",
      services: "Услуги",
      certificates: "Сертификаты",
      comments: "Отзывы пациентов",
      contact: "Контакты",
      welcome: "Доктор Гузала Бердиева",
      "hero-description":
        "Врач в четвертом поколении.Акушер-гинеколог. Врач ультразвуковой диагностики. Свыше 7 лет специализируюсь на УЗД в гинекологии и эндокринологии, скрининге плода, доплерографии.",
      "about-me": "Обо мне",
      "about-description":
        "Доктор Гузала Бердиева - преданный профессионал с многолетним опытом в своей области. Она стремится предоставить своим пациентам помощь самого высокого качества.  ✅ 2019 г. «Ультразвуковая диагностика в акушерстве и гинекологии по международным стандартам» Астафьева О. В.; «Цветовое дуплексное сканирование в диагностике заболеваний сосудов» Засорин С.В. ✅ 2020 г. «Основы пренатального скрининга в 11-14 недель беременности» Алтынник Н. А. Москва; «Расширенная эхокардиография плода» Медведев М. В. Москва; «Нейросонография плода» Москва. ✅ 2021 «Вопросы ультразвуковой гипо-и гипердиагностики в гинекологической практике». Озерская И. А.; «Современные подходы к пренатальной ультразвуковой диагностике» Агеева М. И.",
      consultation: "Консультация",
      treatment: "Лечение",
      "follow-up": "Последующее наблюдение",
      "patient-comments": "Отзывы пациентов",
      "comment-1":
        '"Доктор Бердиева - отличный врач. Ее опыт и забота значительно улучшили мое здоровье."',
      "comment-2":
        '"Я очень рекомендую доктора Бердиеву. Она внимательна, знающая и действительно заботится о своих пациентах."',
      "comment-3":
        '"Благодаря лечению доктора Бердиевой я увидел значительные улучшения в моем состоянии. Она фантастический врач!"',
      "contact-info": "Свяжитесь с нами для записи на прием или по вопросам:",
    },
  };

  let currentLanguage = "uz";

  function translatePage(lang) {
    document.querySelectorAll(".translate").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    languageToggle.textContent = lang.toUpperCase();
  }

  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "uz" ? "ru" : "uz";
    translatePage(currentLanguage);
  });

  // Initialize with Uzbek
  translatePage("uz");
});
