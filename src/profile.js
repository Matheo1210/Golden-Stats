import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "e36f3fea-f428-482f-a986-bad13615e506" });



function createPlayerTile(player) {
    return `
    <article class="tile">
      <div class="tile-header">
        <h3><span>${player.name}</span><span>${player.team}</span></h3>
      </div>
      <a href="#">
        <span>View Profile</span>
        <span class="icon-button">
          <i class="ph-caret-right-bold"></i>
        </span>
      </a>
    </article>
    `;
}


console.log(playerSearch.value);
api.nba.getPlayers({ per_page: 5, search: playerSearch.value })
    .then(players => {
        const tilesContainer = document.getElementById('player-tiles');
        players.data.forEach(player => {
            tilesContainer.innerHTML += createPlayerTile({
                name: `${player.first_name} ${player.last_name}`,
                team: player.team.full_name
            });
        });
    })
    .catch(error => console.error('Error fetching player data:', error));

function SearchPlayer() {
    const playerSearch = document.getElementById('playerSearch');
    console.log(playerSearch.value);
    api.nba.getPlayers({ per_page: 5, search: playerSearch.value })
        .then(players => {
            const tilesContainer = document.getElementById('player-tiles');
            tilesContainer.innerHTML = '';
            players.data.forEach(player => {
                tilesContainer.innerHTML += createPlayerTile({
                    name: `${player.first_name} ${player.last_name}`,
                    team: player.team.full_name
                });
            });
        })
        .catch(error => console.error('Error fetching player data:', error));
}

const searchButton = document.getElementById('player-search-button');
searchButton.addEventListener('click', SearchPlayer);