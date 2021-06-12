const apiBase = "http://gateway.marvel.com/v1/public"
const hash = "cfbfd4fc9edd8acbe45e37c87ab5cba3"
const accesKey = 'a17e0b037ef914943a9509824d4f1272';

export const GET_CHARACTERS_LIST = `${apiBase}/characters?ts=1&apikey=${accesKey}&hash=${hash}&limit=100`
// export const SEARCH_CHARACTER = (term) => {
//     return `${apiBase}/characters/${id}?ts=1&apikey=${accesKey}&hash=${hash}&nameStartsWith=${term}`
// }