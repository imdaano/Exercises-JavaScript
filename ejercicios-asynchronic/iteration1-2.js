const baseUrl = "https://api.nationalize.io";

const search = (event) => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((nombre) => nombre.json())
    .then((nombre) => {
      console.log(nombre);
    });
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);