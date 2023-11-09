export default (function () {
    const MAIN = document.querySelector("main")
    MAIN.addEventListener("touchstart", touchHandler)
    MAIN.addEventListener("touchend", touchHandler)
    let y
    const LOADER = document.createElement("i")
    LOADER.classList.add("fa-solid")
    LOADER.classList.add("fa-spinner")
    LOADER.classList.add("fa-spin-pulse")
            
    function touchHandler(event) {
        const TOUCH__EVENT = event.changedTouches[0].clientY
        
        if (event.type === "touchstart") {
            y = TOUCH__EVENT
        }
        else if (event.type === "touchend") {

            let Direction
            const TOLERANCE = 100
            
            if (y + TOLERANCE < TOUCH__EVENT) Direction = "Down"
            else Direction = null
            
            if(Direction) {
                MAIN.prepend(LOADER)
                location.reload(location.href)
                Direction = null
            }

            y = null
        }
    }
})()