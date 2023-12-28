var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiUrl = "https://swapi.dev/api/people";
function fetchStarWarsPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const data = yield response.json();
            return data.results;
        }
        catch (error) {
            console.error("Error fetching Star Wars people:", error.message);
            throw error;
        }
    });
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
