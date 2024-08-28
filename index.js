const form = document.querySelector("form");
const containerActivities = document.querySelector(".conteiner-activities");
const button = document.querySelector("button[type='submit']");

form.onsubmit = function (event) {
  event.preventDefault();
  let inputActivities = document.querySelector(".activities-add");
  let attivitaAggiunta = inputActivities.value;
  if (attivitaAggiunta !== "") {
    button.onclick = function () {
      let contenitoreProva = document.createElement("div");
      contenitoreProva.style.borderBottom = "solid";
      contenitoreProva.style.display = "flex";
      contenitoreProva.style.alignItems = "center";
      let checkbox = document.createElement("button");
      checkbox.innerText = "🗑️";

      let attivita = document.createElement("p");
      attivita.textContent = attivitaAggiunta;

      contenitoreProva.append(checkbox, attivita);
      containerActivities.append(contenitoreProva);

      checkbox.onclick = function () {
        attivita.style.textDecoration = "line-through";
        attivita.remove();
        checkbox.remove();
        contenitoreProva.style.borderBottom = "";
      };
    };
  } else {
    alert("Ciao inserisci prima le tue cose da fare :)");
  }
};
