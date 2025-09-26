const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = "An awesome restaurant";
    description.textContent =
      "bola raz mala mala hviezdicka viedlaj u mliecna mliecna cesticka volala zbohom druzice vidiet hccem svetov tisice";

    contentContainer.append(title, description);
  }
  return { populateDom };
})();
