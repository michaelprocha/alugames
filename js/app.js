(function () {
	const games = Array.from(document.getElementsByClassName("dashboard__item__button"));

	games.forEach((game) => {
		game.addEventListener("click", () => {
			game.classList.toggle("dashboard__item__button--return");
			if (game.textContent == "Alugar") {
				game.textContent = "Devolver";
			} else {
				game.textContent = "Alugar";
			}
		});
	});
})();
