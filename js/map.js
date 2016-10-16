var mapLink = document.querySelector(".js-open-map");
		var mapPopup = document.querySelector(".modal-content--map");
		var mapClose = mapPopup.querySelector(".modal-content--close");

		mapLink.addEventListener("click", function (event) {
			event.preventDefault();
			mapPopup.classList.add("modal-content--map--show");

		});
		mapClose.addEventListener("click", function (event) {
			event.preventDefault();
			mapPopup.classList.remove("modal-content--map--show");

		});
		window.addEventListener("keydown", function (event) {
			if (event.keyCode === 27) {
				if (mapPopup.classList.contains("modal-content--map--show")) {
					mapPopup.classList.remove("modal-content--map--show");
				}
			}
		});