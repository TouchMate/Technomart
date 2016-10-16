var linkBookmark = document.querySelector(".bookmark");
		var popupCatalog = document.querySelector(".modal-content-catalog");
		var closeCatalog = document.querySelector(".modal-content--close");


		linkBookmark.addEventListener("click", function (event) {
			event.preventDefault();
			popupCatalog.classList.add("modal-content-catalog--show");

		});
		closeCatalog.addEventListener("click", function (event) {
			event.preventDefault();
			popupCatalog.classList.remove("modal-content-catalog--show");

		});

		window.addEventListener("keydown", function (event) {
			if (event.keyCode === 27) {
				if (popupCatalog.classList.remove("modal-content-catalog--show")) {
					popupCatalog.classList.remove("modal-content-catalog--show");
				}

			}
		});