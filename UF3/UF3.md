# Exercicis UF3

## Aquest exercici només correpson amb la nota per UF3

- UF 3: Esdeveniments. Manejament de formularis. Model d’objectes del document

En aquesta UF es treballa amb la interacció de l'usuari amb la pàgina web mitjançant esdeveniments i formularis. A més, s'aprofundeix en el model d'objectes del document (DOM) per a manipular els elements de la pàgina web.

A continuació tens diversos reptes de JS que determinaran el teu nivell de coneixements en aquesta UF. Tots ells giren entorn a accions que has de fer amb el formulari que et presentem a `formulari.html`.

Aquest formulari és una manera senzilla d'obtenir una comanda de productes d'un usuari. Tenim informació bàsica general de l'usuari (nom, cognom, adreça de correu electrònic, gènere) i un camp per seleccionar el producte i la quantitat que es vol d'aquest producte.

**Important**: En funció de si l'error és més o menys greu, es pot penalitzar amb 0,25p o 0,5p. Finalment hi ha 1 punt global que s'avaluarà en funció de la qualitat del codi, la seva estructura, la seva llegibilitat i els comentaris que hi hagi.

Llegeix abans de començar tots els reptes, també el Repte 2, de manera que puguis planificar el teu temps i el teu codi. Intenta separar lògiques i fer el codi el més modular possible. Et faràs més fàcil la tasca!

## Repte 1 - Validació de Formularis (4p)

Crea un fitxer `validacio.js` i general el codi necessari per:

- **Totes les validacions les hauries de poder realitzar a través del teu codi JS**. No hauries de fer servir cap validació a través del codi HTML. Recorda que per evitar que HTML faci les seves pròpies validacions, pots fer servir l'atribut `novalidate` al formulari. **(0,5p)**

- Has de **fer servir almenys tres esdeveniments diferents per les teves validacions**. Intenta fer-ho amb una certa lògica. Fem un petit recordatori dels principals esdeveniments que podríem fer servir en aquest cas: **(0,5p)**

1. `input`: Aquest esdeveniment es dispara cada vegada que l'usuari introdueix o modifica dades en un camp de formulari.
2. `change`: Aquest esdeveniment es dispara quan l'usuari canvia el valor d'un camp de formulari i després surt del camp (per exemple, fent clic fora del camp o passant a un altre camp amb la tecla Tab).
3. `submit`: Aquest esdeveniment es dispara quan l'usuari intenta enviar el formulari. És útil per a validacions finals abans que les dades del formulari siguin enviades al servidor.
4. `focus`: Aquest esdeveniment es dispara quan un camp de formulari rep el focus, és a dir, quan l'usuari fa clic en ell o navega fins a ell amb el teclat.
5. `blur`: Aquest esdeveniment es dispara quan un camp de formulari perd el focus, és a dir, quan l'usuari fa clic fora d'ell o navega fora d'ell amb el teclat. És similar a change, però es dispara encara que el valor del camp no hagi canviat.

### Tens tres apartats de Validacions - 1a Part (1p)

- El nom i cognom han de tenir com a mínim 3 caràcters i menys de 50.
- No poden contenir números (el regex necessari per aquesta validació és `/[0-9]/`)
- L'adreça de correu electrònic ha de tenir com a mínim un caràcter `@` i un caràcter `.`. El regex: `/^[^@]+@[^@]+\.[^@]+$/`

Pots fer servir un altre mètode si vols però seria interessant crear un missatge d'error i fer-lo aparèix (o fer desaparèixer si és correcte) a través d'un `div` amb un missatge d'error a sota de cada camp de text. Ex amb JS:

```js
const error = document.createElement("div");
error.textContent = "El nom ha de tenir com a mínim 3 caràcters i menys de 50.";
// Pots crear-te alguna classe CSS per aquest error amb un color vermell per exemple
error.classList.add("error");
// Si fas servir 'parentNode' pots afegir l'error a sota del camp de text
document.querySelector('input[name="nom"]').parentNode.appendChild(error);
```

### Validacions - 2a Part (1p)

- El gènere ha de ser una de les opcions disponibles al formulari.
- Ha de ser major d'edat per poder realitzar la comanda. En aquest cas, mostra un `alert` amb el missatge d'error.
- El text a "Message" ha de tenir com a mínim 10 caràcters i com a màxim 200.

### Validacions - 3a Part (1p)

**Important!:** Per fer aquesta part hauràs de realitzar alguns passos del Repte 2 abans.

- Has de realitzar les següents validacions (normalment quan l'usuari fa clic al botó de "Enviar" o "Submit" del formulari) (1p):
  - El producte ha de ser una de les opcions disponibles al formulari.
  - La quantitat ha de ser un nombre enter entre 1 i 10.
  - En aquest cas mostra l'error a través d'un `alert` amb el missatge d'error.

## Repte 2 - Afegir Productes al Formulari(5p)

Fes un cop d'ull al fitxer `productes.js` i afegeix el codi necessari per:

- **(1p)** Carregar els productes disponibles al formulari. Aquests hauran d'aparèixer com opcions de la llista de selecció de productes (`select`).
- **(2p)** Quan l'usuari seleccioni un producte i una quantitat, aquest s'ha d'afegir a una llista de productes que es mostrarà a sota del formulari. Aquesta llista haurà de mostrar:
  - El nom del producte
  - La quantitat i el preu total (preu unitari \* quantitat).
- **(2p)** Finalment hauràs de mostrar el preu total de la comanda a sota de la llista de productes.

Un cop més, hauràs de realitzar tot el codi a través de JS. Evita modificar el codi HTML directament a no ser que no trobis cap altra solució.
