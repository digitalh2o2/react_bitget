const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const key = "6e6712c1c94feb2bc74251324d8184db";

module.exports = {
  getGames(searchTerm) {
    const response = fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${searchTerm}&fields=*&limit=50`,
      {
        method: "GET",
        headers: {
          "user-key": key,
          Accept: "application/json"
        }
      }
    );

    return response;
  },
  loadUp(query) {
    const response = fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${query}&fields=name,cover&limit=50`,
      {
        method: "GET",
        headers: {
          "user-key": key,
          Accept: "application/json"
        }
      }
    );

    return response;
  }
};
