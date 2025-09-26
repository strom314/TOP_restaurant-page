const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const menuButton = document.createElement("button");

    title.textContent = "AN awesome restaurant";
    description.textContent =
      "bola raz mala mala hviezdicka viedlaj u mliecna mliecna cesticka volala zbohom druzice vidiet hccem svetov tisice";
    menuButton.textContent = "Menu";

    contentContainer.append(title, description, menuButton);
  }
  return { populateDom };
})();
