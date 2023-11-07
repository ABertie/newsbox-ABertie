let text = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]    

let text1 = text

export default (function () {
    const CHECKLIST = document.querySelector(".categoriesChecklist")
    
    text.forEach(elem => {
        const LABEL = document.createElement("label")
        LABEL.innerHTML = `${elem}<input type="checkbox" name="${elem}" checked>`
        CHECKLIST.append(LABEL)
        
    })
    
    const INPUT = document.querySelectorAll("input")
    

    INPUT.forEach(check => {
        check.addEventListener("click", checkhandler)

        function checkhandler() {
            if (check.checked === false) {
                    let start = text1.slice(0, text1.indexOf(check.name))
                    let end = text1.slice(text1.indexOf(check.name) + 1, text1.length)
                    text1 = start.concat(end)
                    console.log(text1);
                }
        }
    })

})()

export let categories = text1
