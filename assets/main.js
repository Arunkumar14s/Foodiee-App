

const inputFood = document.getElementById("input-food");
const inputButton = document.getElementById("input-button");
const foodContainer = document.getElementById("food-container");
const syncButton = document.getElementById("syncButton");
const duplicateEl = document.getElementById("dublicate")

inputButton.addEventListener("click", () => {

    const li = document.createElement("li");
    const itemdiv = document.createElement("div");
    const removediv = document.createElement("div");
    li.append(itemdiv,removediv);

    itemdiv.textContent = inputFood.value;
    removediv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"/></svg>`
    li.className = "food-li"
    foodContainer.append(li);
}); 






