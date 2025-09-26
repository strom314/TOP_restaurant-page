const contentContainer = document.querySelector("#content");

export const domManager = (function () {
  function populateDom() {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = "Who we are";
    description.textContent =
      "Welcome to Pizza Pizza Pizza-rama, the pizzeria where pizza is not just pizza—it’s Pizza. Here, every pizza is more pizza than the last pizza, baked in our pizza oven by our pizza chefs who dream only of pizza. Our menu is full of pizza-topped pizza with extra pizza on the side, because why settle for less pizza when you can have more pizza pizza? From the first bite of pizza to the last crumb of pizza crust, you’ll be saying, “Wow, this pizza is the most pizza pizza has ever pizza’d.” At our pizzeria, we don’t just serve pizza—we live pizza, breathe pizza, and occasionally even nap on giant pillows shaped like pizza (don’t worry, they’re not actual pizza… usually).";

    description.classList.add("about-description");
    contentContainer.append(title, description);
  }
  return { populateDom };
})();
