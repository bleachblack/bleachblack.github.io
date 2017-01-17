var button = document.querySelector(".hotel_search_button");

var popup = document.querySelector(".hotel_search_form");

button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("hotel_search_form_show");
});
