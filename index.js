function performSearch() {
  const query = document.getElementById("search-input").value
  if (query) {
      console.log(`Searching for: ${query}`)
  }
}

function setLanguage(lang) {
  const langButton = document.querySelector(".lang-button")
  const menuButton = document.getElementById("menu-button")

  if (lang === 'ua') {
      langButton.textContent = "UA ▼"
      menuButton.textContent = "Меню"
      document.getElementById("search-input").placeholder = "Пошук IMDb"
      document.getElementById("imdb-pro-link").textContent = "IMDbPro"
      document.getElementById("watchlist-link").textContent = "Список"
      document.getElementById("sign-in-link").textContent = "Увійти"
      document.querySelector(".dropdown-button").textContent = "Всі ▼"

      const dropdownItems = document.querySelectorAll(".dropdown-content a");
      dropdownItems[0].textContent = "Всі"
      dropdownItems[1].textContent = "Назви"
      dropdownItems[2].textContent = "Епізоди ТБ"
      dropdownItems[3].textContent = "Знаменитості"
      dropdownItems[4].textContent = "Компанії"
      dropdownItems[5].textContent = "Ключові слова"
      dropdownItems[6].textContent = "Розширений пошук"

      document.querySelectorAll(".carousel-slide").forEach((slide, index) => {
          if (index === 0) {
              slide.querySelector("h3").textContent = '"Ходячі мерці: Деріл Діксон" Сезон 3'
              slide.querySelector("p").textContent = "Дивитись тизер"
          } else if (index === 1) {
              slide.querySelector("h3").textContent = "'Кінець' Джошуа Оппенгеймера"
              slide.querySelector("p").textContent = "Дивитись трейлер"
          } else if (index === 2) {
              slide.querySelector("h3").textContent = "Назва кожного епізоду 5 сезону"
              slide.querySelector("p").textContent = "Дивитись тизер"
          }
      });

      document.querySelector(".up-next h3").textContent = "Наступні"
      document.querySelector(".up-next a").textContent = "Переглянути трейлери ➔"

      const upNextItems = document.querySelectorAll(".next-video")
      if (upNextItems[0]) {
          upNextItems[0].querySelector("h4").textContent = '"Ходячі мерці: Деріл Діксон" Сезон 3'
          upNextItems[0].querySelector("p").textContent = "Дивитись тизер"
      }
      if (upNextItems[1]) {
          upNextItems[1].querySelector("h4").textContent = "'Кінець' Джошуа Оппенгеймера"
          upNextItems[1].querySelector("p").textContent = "Дивитись трейлер"
      }
      if (upNextItems[2]) {
          upNextItems[2].querySelector("h4").textContent = "Назва кожного епізоду 5 сезону"
          upNextItems[2].querySelector("p").textContent = "Дивитись тизер"
      }

  } else {
      langButton.textContent = "EN ▼"
      menuButton.textContent = "Menu"
      document.getElementById("search-input").placeholder = "Search IMDb"
      document.getElementById("imdb-pro-link").textContent = "IMDbPro"
      document.getElementById("watchlist-link").textContent = "Watchlist"
      document.getElementById("sign-in-link").textContent = "Sign In"
      document.querySelector(".dropdown-button").textContent = "All ▼"

      const dropdownItems = document.querySelectorAll(".dropdown-content a")
      dropdownItems[0].textContent = "All"
      dropdownItems[1].textContent = "Titles"
      dropdownItems[2].textContent = "TV Episodes"
      dropdownItems[3].textContent = "Celebs"
      dropdownItems[4].textContent = "Companies"
      dropdownItems[5].textContent = "Keywords"
      dropdownItems[6].textContent = "Advanced Search"

      document.querySelectorAll(".carousel-slide").forEach((slide, index) => {
          if (index === 0) {
              slide.querySelector("h3").textContent = '"The Walking Dead: Daryl Dixon" Season 3'
              slide.querySelector("p").textContent = "Watch the Teaser"
          } else if (index === 1) {
              slide.querySelector("h3").textContent = "Joshua Oppenheimer's 'The End'"
              slide.querySelector("p").textContent = "Watch the Trailer"
          } else if (index === 2) {
              slide.querySelector("h3").textContent = "Every Episode Title for Season 5"
              slide.querySelector("p").textContent = "Watch the Teaser"
          }
      });

      document.querySelector(".up-next h3").textContent = "Up next"
      document.querySelector(".up-next a").textContent = "Browse trailers ➔"

      const upNextItems = document.querySelectorAll(".next-video")
      if (upNextItems[0]) {
          upNextItems[0].querySelector("h4").textContent = '"The Walking Dead: Daryl Dixon" Season 3'
          upNextItems[0].querySelector("p").textContent = "Watch the Teaser"
      }
      if (upNextItems[1]) {
          upNextItems[1].querySelector("h4").textContent = "Joshua Oppenheimer's 'The End'"
          upNextItems[1].querySelector("p").textContent = "Watch the Trailer"
      }
      if (upNextItems[2]) {
          upNextItems[2].querySelector("h4").textContent = "Every Episode Title for Season 5"
          upNextItems[2].querySelector("p").textContent = "Watch the Teaser"
      }
  }
}


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide")

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index)
    });
    currentSlide = index
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length)
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length)
}

function goToFilm(url) {
    window.location.href = url
}

setInterval(nextSlide, 5000)

showSlide(currentSlide)