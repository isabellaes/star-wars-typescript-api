const apiUrl = "https://swapi.dev/api/people";

interface Person {
  name: string;
  height: string;
  mass: string;
}

async function fetchStarWarsPeople(): Promise<Person[]> {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: { results: Person[] } = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching Star Wars people:", error.message);
    throw error;
  }
}

fetchStarWarsPeople()
  .then((people) => {
    console.log("Star Wars people:", people);
    people.forEach((p) => {
      const element = document.createElement("p");
      element.innerHTML = p.name;
      element.addEventListener("click", () => {
        const name = document.querySelector(".name");
        name.innerHTML = p.name;
        const height = document.querySelector(".height");
        height.innerHTML = p.height;
        const mass = document.querySelector(".mass");
        mass.innerHTML = p.mass;
      });
      div.appendChild(element);
    });
  })
  .catch((error) => {
    console.error("API call failed:", error);
  });

const div = document.querySelector(".characters");
