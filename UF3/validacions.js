// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...

  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}

// addEventListeners...
document
  .getElementById("formulari")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtenir les dades del formulari
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const message = document.getElementById("message").value;

    // Validacions dels camps del formulari.

    // Validar que el campname i surname tinguin un min i max de caràcters.
    if (name.length < 3 || !name.length > 50) {
      alert("El nom han de tenir com a mínim 3 caràcters i menys de 50");
      return;
    }

    if (surname.length < 3 || !surname.length > 50) {
      alert("El cognom han de tenir com a mínim 3 caràcters i menys de 50");
      return;
    }

    // Exemple de validació: L'name ha de tenir un format vàlid
    const Regex = /[0-9]/;
    if (Regex.test(name)) {
      alert("No poden contenir números el camp nom");
      return;
    }

    if (Regex.test(surname)) {
      alert("No poden contenir números el cognom");
      return;
    }

    // Exemple de validació: L'email ha de tenir un format vàlid
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
      alert("L'adreça de correu electrònic no és vàlida.");
      return;
    }

    // ha de tenir alguna opcio seleccionada
    if (!gender) {
      alert("Valor incorrecte");
      return;
    }

    // Validació, ha de ser major d'edat
    if (age < 18) {
      alert("Has de ser major de edat");
      return;
    }

    // El missatge no pot ser més gran de 200 paraules i més petit que de 10
    if (message.length < 10 || !message.length > 200) {
      alert("El text a ha de tenir com a mínim 10 caràcters i com a màxim 200");
      return;
    }
  });

const products = [
  {
    category: "Electrònica",
    price: 499.99,
    name: "Telèfon Intel·ligent",
  },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  {
    category: "Electrònica",
    price: 299.99,
    name: "Auriculars sense fils",
  },
  {
    category: "Electrònica",
    price: 199.99,
    name: "Televisor Intel·ligent",
  },
  {
    category: "Electrònica",
    price: 149.99,
    name: "Relotge Intel·ligent",
  },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

// Seleccionem el camp selector
const selector = document.getElementById("product");

//Fem un bucle per anar afegin els productes duns de l'elelement creat option.
products.forEach((product) => {
  const producte = document.createElement("option");
  producte.innerText = product.name;
  selector.appendChild(producte);
});

const productId = document.getElementById("product").value;

const quantitat = document.getElementById("quantity");
quantitat.value = "1";

// find
