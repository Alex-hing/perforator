function performSearch() {
  const query = document.getElementById("search-input").value
  if (query) {
      console.log(`Searching for: ${query}`)
  }
}

function setLanguage(lang) {
    const langButton = document.querySelector(".lang-button")
    const menuButton = document.getElementById("menu-button")

    if (lang === "ua") {
        langButton.textContent = "UA ▼";
        menuButton.textContent = "Меню";
        document.getElementById("search-input").placeholder = "Пошук IMDb"
        document.getElementById("imdb-pro-link").textContent = "IMDbPro"
        document.getElementById("watchlist-link").textContent = "Список"
        document.getElementById("sign-in-link").textContent = "Увійти"
        document.querySelector(".dropdown-button").textContent = "Всі ▼"

        const dropdownItems = document.querySelectorAll(".dropdown-content a")
        dropdownItems[0].textContent = "Всі"
        dropdownItems[1].textContent = "Назви"
        dropdownItems[2].textContent = "Епізоди ТБ"
        dropdownItems[3].textContent = "Знаменитості"
        dropdownItems[4].textContent = "Компанії"
        dropdownItems[5].textContent = "Ключові слова"
        dropdownItems[6].textContent = "Розширений пошук"

        document.querySelectorAll(".carousel-slide").forEach((slide, index) => {
            const titles = [
                '"Ходячі мерці: Деріл Діксон" Сезон 3',
                "'Кінець' Джошуа Оппенгеймера",
                "Назва кожного епізоду 5 сезону",
                "Капітан Америка: Нова ера хоробрих",
                "Хаос панує у 'Y2K'",
                "'Муфаса: Король Лев'",
                "'Місія: Неможлива - Фінальне протистояння'",
                "'Громовержці' збираються!",
                '"Секретний рівень"',
            ]

            const subtitles = [
                "Дивитись тизер",
                "Дивитись трейлер",
                "Дивитись тизер",
                "Дивитись новий трейлер із D23 Brazil",
                "Дивитись трейлер",
                "Дивитись трейлер-приквел",
                "Дивитись перший тизер",
                "Подивитись на команду ближче",
                "Історії, натхненні Warhammer, SIFU, Exodus та іншими!",
            ]

            slide.querySelector("h3").textContent = titles[index] || "Відео"
            slide.querySelector("p").textContent = subtitles[index] || "Дивитись"
        })

        document.querySelector(".up-next h3").textContent = "Наступні"
        document.querySelector(".up-next a").textContent = "Переглянути трейлери ➔"

        const upNextItems = document.querySelectorAll(".next-video")
        if (upNextItems[0]) {
            upNextItems[0].querySelector("h4").textContent = "'Аматор'"
            upNextItems[0].querySelector("p").textContent = "Дивитись трейлер"
        }
        if (upNextItems[1]) {
            upNextItems[1].querySelector("h4").textContent = "Чи врятує Скеля Санту?"
            upNextItems[1].querySelector("p").textContent = "Дивитись уривок із 'Червоний Один'"
        }
        if (upNextItems[2]) {
            upNextItems[2].querySelector("h4").textContent =
                "Камерон Діаз і Джеймі Фокс повертаються в 'Знову в дії'"
            upNextItems[2].querySelector("p").textContent = "Дивитись тизер"
        }

        document.querySelector(".featured-section h2").textContent = "Сьогодні у фокусі"
        document.querySelectorAll(".cards-container .card").forEach((card, index) => {
            const cardTexts = [
                "Що дивитись у листопаді",
                "15 осінніх фільмів, які варто подивитись",
            ]
            card.querySelector("p").textContent = cardTexts[index] || "Фільм"
            card.querySelector("a").textContent = index === 0 ? "Переглянути вибір IMDb" : "Ознайомитись із фільмами"
        })

        document.querySelector(".celebrity-carousel h2").textContent = "Найпопулярніші знаменитості"

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
            const titles = [
                '"The Walking Dead: Daryl Dixon" Season 3',
                "Joshua Oppenheimer's 'The End'",
                "Every Episode Title for Season 5",
                "Captain America: Brave New World",
                "Chaos Reigns in 'Y2K'",
                "'Mufasa: The Lion King'",
                "'Mission: Impossible - The Final Reckoning'",
                "'Thunderbolts' Assemble!",
                '"Secret Level"',
            ]

            const subtitles = [
                "Watch the Teaser",
                "Watch the Trailer",
                "Watch the Teaser",
                "Watch the New Trailer from D23 Brazil",
                "Watch the Trailer",
                "Watch the Prequel Trailer",
                "Watch the First Teaser",
                "Get a Closer Look at the Team",
                "Stories Inspired by Warhammer, SIFU, Exodus, and More!",
            ]

            slide.querySelector("h3").textContent = titles[index] || "Video"
            slide.querySelector("p").textContent = subtitles[index] || "Watch"
        })

        document.querySelector(".up-next h3").textContent = "Up next"
        document.querySelector(".up-next a").textContent = "Browse trailers ➔"

        const upNextItems = document.querySelectorAll(".next-video")
        if (upNextItems[0]) {
            upNextItems[0].querySelector("h4").textContent = "'The Amateur'"
            upNextItems[0].querySelector("p").textContent = "Watch the Trailer"
        }
        if (upNextItems[1]) {
            upNextItems[1].querySelector("h4").textContent = "Can The Rock Save Santa?"
            upNextItems[1].querySelector("p").textContent = "Watch the 'Red One' Clip"
        }
        if (upNextItems[2]) {
            upNextItems[2].querySelector("h4").textContent =
                "Cameron Diaz and Jamie Foxx Are 'Back in Action'"
            upNextItems[2].querySelector("p").textContent = "Watch the Teaser"
        }

        document.querySelector(".featured-section h2").textContent = "Featured today"
        document.querySelectorAll(".cards-container .card").forEach((card, index) => {
            const cardTexts = [
                "What to Watch in November",
                "15 Fall Movies You Need to Know About",
            ]
            card.querySelector("p").textContent = cardTexts[index] || "Movie"
            card.querySelector("a").textContent = index === 0 ? "See IMDb staff picks" : "Explore the movies"
        })

        document.querySelector(".celebrity-carousel h2").textContent = "Most popular celebrities"
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

let currentCelebritySlide = 0
const celebritySlides = document.querySelectorAll('.celebrity-slide')

function showCelebrities(index) {
    celebritySlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index)
    });
}

function nextCelebrities() {
    currentCelebritySlide = (currentCelebritySlide + 1) % celebritySlides.length
    showCelebrities(currentCelebritySlide)
}

function prevCelebrities() {
    currentCelebritySlide = (currentCelebritySlide - 1 + celebritySlides.length) % celebritySlides.length
    showCelebrities(currentCelebritySlide)
}

showCelebrities(currentCelebritySlide)
