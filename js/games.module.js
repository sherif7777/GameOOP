import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    
    this.getGames("MMORPG");

    document.querySelectorAll(".navbar-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        document
          .querySelector(".navbar-nav .active")
          .classList.remove("active");
        link.classList.add("active");
        this.getGames(link.dataset.category);
      });
    });
  }

  gameDetailsEvent() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        this.showDetails(id);
      });
    });
  }
  
  showDetails(id) {

    this.details = new Details(id);
    
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");

  }

  async getGames(Category) {

    document.querySelector(".loading").classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "97f6ca3badmsh174d035b1c337cbp17881ejsneb97c896ab07",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    
    let response = await fetch(url, options);
    
    let data = await response.json();

    this.ui.displayGameData(data);
    
    this.gameDetailsEvent();
    
    document.querySelector(".loading").classList.add("d-none");
  }
}
