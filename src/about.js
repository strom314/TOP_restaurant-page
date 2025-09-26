const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = "Who we are";
    description.textContent = "toto je dlhy a uzasny popis nasej restauracie";

    contentContainer.append(title, description);
  }
  return { populateDom };
})();
