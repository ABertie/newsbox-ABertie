import { saveArticle } from "./saveArticle";

export function swipe() {    
    const ARTICLES = document.querySelectorAll("article")
    ARTICLES.forEach(article => {
        const BUTTON = article.querySelector(".saveButton")
        BUTTON.addEventListener("click", saveArticle)

        article.addEventListener("touchstart", touchHandler)
        article.addEventListener("touchend", touchHandler)
        
        let x
        
        function touchHandler(event) {
            const TOUCH__EVENT = event.changedTouches[0].clientX
            
            if (event.type === "touchstart") {
                x = TOUCH__EVENT
            }
            else if (event.type === "touchend") {
    
                let Direction
                const TOLERANCE = 50
    
                if (x - TOLERANCE > TOUCH__EVENT) Direction = "Left"
                else Direction = null
    
                if(Direction) {
                    article.addEventListener("animationstart", function() {
                        article.removeEventListener("touchstart", touchHandler)
                        article.removeEventListener("touchend", touchHandler)
                    })
                    article.addEventListener("animationend", function() {
                        article.style.left = "-25%"
                        article.addEventListener("touchstart", touchHandler)
                        article.addEventListener("touchend", touchHandler)
                    })
    
                    article.style.animation = `move${Direction} 1s ease`
                    Direction = null
                }
    
                x = null
            }
        }
    });
}