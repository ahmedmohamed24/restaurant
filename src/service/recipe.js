export default class Recipe {
  constructor(item) {
    this.item = item;
  }
  getRecipe() {
    const req = new XMLHttpRequest();
    req.open(
      "get",
      `https://forkify-api.herokuapp.com/api/search?q=${this.item}`
    );
    req.send();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4 && req.status === 200) {
        let recipes = JSON.parse(req.response)["recipes"];
        document.querySelector("tbody").innerHTML = ``;
        for (let item in recipes) {
          console.log(recipes[item]);
        }
      }
    });
  }
}
