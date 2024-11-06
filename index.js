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

      const dropdownItems = document.querySelectorAll(".dropdown-content a")
      dropdownItems[0].textContent = "Всі"
      dropdownItems[1].textContent = "Назви"
      dropdownItems[2].textContent = "Епізоди ТБ"
      dropdownItems[3].textContent = "Знаменитості"
      dropdownItems[4].textContent = "Компанії"
      dropdownItems[5].textContent = "Ключові слова"
      dropdownItems[6].textContent = "Розширений пошук"
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
  }
}

