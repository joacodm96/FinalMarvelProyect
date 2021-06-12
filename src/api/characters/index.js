import { GET_CHARACTERS_LIST } from "../constants";

export const getCharacters = async () => {
    const response = await fetch(GET_CHARACTERS_LIST);
    const data = await response.json();
    return data.data.results
}
// Crear searchCharacterByTerm