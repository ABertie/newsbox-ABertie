function getJSONfromLocalStorage(key) {
	const OBJECT = localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key))
		: []
	return OBJECT
}

export default getJSONfromLocalStorage