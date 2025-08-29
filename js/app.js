(function () {
	const games = Array.from(document.getElementsByClassName("dashboard__item__button"));
	const gamesImage = Array.from(document.getElementsByClassName("dashboard__item__img"));
	
	games.forEach((game, i) => {
		game.addEventListener("click", () => {
			game.classList.toggle("dashboard__item__button--return");
			gamesImage[i].classList.toggle("dashboard__item__img--rented");
			if (game.textContent == "Alugar") {
				game.textContent = "Devolver";
			} else {
				game.textContent = "Alugar";
			}
		});
	});
})();
