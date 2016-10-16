var link = document.querySelector(".map-btn");
		var popup = document.querySelector(".modal-content");
		var close = document.querySelector(".modal-content--close");
		var name = popup.querySelector("[name=full-name]");
		var form = popup.querySelector("form");
		var mail = popup.querySelector("[name=mail-id]");
		var text = popup.querySelector("[name=mail-content]");
		var storage = localStorage.getItem("name");

		link.addEventListener("click", function (event) {
			event.preventDefault();
			popup.classList.add("modal-content--show");
			name.focus();

		});
		close.addEventListener("click", function (event) {
			event.preventDefault();
			popup.classList.remove("modal-content--show");

		});

		form.addEventListener("submit", function (event) {
			if (!name.value || !mail.value) {
				event.preventDefault();
				popup.classList.add("modal-error");

			} else {
				localStorage.setItem("login", name.value);

			}

		});

		window.addEventListener("keydown", function (event) {
			if (event.keyCode === 27) {
				if (popup.classList.remove("modal-content--show")) {
					popup.classList.remove("modal-content--show");
				}

			}
		});