// Afegeix aquí el codi de JS per a la pàgina pokemon.html
async function request(endpoint) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return response.json();
}
