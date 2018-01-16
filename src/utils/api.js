const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const key = "6e6712c1c94feb2bc74251324d8184db";

module.exports = {
  getGames(searchTerm) {
    fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${searchTerm}&fields=name,cover`,
      {
        method: "GET",
        headers: {
          "user-key": key,
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  loadUp(query) {
    fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${query}&fields=name,cover`,
      {
        method: "GET",
        headers: {
          "user-key": key,
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
