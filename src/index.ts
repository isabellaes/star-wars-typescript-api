const url = "https://swapi.dev/api/people";

interface character {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];

  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: number;
}

const arrayOfCharacters: character[] = [];

async function getCharacters(): Promise<character[]> {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    console.log(response);
    if (response.status === 200) {
      const data: character[] = await response
        .json()
        .then((characters) =>
          characters.forEach((character: character) =>
            arrayOfCharacters.push(character)
          )
        );

      return data;
    } else {
      throw Error("Något gick fel, försök igen senare");
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(getCharacters());

console.log(arrayOfCharacters);
