const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  //   console.log(event);
  if (event.key == "Enter") {
    // console.log("enter");
    addTask(this.value);
    // clear the input value once done
    this.value = "";
  }
});

const addTask = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <p>${item}</p>
        <i class="fas fa-times"></i>
    `;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};
