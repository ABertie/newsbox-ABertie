import { fetchApi } from "./fetchApi";
// export default (async function API() {
//     let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ`)
//         let data = await response.json()
//         return data
// })()

export default (async function() {
    if (!window.location.pathname.includes("index.html")) return
    
    let categories = ["arts", "automobiles", "books/review", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
    
    const MAIN = document.querySelector("main")
    
    categories.forEach(element => {
        const CATEGORY = document.createElement("section")
        const BUTTON = document.createElement("button")
        BUTTON.innerHTML = element
        BUTTON.addEventListener("click", function clickHandler() {
            let URL = `https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ`
            console.log(data);
            
            if (CATEGORY.childElementCount !== 1) {
                CATEGORY.innerHTML = ""
                CATEGORY.append(BUTTON)
            }
            else {
                // CATEGORY.innerHTML = `
                // <button>${data.results[0].section}</button>
                // <article>
                //     <img src="${data.results[0].multimedia[2].url}">
                //     <h1>${data.results[0].title}</h1>
                //     <p>${data.results[0].abstract}</p>
                //     </article>`
                    
                }
            })
            
            if (CATEGORY.innerHTML === "") CATEGORY.append(BUTTON)
            MAIN.append(CATEGORY)
    });
    
    // console.log(data.results[0].section);
    // console.log(data.results[0].multimedia[2].url);
    // console.log(data.results[0].title);
    // console.log(data.results[0].abstract);
    
    // MAIN.innerHTML = `
    //     <button>${data.results[0].section}</button>
    //         <article>
    //             <img src="${data.results[0].multimedia[2].url}">
    //             <h1>${data.results[0].title}</h1>
    //             <p>${data.results[0].abstract}</p>
    //         </article>`

})()