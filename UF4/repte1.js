fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const abilityUrl = data.abilities[0].ability.url;
    return fetch(abilityUrl);
  })
  .then((abilityResponse) => {
    if (!abilityResponse.ok) {
      throw new Error(`HTTP error! status: ${abilityResponse.status}`);
    }
    return abilityResponse.json();
  })
  .then((abilityData) => {
    const pokemons = abilityData.pokemon;
    console.log("Ability:", pokemons);
  })
  .catch((error) => console.error("Error:", error));
