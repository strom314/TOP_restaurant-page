import pizzaCircle from "./img/pizza_circle.jpg";
const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const cardContainer = document.createElement("div");

    cardContainer.classList.add("card-container");

    for (let i = 0; i < 6; i++) {
      const card = document.createElement("div");
      const cardTitle = document.createElement("h2");
      const cardPrice = document.createElement("p");

      card.classList.add("pizza-card");

      cardTitle.textContent = "pizza";
      const pizzaImg = document.createElement("img");
      pizzaImg.src = pizzaCircle;
      card.append(pizzaImg, cardTitle, cardPrice);

      cardTitle.textContent = "Awesome pizza";
      cardPrice.textContent = "$9.99";

      cardContainer.append(card);
    }

    title.textContent = "Our offer";

    contentContainer.append(title, cardContainer);
  }
  return { populateDom };
})();
