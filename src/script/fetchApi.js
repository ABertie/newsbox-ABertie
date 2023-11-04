export async function fetchApi(URL) {
    let response = await fetch(URL)
    let data = await response.json()
    return data
}