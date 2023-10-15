var elSiteForm = document.querySelector(".js-form");
var elBookInput = document.querySelector(".js-input");
var elBooksList = document.querySelector(".js-books-contain");
var fullFragment = new DocumentFragment();

function renderBooks(parametr) {
	elBooksList.innerHTML = "";

	parametr.forEach((book) => {
		var bookItem = document.createElement("li");
		var bookImg = document.createElement("img");
		var bookName = document.createElement("h3");
		var author = document.createElement("h4");
		var bookYear = document.createElement("span");
		var bookPage = document.createElement("span");
		var bookLang = document.createElement("span");
		var vikLink = document.createElement("a");
		vikLink.setAttribute("href", book.link);

		bookItem.append(bookImg, bookName, author, bookYear, bookPage, bookLang, vikLink);
		fullFragment.appendChild(bookItem);
		bookItem.className = "book-item";
		bookImg.className = "book-img";
		bookName.className = "book-name";
		author.className = "book-author";
		bookYear.className = "book-year";
		bookPage.className = "book-page";
		bookLang.className = "book-lang";
		vikLink.className = "book-link";

		bookImg.src = book.imageLink;
		bookName.textContent = book.title;
		author.textContent = book.author;
		bookYear.textContent = book.year;
		bookPage.textContent = book.pages;
		bookLang.textContent = book.language;
		vikLink.textContent = "Wikipediya";
	});
	elBooksList.appendChild(fullFragment);
}

elSiteForm.addEventListener("submit", function (evt) {
	evt.preventDefault();

	var inputVal = elBookInput.value.trim();

	var newRegex = new RegExp(inputVal, "gi");

	var resultArr = books.filter((book) => {
		return book.title.match(newRegex);
	});

	if (resultArr.length > 0) {
		renderBooks(resultArr);
	} else elBooksList.textContent = "Not found 404";
});

renderBooks(books);
