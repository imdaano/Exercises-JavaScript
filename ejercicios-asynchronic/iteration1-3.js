
const baseUrl = "https://api.nationalize.io";

const search = () => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((someone) => {
      createNationalizeP(someone);
    });
};

const createNationalizeP = (someone) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${someone.name} tiene`;

  for (const country of someone.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  p$$.textContent = text;

  document.body.appendChild(p$$);
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);
