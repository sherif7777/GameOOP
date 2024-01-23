import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    this.getDetails(id);

    document.querySelector(".closeBtn").addEventListener("click", () => {
      document.querySelector(".details").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });
  }

  async getDetails(gameID) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "97f6ca3badmsh174d035b1c337cbp17881ejsneb97c896ab07",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      let response = await fetch(url, options);

      let data = await response.json();

      this.ui.displayGameDetails(data);
    
    } catch (error) {
      console.error(error);
    }
    
    loading.classList.add("d-none");
    
  }
}
