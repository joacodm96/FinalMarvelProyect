const apiBase = "https://gateway.marvel.com"
const hash = "cfbfd4fc9edd8acbe45e37c87ab5cba3"
const accesKey = 'a17e0b037ef914943a9509824d4f1272'
const authorizedKeyParams = `ts=1&apikey=${accesKey}&hash=${hash}`

//API calls

export const GET_CHARACTERS_LIST= (letters) => `${apiBase}/v1/public/characters?${authorizedKeyParams}&nameStartsWith=${letters}&limit=100`
export const GET_CHARACTERS_LIST_BY_NAME = (name) => `${apiBase}/v1/public/characters?${authorizedKeyParams}&nameStartsWith=${name}&limit=100`
export const GET_COMICS_LIST_BY_NAME = (name) => `${apiBase}/v1/public/comics?${authorizedKeyParams}&titleStartsWith=${name}&limit=100&orderBy=-onsaleDate`
export const GET_COMICS_DETAILS_BY_ID = (id) => `${apiBase}/v1/public/comics/${id}?${authorizedKeyParams}`
export const GET_CHARACTER_COMICS_BY_ID = (id) => `${apiBase}/v1/public/characters/${id}/comics?${authorizedKeyParams}&limit=100`

