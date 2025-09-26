const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.classList.add("home-title");

    title.textContent = "We are The pizzeria";
    description.textContent =
      "The pizza we make is the most pizza you will ever taste";

    contentContainer.append(title, description);
  }
  return { populateDom };
})();
