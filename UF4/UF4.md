# Exercicis UF4

- UF 4: UF4. Comunicació asíncrona client-servidor

En aquesta UF fem servir JavaScript per a comunicar-nos amb un servidor. Això ens permet obtenir dades, enviar dades, modificar dades, etc.

**Important**: En funció de si l'error és més o menys greu, es pot penalitzar amb 0,25p o 0,5p. Finalment hi ha 1 punt global que s'avaluarà en funció de la qualitat del codi, la seva estructura, la seva llegibilitat i els comentaris que hi hagi.

## Repte 1.1 - Codi Asíncron (1p)

Entra al fitxer `repte1.js` i resol les següents qüestions:

- Comenta el codi explicant clarament que està succeïnt, fent especial atenció a les parts de codi que son asíncrones i com es gestiona la petició i la resposta.

## Repte 1.2 - Codi Asíncron (1p)

- Canvia el codi de `repte1.js` de manera que facis servir només **async/await** i **try/catch** per a gestionar els errors.

## Repte 2 - Pokemon API (1,5p)

A partir d'ara pots fer servir la tècnica que prefereixis per a fer les peticions a l'API de Pokémon (fetch, axios, etc.) així com la gestió de respostes i errors.

Fes un cop d'ull a l'API de Pokémon: https://pokeapi.co/ així com a la seva documentació específica: https://pokeapi.co/docs/v2. Veuràs que tens una petita interfícies per a provar les diferents peticions que pots fer a l'API.

Crea un fitxer `pokemon.js` i resol les següents qüestions:

- Busca quin Endpoint necessites per obtenir la informaió d'un Pokemon concret.
- Fes una funcio que faci una petició a l'API per a obtenir informació d'un Pokémon concret. La funció ha de rebre un paràmetre amb l'ID del Pokémon i ha de retornar un objecte amb la informació del Pokémon.

## Repte 3 - Pokemon API - Llegir (3p)

Els Pokémon tenen diferents habilitats. Fes una funció que donat l'ID d'un Pokémon, acabi retornant un objecte amb aquestes 3 propietats:

- `habilitats`: un array amb les habilitats del Pokémon.
- `descripcio`: una cadena text amb la descripció de l'habilitat NOMÉS EN ANGLÈS.
- `pokemons`: un array amb els noms dels pokemons que tenen aquesta habilitat (compte, perquè hauràs de fer una nova petició a la URL de l'habilitat per a obtenir aquesta informació).

## Repte 4 - Pokemon API - Escriure (2p)

Fes un `npm install` per tal d'instal·lar JSON Server al teu projecte. Ja saps que Aquesta eina ens permetrà crear un servidor amb una base de dades JSON. Nosaltres la farem servir per crear contingut amb les dades dels Pokémon que recuperem de l'API.

Per exectuar el servidor, pots fer servir la comanda `npm start` ja que està definit al `package.json` l'execució del servidor. Com que el fitxer `db.json` ja està creat, JSON Server crearà un servidor amb les dades que hi ha en aquest fitxer (en aquest cas està buit i l'endpoint que genera és `http://localhost:3000/pokemons`).

Crea un fitxer `serverPokemon.js` i resol les següents qüestions:

- La informació de cada Pokemon es pot consultar amb l'endpoint:
  - `https://pokeapi.co/api/v2/pokemon/${i}` (on `i` és l'id del del Pokémon a consultar).
- Hauràs d'obtenir la informació la informació dels pokemons de primera generació (1-151) i guardar-la a la teva base de dades local.
- Un cop ho tinguis, modifica el codi per fer servir el Promise.all i generar un missatge de "Dades guardades correctament" quan s'hagin guardat totes les dades. Hauràs d'emmagatzemar en un array cadascuna de les peticions a l'API (que son promeses) i fora de la iteració fer la crida a Promise.all.

## Repte 5 - Pokemon API - Modificar i Esborrar (1,5p)

Ara que ja tens les dades dels Pokémon a la teva base de dades local, fes una funció que, donat el nom d'un Pokémon, et permeti modificar-li l'alçada ("height"). La funció ha de retornar un missatge que digui si s'ha modificat correctament o no.

Fes una altra funció que, donat l'id d'un Pokémon, et permeti esborrar-lo de la base de dades. La funció ha de retornar un missatge que digui si s'ha esborrat correctament o no.
