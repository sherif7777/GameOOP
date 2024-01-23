
export class Ui {
  displayGameData(data) {
    let gamebox = ``;
    for (let i = 0; i < data.length; i++) {
      gamebox += `
          <div class="col mb-3">
            <div class="card h-100 " data-id="${data[i].id}">
              <div class="card-body">
                <figure>
                  <img class="w-100" src="${data[i].thumbnail}" alt="" />
                </figure>
                <figcaption>
                  <div class="d-flex justify-content-between mb-2">
                    <h3 class="h6 small text-white ">${data[i].title}</h3>
                    <span class="badge bg-primary p-2 align-self-start">free</span>
                  </div>
                  <p class="text-center small text-white opacity-50">
                    ${data[i].short_description}
                  </p>
                </figcaption>
              </div>
              <div class="card-footer hstack justify-content-between small">
                <span class="badge bg-danger">${data[i].genre}</span>
                <span class="badge bg-danger">${data[i].platform}</span>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("gamedata").innerHTML = gamebox;
  }

  displayGameDetails(data) {
    let details = `
        <div class="col-md-4">
          <img src="${data.thumbnail}" alt="game details" />
        </div>
        <div class="col-md-8 text-white">
          <h3>Title: ${data.title}</h3>
          <p>Category: <span class="badge bg-primary">${data.genre}</span></p>
          <p>Platform: <span class="badge bg-primary">${data.platform}</span></p>
          <p>Status: <span class="badge bg-primary">${data.status}</span></p>
          <p>
          ${data.description}
          </p>
          <a class="btn btn-outline-warning text-white" href="${data.game_url} "target="_blank" >ShowDetails</a>
        </div>
        `;
    document.getElementById("detailsContent").innerHTML = details;
  }
}
